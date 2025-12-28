import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { GenreGql } from './film.type';

@InputType({ description: 'Input für neuen Film' })
export class CreateFilmInput {
    @Field()
    titel: string;

    @Field({ nullable: true })
    originaltitel?: string;

    @Field(() => [GenreGql], { nullable: true })
    genre?: GenreGql[];

    @Field({ nullable: true })
    regisseur?: string;

    @Field(() => Int, { nullable: true })
    erscheinungsjahr?: number;

    @Field(() => Int, { nullable: true })
    dauer?: number;

    @Field(() => Float, { nullable: true })
    bewertung?: number;

    @Field({ nullable: true })
    beschreibung?: string;

    @Field({ nullable: true })
    sprache?: string;

    @Field({ nullable: true })
    land?: string;

    @Field({ nullable: true })
    poster?: string;
}

@InputType({ description: 'Input für Film-Update' })
export class UpdateFilmInput {
    @Field({ nullable: true })
    titel?: string;

    @Field({ nullable: true })
    originaltitel?: string;

    @Field(() => [GenreGql], { nullable: true })
    genre?: GenreGql[];

    @Field({ nullable: true })
    regisseur?: string;

    @Field(() => Int, { nullable: true })
    erscheinungsjahr?: number;

    @Field(() => Int, { nullable: true })
    dauer?: number;

    @Field(() => Float, { nullable: true })
    bewertung?: number;

    @Field({ nullable: true })
    beschreibung?: string;

    @Field({ nullable: true })
    sprache?: string;

    @Field({ nullable: true })
    land?: string;

    @Field({ nullable: true })
    poster?: string;
}
