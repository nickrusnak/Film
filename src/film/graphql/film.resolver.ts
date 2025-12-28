import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { FilmType } from './film.type';
import { CreateFilmInput, UpdateFilmInput } from './film.input';
import { FilmService } from '../film.service';
import { KeycloakAuthGuard, Roles, RolesGuard } from '../../auth';

@Resolver(() => FilmType)
export class FilmResolver {
    constructor(private readonly filmService: FilmService) { }

    // ========================================
    // QUERIES (Lesen)
    // ========================================

    @Query(() => [FilmType], { description: 'Alle Filme abrufen' })
    async filme(): Promise<FilmType[]> {
        return this.filmService.findAll() as unknown as FilmType[];
    }

    @Query(() => FilmType, { description: 'Einzelnen Film per ID abrufen' })
    async film(@Args('id', { type: () => Int }) id: number): Promise<FilmType> {
        return this.filmService.findOne(id) as unknown as FilmType;
    }

    @Query(() => [FilmType], { description: 'Filme suchen' })
    async filmeSearch(
        @Args('query') query: string,
    ): Promise<FilmType[]> {
        return this.filmService.search(query) as unknown as FilmType[];
    }

    // ========================================
    // MUTATIONS (Schreiben) - Auth erforderlich
    // ========================================

    @Mutation(() => FilmType, { description: 'Neuen Film erstellen' })
    @UseGuards(KeycloakAuthGuard)
    async createFilm(
        @Args('input') input: CreateFilmInput,
    ): Promise<FilmType> {
        return this.filmService.create(input as any) as unknown as FilmType;
    }

    @Mutation(() => FilmType, { description: 'Film aktualisieren' })
    @UseGuards(KeycloakAuthGuard)
    async updateFilm(
        @Args('id', { type: () => Int }) id: number,
        @Args('input') input: UpdateFilmInput,
    ): Promise<FilmType> {
        return this.filmService.update(id, input as any) as unknown as FilmType;
    }

    @Mutation(() => FilmType, { description: 'Film löschen (nur Admin)' })
    @UseGuards(KeycloakAuthGuard, RolesGuard)
    @Roles('admin')
    async deleteFilm(
        @Args('id', { type: () => Int }) id: number,
    ): Promise<FilmType> {
        return this.filmService.delete(id) as unknown as FilmType;
    }
}
