import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    UseGuards,
    ParseIntPipe,
    Query,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiTags,
    ApiParam,
    ApiQuery,
    ApiResponse,
} from '@nestjs/swagger';
import { KeycloakAuthGuard, Roles, RolesGuard } from '../auth';
import { FilmService } from './film.service';
import { CreateFilmDto, UpdateFilmDto } from './dto';

@ApiTags('Film')
@Controller('film')
export class FilmController {
    constructor(private readonly filmService: FilmService) { }

    // ========================================
    // ÖFFENTLICHE ENDPUNKTE
    // ========================================

    @Get()
    @ApiOperation({ summary: 'Alle Filme abrufen' })
    @ApiResponse({ status: 200, description: 'Liste aller Filme' })
    findAll() {
        return this.filmService.findAll();
    }

    @Get('search')
    @ApiOperation({ summary: 'Filme suchen' })
    @ApiQuery({ name: 'q', description: 'Suchbegriff' })
    search(@Query('q') query: string) {
        return this.filmService.search(query || '');
    }

    @Get(':id')
    @ApiOperation({ summary: 'Einzelnen Film abrufen' })
    @ApiParam({ name: 'id', description: 'Film-ID' })
    @ApiResponse({ status: 200, description: 'Der Film' })
    @ApiResponse({ status: 404, description: 'Film nicht gefunden' })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.filmService.findOne(id);
    }

    // ========================================
    // GESCHÜTZTE ENDPUNKTE (Auth erforderlich)
    // ========================================

    @Post()
    @UseGuards(KeycloakAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Neuen Film erstellen' })
    @ApiResponse({ status: 201, description: 'Film erstellt' })
    @ApiResponse({ status: 401, description: 'Nicht authentifiziert' })
    create(@Body() dto: CreateFilmDto) {
        return this.filmService.create(dto);
    }

    @Put(':id')
    @UseGuards(KeycloakAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Film aktualisieren' })
    @ApiParam({ name: 'id', description: 'Film-ID' })
    @ApiResponse({ status: 200, description: 'Film aktualisiert' })
    @ApiResponse({ status: 404, description: 'Film nicht gefunden' })
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateFilmDto,
    ) {
        return this.filmService.update(id, dto);
    }

    // ========================================
    // ADMIN-ONLY ENDPUNKTE
    // ========================================

    @Delete(':id')
    @UseGuards(KeycloakAuthGuard, RolesGuard)
    @Roles('admin')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Film löschen (nur Admin)' })
    @ApiParam({ name: 'id', description: 'Film-ID' })
    @ApiResponse({ status: 200, description: 'Film gelöscht' })
    @ApiResponse({ status: 403, description: 'Keine Berechtigung' })
    @ApiResponse({ status: 404, description: 'Film nicht gefunden' })
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.filmService.delete(id);
    }
}
