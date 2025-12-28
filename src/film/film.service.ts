import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFilmDto, UpdateFilmDto } from './dto';
import { Prisma } from '../generated/prisma';

@Injectable()
export class FilmService {
    constructor(private prisma: PrismaService) { }

    // Alle Filme abrufen
    async findAll() {
        return this.prisma.film.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    // Film per ID finden
    async findOne(id: number) {
        const film = await this.prisma.film.findUnique({
            where: { id },
        });

        if (!film) {
            throw new NotFoundException(`Film mit ID ${id} nicht gefunden`);
        }

        return film;
    }

    // Neuen Film erstellen
    async create(dto: CreateFilmDto) {
        // Konvertiere bewertung zu Prisma Decimal falls vorhanden
        const data: Prisma.FilmCreateInput = {
            titel: dto.titel,
            originaltitel: dto.originaltitel,
            genre: dto.genre,
            regisseur: dto.regisseur,
            erscheinungsjahr: dto.erscheinungsjahr,
            dauer: dto.dauer,
            bewertung: dto.bewertung,
            beschreibung: dto.beschreibung,
            sprache: dto.sprache,
            land: dto.land,
            poster: dto.poster,
        };

        return this.prisma.film.create({ data });
    }

    // Film aktualisieren
    async update(id: number, dto: UpdateFilmDto) {
        // Prüfen ob Film existiert
        await this.findOne(id);

        const data: Prisma.FilmUpdateInput = {
            titel: dto.titel,
            originaltitel: dto.originaltitel,
            genre: dto.genre,
            regisseur: dto.regisseur,
            erscheinungsjahr: dto.erscheinungsjahr,
            dauer: dto.dauer,
            bewertung: dto.bewertung,
            beschreibung: dto.beschreibung,
            sprache: dto.sprache,
            land: dto.land,
            poster: dto.poster,
        };

        return this.prisma.film.update({
            where: { id },
            data,
        });
    }

    // Film löschen
    async delete(id: number) {
        // Prüfen ob Film existiert
        await this.findOne(id);

        return this.prisma.film.delete({
            where: { id },
        });
    }

    // Filme suchen (optional für später)
    async search(query: string) {
        return this.prisma.film.findMany({
            where: {
                OR: [
                    { titel: { contains: query, mode: 'insensitive' } },
                    { regisseur: { contains: query, mode: 'insensitive' } },
                    { beschreibung: { contains: query, mode: 'insensitive' } },
                ],
            },
        });
    }
}
