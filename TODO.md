# 📋 Antigravity - Projekt-Anforderungen

## Status-Legende
- ✅ Erledigt
- 🔄 In Bearbeitung
- ⬜ Offen

---

## 1. Projekt-Setup & Infrastruktur

- ✅ Git-Repository erstellt
- ✅ PostgreSQL via Docker Compose
- ✅ NestJS-Projekt mit pnpm initialisiert
- ✅ Keycloak in Docker Compose integriert (Port 8080)
- ✅ pgAdmin in Docker Compose integriert (Port 8888)

---

## 2. Datenbank & ORM

- ✅ Prisma installiert
- ✅ Prisma Schema mit Film-Domain erstellt (User, Film, Review, Favorite)
- ✅ Migration durchgeführt (`init-film`)
- ✅ DB-Verbindung getestet (Healthcheck + Migration)

---

## 3. Logging

- ✅ `nestjs-pino` und `pino-http` installiert
- ✅ Logger in `main.ts` und `app.module.ts` konfiguriert
- ✅ `pino-pretty` für lesbare Dev-Logs

---

## 4. API-Dokumentation

- ✅ `@nestjs/swagger` installiert
- ✅ Swagger unter `/api` verfügbar
- ✅ Bearer Auth für Keycloak vorbereitet

---

## 5. Validierung

- ✅ `class-validator` und `class-transformer` installiert
- ✅ Globale `ValidationPipe` in `main.ts` eingerichtet
- ✅ Whitelist, Transform und implizite Konvertierung aktiv

---

## 6. Healthchecks

- ✅ `@nestjs/terminus` installiert
- ✅ Health-Modul mit Controller erstellt
- ✅ Prisma-Modul als globaler DB-Service
- ✅ Datenbank-Ping unter `/health` verfügbar

---

## 7. Testing

- ✅ `vitest` statt Jest installiert
- ✅ `vitest.config.ts` mit SWC erstellt
- ✅ Ersten Test geschrieben und ausgeführt (2 Tests passed)

---

## 8. Authentifizierung (Auth)

- ✅ OIDC/OAuth2 via Keycloak (JWT Strategy mit JWKS)
- ✅ `KeycloakAuthGuard` für geschützte Endpunkte
- ✅ `RolesGuard` + `@Roles()` Decorator für Rollenprüfung
- ✅ Film-Controller mit Beispiel-Endpunkten

---

## 9. GraphQL (Apollo)

- ✅ Apollo Server integriert
- ✅ GraphQL-Schema auto-generiert (`schema.gql`)
- ✅ FilmResolver mit Queries und Mutations
- ✅ GraphQL Playground unter `/graphql`

---

## 10. Dokumentation (erweitert)

- ✅ AsciiDoctor eingerichtet (`docs/index.adoc`)
- ✅ PlantUML-Diagramme erstellt (Architektur, ER-Diagramm, Auth-Flow)

---

## 11. Code-Qualität

- ✅ ESLint konfiguriert (Flat Config)
- ✅ Prettier konfiguriert
- ✅ Lint und Format Scripts in package.json

---

## 12. Security & Production-Ready

- ✅ `helmet` für HTTP-Security-Header (XSS, Clickjacking, etc.)
- ✅ CORS konfiguriert (Cross-Origin Requests)
- ✅ `@nestjs/throttler` Rate-Limiting (DDoS-Schutz)
- ✅ `.env.example` Vorlage für Umgebungsvariablen
- ✅ Deutsche Kommentare in allen Kern-Dateien

---

## 13. Integrationstests

- ✅ `supertest` für HTTP-Tests installiert
- ✅ Echte Integrationstests für `/health`, `/film`, `/graphql`
- ✅ Testbare Beispiele mit Kommentaren

---

> **Alle Schritte abgeschlossen!** 🎉 Das Projekt ist prüfungsfertig.
