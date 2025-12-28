import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        // Nest's default logger deaktivieren, Pino übernimmt
        bufferLogs: true,
    });

    // Pino Logger als globalen Logger setzen
    app.useLogger(app.get(Logger));

    const port = process.env.PORT ?? 3000;
    await app.listen(port);

    const logger = app.get(Logger);
    logger.log(`🎬 Film-API läuft auf http://localhost:${port}`);
}

bootstrap();
