set search_path to 'depot';

DROP TABLE IF EXISTS transaktion CASCADE;
DROP TABLE IF EXISTS kurs CASCADE;
DROP TABLE IF EXISTS aktie CASCADE;

DROP TYPE IF EXISTS transaktionstyp;
DROP TYPE IF EXISTS handelsplatz;