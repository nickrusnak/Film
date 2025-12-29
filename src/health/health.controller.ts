import { Controller, Get } from '@nestjs/common';
import {
    HealthCheck,
    HealthCheckService,
    HealthCheckResult,
    PrismaHealthIndicator,
} from '@nestjs/terminus';
import { PrismaService } from '../prisma/prisma.service';

@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private prismaHealth: PrismaHealthIndicator,
        private prisma: PrismaService,
    ) {}

    @Get()
    @HealthCheck()
    check(): Promise<HealthCheckResult> {
        return this.health.check([
            // Prüft ob die Datenbank erreichbar ist
            () => this.prismaHealth.pingCheck('database', this.prisma),
        ]);
    }
}
