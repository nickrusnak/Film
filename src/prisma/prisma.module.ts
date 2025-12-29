import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Macht den Service in der gesamten App verfügbar
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}
