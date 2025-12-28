SET default_tablespace = depotspace;
CREATE SCHEMA IF NOT EXISTS AUTHORIZATION depot;
ALTER ROLE depot SET search_path = 'depot';
set search_path to 'depot';

CREATE TYPE handelsplatz AS ENUM ('XETRA', 'NASDAQ', 'NYSE', 'LSE', 'FWB');
CREATE TYPE transaktionstyp AS ENUM ('KAUF', 'VERKAUF', 'DIVIDENDE');

CREATE TABLE IF NOT EXISTS aktie (
    id            integer GENERATED ALWAYS AS IDENTITY(START WITH 1000) PRIMARY KEY,
    version       integer NOT NULL DEFAULT 0,
    isin          text NOT NULL UNIQUE,
    symbol        text NOT NULL,
    name          text NOT NULL,
    branche       text,
    handelsplatz  handelsplatz,
    kaufpreis     decimal(10,2) NOT NULL,
    anzahl        integer NOT NULL,
    kaufdatum     date,
    dividende     decimal(8,2),
    letzter_kurs  decimal(10,2),
    erzeugt       timestamp NOT NULL DEFAULT NOW(),
    aktualisiert  timestamp NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS kurs (
    id          integer GENERATED ALWAYS AS IDENTITY(START WITH 1000) PRIMARY KEY,
    datum       date NOT NULL,
    eroeffnung  decimal(10,2),
    schluss     decimal(10,2),
    hoch        decimal(10,2),
    tief        decimal(10,2),
    volumen     bigint,
    aktie_id    integer NOT NULL REFERENCES aktie ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS kurs_aktie_id_idx ON kurs(aktie_id);

CREATE TABLE IF NOT EXISTS transaktion (
    id              integer GENERATED ALWAYS AS IDENTITY(START WITH 1000) PRIMARY KEY,
    version         integer NOT NULL DEFAULT 0,
    typ             transaktionstyp NOT NULL,
    aktie_id        integer NOT NULL REFERENCES aktie ON DELETE CASCADE,
    datum           date NOT NULL,
    uhrzeit         time,
    anzahl          integer NOT NULL,
    preis           decimal(10,2) NOT NULL,
    gebuehren       decimal(8,2) NOT NULL DEFAULT 0,
    gesamtbetrag    decimal(12,2) NOT NULL,
    notiz           text,
    erzeugt         timestamp NOT NULL DEFAULT NOW(),
    aktualisiert    timestamp NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS transaktion_aktie_id_idx ON transaktion(aktie_id);
CREATE INDEX IF NOT EXISTS transaktion_datum_idx ON transaktion(datum);