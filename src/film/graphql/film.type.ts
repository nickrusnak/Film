import { ObjectType, Field, Int, ID, Float, registerEnumType } from '@nestjs/graphql';

// Genre enum für GraphQL registrieren
export enum GenreGql {
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

registerEnumType(GenreGql, {
    name: 'Genre',
    description: 'Film-Genre Kategorien',
});

@ObjectType({ description: 'Film Entity' })
export class FilmType {
    @Field(() => ID)
    id: number;

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

    @Field(() => Int, { nullable: true, description: 'Laufzeit in Minuten' })
    dauer?: number;

    @Field(() => Float, { nullable: true, description: 'Bewertung 0-10' })
    bewertung?: number;

    @Field({ nullable: true })
    beschreibung?: string;

    @Field({ nullable: true })
    sprache?: string;

    @Field({ nullable: true })
    land?: string;

    @Field({ nullable: true })
    poster?: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}
