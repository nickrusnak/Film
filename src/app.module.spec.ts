/**
 * ============================================================
 * INTEGRATIONSTESTS - Film-API
 * ============================================================
 * 
 * Diese Tests prüfen die API-Endpunkte gegen eine echte NestJS-Instanz.
 * Im Gegensatz zu Unit-Tests wird hier das gesamte Request/Response-Verhalten getestet.
 * 
 * Testframework: Vitest (schneller als Jest, native ESM-Unterstützung)
 * HTTP-Client: supertest (Standard für NestJS E2E-Tests)
 * 
 * Ausführung: pnpm test oder pnpm test:watch
 */

import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './app.module';

describe('Film-API Integrationstests', () => {
    let app: INestApplication;

    // ============================================================
    // SETUP: Vor allen Tests die App starten
    // ============================================================
    beforeAll(async () => {
        // Test-Modul erstellen (gleiche Konfiguration wie Produktion)
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        // NestApplication erstellen und konfigurieren
        app = moduleFixture.createNestApplication();

        // Gleiche ValidationPipe wie in main.ts - wichtig für konsistente Tests!
        app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
                forbidNonWhitelisted: true,
                transform: true,
            }),
        );

        await app.init();
    });

    // ============================================================
    // TEARDOWN: Nach allen Tests aufräumen
    // ============================================================
    afterAll(async () => {
        await app.close();
    });

    // ============================================================
    // HEALTH-CHECK TESTS
    // ============================================================
    // Warum Health-Checks testen?
    // Docker/Kubernetes nutzen diese Endpunkte für Liveness/Readiness Probes.
    // Ein fehlerhafter Healthcheck führt zu Container-Neustarts.
    describe('GET /health', () => {
        it('sollte Status 200 und Datenbank-Status zurückgeben', async () => {
            // Wir testen hier, ob die Datenbankverbindung funktioniert.
            // Der Health-Endpunkt macht einen Ping gegen PostgreSQL.
            const response = await request(app.getHttpServer())
                .get('/health')
                .expect(200);

            // Prüfen der Response-Struktur
            expect(response.body).toHaveProperty('status');
            expect(response.body.status).toBe('ok');

            // Prüfen ob Datenbank-Check enthalten ist
            expect(response.body).toHaveProperty('info');
            expect(response.body.info).toHaveProperty('database');
            expect(response.body.info.database.status).toBe('up');
        });
    });

    // ============================================================
    // FILM-ENDPUNKT TESTS
    // ============================================================
    describe('GET /film', () => {
        it('sollte ein Array von Filmen zurückgeben', async () => {
            // Öffentlicher Endpunkt - keine Authentifizierung nötig
            const response = await request(app.getHttpServer())
                .get('/film')
                .expect(200);

            // Response muss ein Array sein (auch wenn leer)
            expect(Array.isArray(response.body)).toBe(true);
        });

        it('sollte 404 bei nicht existierender Film-ID zurückgeben', async () => {
            // Wir testen hier das Error-Handling bei ungültigen IDs
            const response = await request(app.getHttpServer())
                .get('/film/999999')
                .expect(404);

            expect(response.body).toHaveProperty('message');
            expect(response.body.message).toContain('nicht gefunden');
        });
    });

    // ============================================================
    // VALIDIERUNGS-TESTS
    // ============================================================
    describe('POST /film (Validierung)', () => {
        it('sollte 401 ohne Authorization-Header zurückgeben', async () => {
            // Geschützte Endpunkte erfordern ein JWT-Token
            await request(app.getHttpServer())
                .post('/film')
                .send({ titel: 'Test Film' })
                .expect(401);
        });
    });

    // ============================================================
    // GRAPHQL-TESTS
    // ============================================================
    describe('POST /graphql', () => {
        it('sollte eine GraphQL-Query ausführen können', async () => {
            const query = `
                query {
                    filme {
                        id
                        titel
                    }
                }
            `;

            const response = await request(app.getHttpServer())
                .post('/graphql')
                .send({ query })
                .expect(200);

            // GraphQL-Response hat immer ein 'data' Feld
            expect(response.body).toHaveProperty('data');
            expect(response.body.data).toHaveProperty('filme');
            expect(Array.isArray(response.body.data.filme)).toBe(true);
        });
    });
});
