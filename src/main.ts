import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        // Nest's default logger deaktivieren, Pino übernimmt
        bufferLogs: true,
    });

    // Pino Logger als globalen Logger setzen
    app.useLogger(app.get(Logger));

    // Globale Validierung für alle Requests
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // Entfernt unbekannte Properties
            forbidNonWhitelisted: true, // Wirft Fehler bei unbekannten Properties
            transform: true, // Transformiert Payloads in DTO-Klassen
            transformOptions: {
                enableImplicitConversion: true, // Automatische Typ-Konvertierung
            },
        }),
    );

    // Swagger Konfiguration
    const swaggerConfig = new DocumentBuilder()
        .setTitle('Film-API')
        .setDescription('REST API für die Film-Datenbank - Uni-Projekt Antigravity')
        .setVersion('1.0')
        .addBearerAuth() // Für spätere Keycloak-Integration
        .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, document);

    const port = process.env.PORT ?? 3000;
    await app.listen(port);

    const logger = app.get(Logger);
    logger.log(`🎬 Film-API läuft auf http://localhost:${port}`);
    logger.log(`📚 Swagger-Doku: http://localhost:${port}/api`);
}

bootstrap();

