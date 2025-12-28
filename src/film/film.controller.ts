import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { KeycloakAuthGuard, Roles, RolesGuard } from '../auth';

@ApiTags('Film')
@Controller('film')
export class FilmController {
    // Öffentlicher Endpunkt - keine Auth nötig
    @Get()
    @ApiOperation({ summary: 'Alle Filme abrufen (öffentlich)' })
    findAll() {
        return {
            message: 'Liste aller Filme (öffentlich)',
            films: [
                { id: 1, titel: 'Inception', regisseur: 'Christopher Nolan' },
                { id: 2, titel: 'The Matrix', regisseur: 'Wachowskis' },
            ],
        };
    }

    // Geschützter Endpunkt - Auth erforderlich
    @Get('private')
    @UseGuards(KeycloakAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Private Filmdaten (Auth erforderlich)' })
    findPrivate(@Request() req: any) {
        return {
            message: 'Du bist authentifiziert!',
            user: req.user,
        };
    }

    // Admin-only Endpunkt
    @Get('admin')
    @UseGuards(KeycloakAuthGuard, RolesGuard)
    @Roles('admin')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Admin-Bereich (nur für Admins)' })
    adminOnly(@Request() req: any) {
        return {
            message: 'Willkommen im Admin-Bereich!',
            user: req.user,
        };
    }
}
