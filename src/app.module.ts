/**
 * ============================================================
 * APP MODULE - Zentrales Modul der NestJS-Applikation
 * ============================================================
 * 
 * Das AppModule ist das Root-Modul und importiert alle Feature-Module.
 * NestJS folgt dem Modular-Monolith-Ansatz: Jede Fachdomäne (Film, Auth, etc.)
 * hat ihr eigenes Modul, um Separation of Concerns zu gewährleisten.
 * 
 * Architektur-Pattern: Dependency Injection (DI)
 * Alle Services werden via DI-Container verwaltet, nicht manuell instanziiert.
 */

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LoggerModule } from 'nestjs-pino';
import { join } from 'path';

// Feature-Module (Separation of Concerns)
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { FilmModule } from './film/film.module';

@Module({
    imports: [
        // ============================================================
        // LOGGING: Pino für strukturiertes, JSON-basiertes Logging
        // ============================================================
        // Warum Pino statt console.log?
        // 1. JSON-Format: Kann von Log-Aggregatoren (ELK, Loki) geparst werden
        // 2. Performance: Pino ist einer der schnellsten Node.js-Logger
        // 3. Request-Tracing: Jeder Request bekommt eine eindeutige ID
        // Referenz: https://github.com/iamolegga/nestjs-pino
        LoggerModule.forRoot({
            pinoHttp: {
                // In Development: Lesbare, formatierte Logs mit Farben
                // In Production: Kein Transport -> reines JSON für Log-Shipper
                transport:
                    process.env.NODE_ENV !== 'production'
                        ? {
                            target: 'pino-pretty',
                            options: {
                                colorize: true,
                                singleLine: true,
                                translateTime: 'SYS:dd.mm.yyyy HH:MM:ss',
                                ignore: 'pid,hostname', // Weniger Rauschen in Dev
                            },
                        }
                        : undefined, // In Prod: Raw JSON-Logs

                // Log-Level je nach Umgebung: Debug in Dev, Info in Prod
                level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',

                // Request-ID für Distributed Tracing (z.B. mit Jaeger/Zipkin)
                // Falls der Client keine ID sendet, generieren wir eine UUID
                genReqId: (req) =>
                    req.headers['x-request-id']?.toString() || crypto.randomUUID(),
            },
        }),

        // ============================================================
        // GRAPHQL: Apollo Server Integration
        // ============================================================
        // GraphQL bietet typisierte Queries und ermöglicht dem Client,
        // exakt die benötigten Felder abzufragen (kein Over-Fetching).
        // Code-First Ansatz: Schema wird aus den TypeScript-Klassen generiert.
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,

            // autoSchemaFile: Schema wird automatisch aus Resolvers generiert
            // und in src/schema.gql geschrieben (für Versionskontrolle)
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true, // Alphabetisch sortiert für bessere Lesbarkeit

            // Playground: Interaktive IDE zum Testen von GraphQL-Queries
            // In Production sollte dies deaktiviert werden!
            playground: process.env.NODE_ENV !== 'production',
            introspection: process.env.NODE_ENV !== 'production',
        }),

        // ============================================================
        // DATENBANK: Prisma ORM
        // ============================================================
        // PrismaModule ist @Global() - der PrismaService steht überall bereit.
        // Prisma bietet Type-Safety und automatische Migrations.
        PrismaModule,

        // ============================================================
        // AUTHENTIFIZIERUNG: Keycloak (OIDC/OAuth2)
        // ============================================================
        // JWT-Validierung erfolgt via JWKS (JSON Web Key Set).
        // Keycloak rotiert seine Schlüssel automatisch - JWKS holt immer den aktuellen.
        AuthModule,

        // ============================================================
        // FEATURE-MODULE: Film-Domäne
        // ============================================================
        // Enthält Controller (REST), Resolver (GraphQL) und Service (Business-Logik)
        // nach dem klassischen 3-Schichten-Modell.
        FilmModule,

        // ============================================================
        // HEALTH-CHECKS: Für Docker/Kubernetes Readiness/Liveness Probes
        // ============================================================
        // Der /health Endpunkt prüft, ob die DB erreichbar ist.
        // Docker nutzt dies für automatische Container-Neustarts bei Fehlern.
        HealthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
