/**
 * ============================================================
 * FILM-API - Einstiegspunkt der NestJS-Applikation
 * ============================================================
 *
 * Diese Datei konfiguriert die grundlegenden Middleware-Komponenten:
 * - Sicherheits-Header (Helmet) gegen XSS, Clickjacking etc.
 * - CORS für Cross-Origin-Requests (wichtig für SPA-Frontends)
 * - Globale Validierung eingehender Daten
 * - Strukturierte Logs für Monitoring (z.B. ELK-Stack, Grafana)
 * - OpenAPI/Swagger-Dokumentation
 *
 * Referenz: NestJS Dokumentation - https://docs.nestjs.com/
 */

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        // bufferLogs: Logs werden gepuffert bis Pino initialisiert ist.
        // Dadurch gehen keine Startmeldungen verloren.
        bufferLogs: true,
    });

    // ============================================================
    // SICHERHEIT: Helmet setzt wichtige HTTP-Security-Header
    // ============================================================
    // Schützt gegen: XSS, Clickjacking, MIME-Sniffing, etc.
    // In der Vorlesung "Web Security" (OWASP Top 10) behandelt.
    // Dokumentation: https://helmetjs.github.io/
    app.use(helmet());

    // ============================================================
    // CORS: Cross-Origin Resource Sharing
    // ============================================================
    // Erlaubt Requests von anderen Domains (z.B. Frontend auf Port 4200).
    // Im Produktivbetrieb sollte 'origin' auf die erlaubten Domains begrenzt werden.
    app.enableCors({
        origin: process.env.CORS_ORIGIN || '*', // Konfigurierbar via Env-Variable
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        credentials: true, // Erlaubt Cookies/Authorization-Header
    });

    // ============================================================
    // LOGGING: Pino als strukturierter Logger
    // ============================================================
    // Pino ist performanter als console.log und produziert JSON-Logs.
    // Diese können von ELK-Stack, Grafana Loki oder CloudWatch verarbeitet werden.
    // Referenz: https://github.com/pinojs/pino
    app.useLogger(app.get(Logger));

    // ============================================================
    // VALIDIERUNG: Globale ValidationPipe
    // ============================================================
    // Jeder eingehende Request wird gegen die DTO-Definitionen validiert.
    // class-validator Decorators (@IsString, @IsEmail, etc.) greifen hier.
    // Dokumentation: https://docs.nestjs.com/techniques/validation
    app.useGlobalPipes(
        new ValidationPipe({
            // whitelist: Entfernt Properties, die nicht im DTO definiert sind.
            // Sicherheitsmaßnahme gegen Mass Assignment Angriffe.
            whitelist: true,

            // forbidNonWhitelisted: Wirft 400 Bad Request bei unbekannten Properties.
            // Strenger als 'whitelist' allein - für APIs empfohlen.
            forbidNonWhitelisted: true,

            // transform: Konvertiert Plain Objects automatisch in DTO-Klasseninstanzen.
            // Ermöglicht Typ-Sicherheit zur Laufzeit.
            transform: true,

            // enableImplicitConversion: Query-Parameter wie "?id=5" werden zu number.
            // Ohne dies wäre req.query.id immer ein String.
            transformOptions: {
                enableImplicitConversion: true,
            },
        }),
    );

    // ============================================================
    // SWAGGER/OPENAPI: Automatische API-Dokumentation
    // ============================================================
    // Generiert interaktive Dokumentation unter /api
    // Gemäß REST-Richtlinien sollte jede API dokumentiert sein.
    const swaggerConfig = new DocumentBuilder()
        .setTitle('Film-API')
        .setDescription(
            'REST- und GraphQL-API für die Film-Datenbank.\n\n' +
                '**Authentifizierung:** Bearer-Token via Keycloak (OIDC)\n\n' +
                '**Uni-Projekt:** Appserver mit NestJS',
        )
        .setVersion('1.0.0')
        .setContact('Student', '', 'student@hs-example.de')
        .setLicense('MIT', 'https://opensource.org/licenses/MIT')
        .addBearerAuth(
            { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
            'Keycloak-JWT', // Name des Security-Schemas
        )
        .addTag('Film', 'CRUD-Operationen für Filme')
        .addTag('Health', 'Healthcheck-Endpunkte für Docker/Kubernetes')
        .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, document, {
        // Swagger UI Konfiguration
        swaggerOptions: {
            persistAuthorization: true, // Token bleibt nach Reload erhalten
        },
    });

    // ============================================================
    // SERVER START
    // ============================================================
    const port = process.env.PORT ?? 3000;
    await app.listen(port);

    // Logger Instanz für Startup-Meldungen (nicht console.log!)
    const logger = app.get(Logger);
    logger.log(`🎬 Film-API gestartet auf http://localhost:${port}`);
    logger.log(`📚 Swagger-Dokumentation: http://localhost:${port}/api`);
    logger.log(`◈ GraphQL-Playground: http://localhost:${port}/graphql`);
}

bootstrap();
