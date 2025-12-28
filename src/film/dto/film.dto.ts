import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsString,
    IsOptional,
    IsInt,
    IsNumber,
    IsArray,
    IsEnum,
    Min,
    Max,
    MaxLength,
} from 'class-validator';

// Genre Enum (muss mit Prisma Schema übereinstimmen)
export enum Genre {
    ACTION = 'ACTION',
    COMEDY = 'COMEDY',
    DRAMA = 'DRAMA',
    HORROR = 'HORROR',
    SCIFI = 'SCIFI',
    THRILLER = 'THRILLER',
    ROMANCE = 'ROMANCE',
    DOCUMENTARY = 'DOCUMENTARY',
    ANIMATION = 'ANIMATION',
    FANTASY = 'FANTASY',
}

// DTO für Film erstellen
export class CreateFilmDto {
    @ApiProperty({ example: 'Inception', description: 'Filmtitel' })
    @IsString()
    @MaxLength(200)
    titel: string;

    @ApiPropertyOptional({ example: 'Inception', description: 'Originaltitel' })
    @IsOptional()
    @IsString()
    @MaxLength(200)
    originaltitel?: string;

    @ApiPropertyOptional({
        example: ['SCIFI', 'ACTION'],
        enum: Genre,
        isArray: true,
    })
    @IsOptional()
    @IsArray()
    @IsEnum(Genre, { each: true })
    genre?: Genre[];

    @ApiPropertyOptional({ example: 'Christopher Nolan' })
    @IsOptional()
    @IsString()
    @MaxLength(100)
    regisseur?: string;

    @ApiPropertyOptional({ example: 2010 })
    @IsOptional()
    @IsInt()
    @Min(1888)
    @Max(2100)
    erscheinungsjahr?: number;

    @ApiPropertyOptional({ example: 148, description: 'Laufzeit in Minuten' })
    @IsOptional()
    @IsInt()
    @Min(1)
    dauer?: number;

    @ApiPropertyOptional({ example: 8.8, description: 'Bewertung 0-10' })
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(10)
    bewertung?: number;

    @ApiPropertyOptional({ example: 'Ein Meisterwerk über Träume...' })
    @IsOptional()
    @IsString()
    beschreibung?: string;

    @ApiPropertyOptional({ example: 'Englisch' })
    @IsOptional()
    @IsString()
    sprache?: string;

    @ApiPropertyOptional({ example: 'USA' })
    @IsOptional()
    @IsString()
    land?: string;

    @ApiPropertyOptional({ example: 'https://example.com/poster.jpg' })
    @IsOptional()
    @IsString()
    poster?: string;
}

// DTO für Film aktualisieren (alle Felder optional)
export class UpdateFilmDto {
    @ApiPropertyOptional({ example: 'Inception 2' })
    @IsOptional()
    @IsString()
    @MaxLength(200)
    titel?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @MaxLength(200)
    originaltitel?: string;

    @ApiPropertyOptional({ enum: Genre, isArray: true })
    @IsOptional()
    @IsArray()
    @IsEnum(Genre, { each: true })
    genre?: Genre[];

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @MaxLength(100)
    regisseur?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    @Min(1888)
    @Max(2100)
    erscheinungsjahr?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    @Min(1)
    dauer?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(10)
    bewertung?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    beschreibung?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    sprache?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    land?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    poster?: string;
}
