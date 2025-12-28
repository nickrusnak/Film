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
- ⬜ Keycloak in Docker Compose integrieren
- ⬜ pgAdmin in Docker Compose integrieren

---

## 2. Datenbank & ORM

- ✅ Prisma installiert
- ✅ Prisma Schema mit Film-Domain erstellt (User, Film, Review, Favorite)
- ✅ Migration durchgeführt (`init-film`)
- ⬜ DB-Verbindung testen

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

- ⬜ OIDC/OAuth2 via Keycloak
- ⬜ Guards und Strategien implementieren

---

## 9. GraphQL (optional/später)

- ⬜ Apollo Server integrieren
- ⬜ GraphQL-Schema erstellen

---

## 10. Dokumentation (erweitert)

- ⬜ AsciiDoctor einrichten
- ⬜ PlantUML-Diagramme erstellen

---

## 11. Code-Qualität

- ⬜ ESLint konfigurieren
- ⬜ Prettier konfigurieren

---

> **Nächster Schritt:** Schritt 4 - Swagger API-Dokumentation
