-- CreateEnum
CREATE TYPE "film"."Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "film"."Genre" AS ENUM ('ACTION', 'COMEDY', 'DRAMA', 'HORROR', 'SCIFI', 'THRILLER', 'ROMANCE', 'DOCUMENTARY', 'ANIMATION', 'FANTASY');

-- CreateTable
CREATE TABLE "film"."user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT,
    "role" "film"."Role" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "film"."film" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 0,
    "titel" TEXT NOT NULL,
    "originaltitel" TEXT,
    "genre" "film"."Genre"[],
    "regisseur" TEXT,
    "erscheinungsjahr" INTEGER,
    "dauer" INTEGER,
    "bewertung" DECIMAL(3,1),
    "beschreibung" TEXT,
    "sprache" TEXT,
    "land" TEXT,
    "poster" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "film_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "film"."review" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 0,
    "film_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "bewertung" INTEGER NOT NULL,
    "kommentar" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "film"."favorite" (
    "id" SERIAL NOT NULL,
    "film_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favorite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "film"."user"("email");

-- CreateIndex
CREATE INDEX "review_film_id_idx" ON "film"."review"("film_id");

-- CreateIndex
CREATE INDEX "review_user_id_idx" ON "film"."review"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "review_film_id_user_id_key" ON "film"."review"("film_id", "user_id");

-- CreateIndex
CREATE INDEX "favorite_film_id_idx" ON "film"."favorite"("film_id");

-- CreateIndex
CREATE INDEX "favorite_user_id_idx" ON "film"."favorite"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "favorite_film_id_user_id_key" ON "film"."favorite"("film_id", "user_id");

-- AddForeignKey
ALTER TABLE "film"."review" ADD CONSTRAINT "review_film_id_fkey" FOREIGN KEY ("film_id") REFERENCES "film"."film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "film"."review" ADD CONSTRAINT "review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "film"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "film"."favorite" ADD CONSTRAINT "favorite_film_id_fkey" FOREIGN KEY ("film_id") REFERENCES "film"."film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "film"."favorite" ADD CONSTRAINT "favorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "film"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
