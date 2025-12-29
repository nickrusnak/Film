import { Module } from '@nestjs/common';
import { FilmController } from './film.controller';
import { FilmService } from './film.service';
import { FilmResolver } from './graphql/film.resolver';

@Module({
    controllers: [FilmController],
    providers: [FilmService, FilmResolver],
    exports: [FilmService],
})
export class FilmModule {}
