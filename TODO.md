# 📋 Antigravity - Projekt-Anforderungen

## Status-Legende
- ✅ Erledigt
- 🔄 In Bearbeitung
- ⬜ Offen

---

## 1. Projekt-Setup & Infrastruktur

- ✅ Git-Repository erstellt
- ✅ PostgreSQL via Docker Compose
- ⬜ NestJS-Projekt mit pnpm initialisieren
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

- ⬜ `nestjs-pino` und `pino-http` installieren
- ⬜ Logger in `main.ts` und `app.module.ts` konfigurieren

---

## 4. API-Dokumentation

- ⬜ `@nestjs/swagger` installieren
- ⬜ Swagger unter `/api` verfügbar machen

---

## 5. Validierung

- ⬜ `class-validator` und `class-transformer` installieren
- ⬜ Globale `ValidationPipe` in `main.ts` einrichten

---

## 6. Healthchecks

- ⬜ Health-Check Modul (Nest Terminus) hinzufügen
- ⬜ Datenbankverbindung prüfen

---

## 7. Testing

- ⬜ `vitest` statt Jest konfigurieren
- ⬜ `vitest.config.ts` erstellen
- ⬜ Ersten Test schreiben und ausführen

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

> **Nächster Schritt:** Schritt 2 - Datenbank-Modellierung mit Prisma
