import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LoggerModule } from 'nestjs-pino';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { FilmModule } from './film/film.module';

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
        // GraphQL mit Apollo Server
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
            playground: true, // GraphQL Playground aktivieren
            introspection: true,
        }),
        // Datenbank
        PrismaModule,
        // Authentifizierung (Keycloak)
        AuthModule,
        // Feature Module
        FilmModule,
        // Healthchecks
        HealthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
