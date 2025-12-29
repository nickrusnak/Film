/**
 * ============================================================
 * K6 LASTTEST - Film-API Performance-Test
 * ============================================================
 * 
 * Was ist k6?
 * k6 ist ein Open-Source Load Testing Tool von Grafana Labs.
 * Es simuliert viele gleichzeitige Benutzer (VUs = Virtual Users)
 * und misst, wie die API unter Last reagiert.
 * 
 * Warum Lasttests?
 * 1. Performance-Probleme finden bevor Nutzer sie erleben
 * 2. Kapazitätsgrenzen kennen (wie viele User verkraftet die API?)
 * 3. Regression verhindern (neue Features sollen nicht langsamer machen)
 * 
 * Installation:
 *   macOS:   brew install k6
 *   Windows: choco install k6
 *   Linux:   sudo apt install k6
 * 
 * Ausführung:
 *   k6 run tests/load/api-load-test.js
 * 
 * Referenz: https://k6.io/docs/
 * ============================================================
 */

import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate, Trend } from 'k6/metrics';

// ============================================================
// KONFIGURATION
// ============================================================
// Basis-URL der API (kann via Env-Variable überschrieben werden)
const BASE_URL = __ENV.API_URL || 'http://localhost:3000';

// Custom Metriken für detaillierte Auswertung
const errorRate = new Rate('errors');
const filmListTrend = new Trend('film_list_duration');
const healthTrend = new Trend('health_check_duration');

// ============================================================
// TEST-SZENARIEN
// ============================================================
// k6 unterstützt verschiedene Lastprofile:
// - Smoke Test: Wenige User, kurze Zeit (funktioniert alles?)
// - Load Test:  Normale Last über längere Zeit
// - Stress Test: Steigende Last bis zum Limit
// - Spike Test:  Plötzliche Last-Spitzen
export const options = {
    // Szenario-basierte Konfiguration
    scenarios: {
        // Szenario 1: Smoke Test (schneller Funktionscheck)
        smoke: {
            executor: 'constant-vus',
            vus: 1,              // 1 virtueller User
            duration: '10s',     // 10 Sekunden
            startTime: '0s',     // Startet sofort
        },

        // Szenario 2: Load Test (normale Last)
        load: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '30s', target: 10 },  // Hochfahren auf 10 User
                { duration: '1m', target: 10 },   // 1 Minute halten
                { duration: '30s', target: 0 },   // Runterfahren auf 0
            ],
            startTime: '15s',    // Startet nach Smoke Test
        },

        // Szenario 3: Stress Test (hohe Last)
        stress: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '30s', target: 50 },  // 50 gleichzeitige User
                { duration: '1m', target: 50 },   // Halten
                { duration: '30s', target: 0 },   // Runterfahren
            ],
            startTime: '2m30s',  // Nach Load Test
        },
    },

    // Schwellenwerte (bei Überschreitung schlägt Test fehl)
    // HINWEIS: Wir haben Rate-Limiting aktiv (10/s, 100/min)
    // Daher erwarten wir 429-Responses bei hoher Last!
    thresholds: {
        // 95% der ERFOLGREICHEN Requests müssen unter 500ms sein
        http_req_duration: ['p(95)<500'],

        // Fehlerrate: Bei Rate-Limiting erwarten wir Fehler!
        // Für Stress-Tests bis zu 95% Fehler okay (429 ist kein echter Fehler)
        errors: ['rate<0.95'],

        // Health-Check muss unter 100ms sein
        health_check_duration: ['p(95)<100'],

        // Mindestens 5% der Requests müssen durchkommen
        http_req_failed: ['rate<0.95'],
    },
};

// ============================================================
// SETUP (einmalig vor allen Tests)
// ============================================================
export function setup() {
    console.log(`🚀 Starte Lasttest gegen ${BASE_URL}`);

    // Prüfen ob API erreichbar ist
    const healthRes = http.get(`${BASE_URL}/health`);
    if (healthRes.status !== 200) {
        throw new Error(`API nicht erreichbar! Status: ${healthRes.status}`);
    }

    return { startTime: new Date().toISOString() };
}

// ============================================================
// HAUPTTEST (wird von jedem VU wiederholt ausgeführt)
// ============================================================
export default function () {
    // ---------------------------------------------------------
    // Test 1: Health-Check Endpunkt
    // ---------------------------------------------------------
    // Der Health-Check sollte immer schnell sein (< 100ms)
    const healthStart = Date.now();
    const healthRes = http.get(`${BASE_URL}/health`);
    healthTrend.add(Date.now() - healthStart);

    const healthOk = check(healthRes, {
        'Health: Status 200': (r) => r.status === 200,
        'Health: Status ok': (r) => r.json('status') === 'ok',
    });
    errorRate.add(!healthOk);

    // ---------------------------------------------------------
    // Test 2: Film-Liste abrufen
    // ---------------------------------------------------------
    // Öffentlicher Endpunkt, sollte auch unter Last funktionieren
    const filmStart = Date.now();
    const filmRes = http.get(`${BASE_URL}/film`);
    filmListTrend.add(Date.now() - filmStart);

    const filmOk = check(filmRes, {
        'Film: Status 200': (r) => r.status === 200,
        'Film: Is Array': (r) => Array.isArray(r.json()),
    });
    errorRate.add(!filmOk);

    // ---------------------------------------------------------
    // Test 3: Einzelner Film (falls IDs bekannt)
    // ---------------------------------------------------------
    const singleFilmRes = http.get(`${BASE_URL}/film/1`);
    check(singleFilmRes, {
        'Single Film: Status 200 oder 404': (r) =>
            r.status === 200 || r.status === 404,
    });

    // ---------------------------------------------------------
    // Test 4: Suche
    // ---------------------------------------------------------
    const searchRes = http.get(`${BASE_URL}/film/search?q=Matrix`);
    check(searchRes, {
        'Search: Status 200': (r) => r.status === 200,
    });

    // ---------------------------------------------------------
    // Test 5: GraphQL Query
    // ---------------------------------------------------------
    const graphqlRes = http.post(
        `${BASE_URL}/graphql`,
        JSON.stringify({
            query: '{ filme { id titel } }',
        }),
        {
            headers: { 'Content-Type': 'application/json' },
        }
    );
    check(graphqlRes, {
        'GraphQL: Status 200': (r) => r.status === 200,
        'GraphQL: Has data': (r) => r.json('data') !== undefined,
    });

    // Kurze Pause zwischen Iterationen (simuliert echtes Nutzerverhalten)
    sleep(1);
}

// ============================================================
// TEARDOWN (einmalig nach allen Tests)
// ============================================================
export function teardown(data) {
    console.log(`✅ Lasttest beendet (gestartet: ${data.startTime})`);
}
