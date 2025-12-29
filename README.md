# 🎬 Film-API

NestJS REST & GraphQL API für eine Film-Datenbank.

## 📋 Tech-Stack

| Komponente | Technologie |
|------------|-------------|
| Framework | NestJS |
| API | REST (Express) + GraphQL (Apollo) |
| Datenbank | PostgreSQL + Prisma ORM |
| Auth | Keycloak (OIDC/OAuth2) |
| Docs | Swagger + AsciiDoctor |
| Testing | Vitest |
| Logging | Pino |

---

## 🚀 Schnellstart

### 1. Repository klonen
```bash
git clone <repo-url>
cd film
```

### 2. Dependencies installieren
```bash
pnpm install
```

### 3. Docker Container starten
```bash
docker compose up -d
```

### 4. Datenbank migrieren
```bash
pnpm prisma:migrate
```

### 5. Server starten
```bash
pnpm start:dev
```

---

## 🐳 Docker Befehle

### Container starten/stoppen
```bash
# Alle Container starten
docker compose up -d

# Alle Container stoppen
docker compose down

# Container Status
docker ps

# Logs anzeigen
docker compose logs -f
```

### Einzelne Services
```bash
# Nur PostgreSQL
docker compose up -d db

# Nur Keycloak
docker compose up -d keycloak
```

### Daten zurücksetzen
```bash
# Container und Volumes löschen (ACHTUNG: Datenverlust!)
docker compose down -v
```

---

## 📡 URLs & Ports

| Service | URL | Zugangsdaten |
|---------|-----|--------------|
| **Film-API** | http://localhost:3000 | - |
| **Swagger** | http://localhost:3000/api | - |
| **GraphQL** | http://localhost:3000/graphql | - |
| **Health** | http://localhost:3000/health | - |
| **Keycloak** | http://localhost:8080 | admin / admin |
| **pgAdmin** | http://localhost:8888 | admin@example.com / admin |

---

## 🔧 NPM Scripts

### Entwicklung
```bash
pnpm start:dev      # Development Server (Hot-Reload)
pnpm start          # Production Server
pnpm build          # TypeScript kompilieren
```

### Tests
```bash
pnpm test           # Alle Tests ausführen
pnpm test:watch     # Tests im Watch-Mode
pnpm test:cov       # Tests mit Coverage
```

### Code-Qualität
```bash
pnpm lint           # ESLint prüfen
pnpm lint:fix       # ESLint Fehler automatisch fixen
pnpm format         # Prettier formatieren
pnpm format:check   # Formatierung prüfen
```

### Datenbank (Prisma)
```bash
pnpm prisma:migrate     # Migration ausführen
pnpm prisma:generate    # Prisma Client generieren
npx prisma studio       # Prisma Studio (DB-GUI)
```

---

## 🔑 Keycloak Setup

### Admin-Konsole
1. Öffne http://localhost:8080
2. Login: `admin` / `admin`

### Realm erstellen
1. Klick "master" → "Create realm"
2. Name: `film` → Create

### Client erstellen
1. Clients → Create client
2. Client ID: `film-api`
3. Client authentication: ON → Save

### User erstellen
1. Users → Add user
2. Username eingeben
3. Credentials → Passwort setzen (Temporary: OFF)

---

## 🗄️ pgAdmin Datenbankverbindung

1. Öffne http://localhost:8888
2. Login: `admin@example.com` / `admin`
3. "Add New Server":

| Tab | Feld | Wert |
|-----|------|------|
| General | Name | `Film-DB` |
| Connection | Host | `postgres` |
| Connection | Port | `5432` |
| Connection | Database | `postgres` |
| Connection | Username | `postgres` |
| Connection | Password | `p` |

---

## 📁 Projektstruktur

```
film/
├── src/
│   ├── auth/           # Keycloak Auth Guards
│   ├── film/           # Film CRUD (REST + GraphQL)
│   ├── health/         # Health-Checks
│   ├── prisma/         # Prisma Service
│   ├── generated/      # Prisma Client (auto-generated)
│   ├── app.module.ts   # Root Module
│   └── main.ts         # Entry Point
├── prisma/
│   ├── schema.prisma   # DB Schema
│   └── migrations/     # DB Migrations
├── docs/
│   ├── index.adoc      # AsciiDoctor Doku
│   └── diagrams/       # PlantUML Diagramme
├── docker-compose.yml
├── .env
└── package.json
```

---

## 🌐 API Beispiele

### REST API

```bash
# Alle Filme
curl http://localhost:3000/film

# Film per ID
curl http://localhost:3000/film/1

# Suche
curl "http://localhost:3000/film/search?q=Matrix"

# Film erstellen (Auth nötig)
curl -X POST http://localhost:3000/film \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"titel": "Inception", "regisseur": "Christopher Nolan"}'
```

### GraphQL

```graphql
# Query: Alle Filme
{
  filme {
    id
    titel
    regisseur
    bewertung
  }
}

# Mutation: Film erstellen
mutation {
  createFilm(input: { titel: "Inception" }) {
    id
    titel
  }
}
```

---

## ⚙️ Umgebungsvariablen (.env)

```bash
# Datenbank
DATABASE_URL="postgresql://postgres:p@localhost:5432/postgres?schema=film"

# Node
NODE_ENV=development

# Keycloak
KEYCLOAK_URL=http://localhost:8080
KEYCLOAK_REALM=film
KEYCLOAK_CLIENT_ID=film-api
```

---

## 🐛 Troubleshooting

### Docker nicht verbunden
```bash
# Prüfen ob Docker läuft
docker info

# macOS: Docker Desktop starten
open -a Docker
```

### Datenbank-Verbindung fehlgeschlagen
```bash
# Container Status prüfen
docker ps

# Logs checken
docker compose logs db
```

### Port bereits belegt
```bash
# Prozess auf Port 3000 finden
lsof -i :3000

# Beenden
kill -9 <PID>
```

---

## 📝 Git Workflow

```bash
# Status prüfen
git status

# Änderungen stagen
git add -A

# Commit
git commit -m "beschreibung"

# Push
git push
```

---

**Viel Erfolg mit dem Projekt!** 🚀
