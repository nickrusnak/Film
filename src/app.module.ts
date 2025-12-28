import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

@Module({
    imports: [
        // Pino Logger Modul
        LoggerModule.forRoot({
            pinoHttp: {
                // Transport für lesbare Logs in der Entwicklung
                transport:
                    process.env.NODE_ENV !== 'production'
                        ? {
                            target: 'pino-pretty',
                            options: {
                                colorize: true,
                                singleLine: true,
                                translateTime: 'SYS:dd.mm.yyyy HH:MM:ss',
                                ignore: 'pid,hostname',
                            },
                        }
                        : undefined,
                // Log-Level
                level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
                // Request-ID für Tracing
                genReqId: (req) => req.headers['x-request-id'] || crypto.randomUUID(),
            },
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
