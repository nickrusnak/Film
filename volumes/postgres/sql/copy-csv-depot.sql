SET search_path TO depot;
COPY aktie FROM '/tmp/aktie.csv' (FORMAT csv, DELIMITER ';', HEADER true);
COPY kurs FROM '/tmp/kurs.csv' (FORMAT csv, DELIMITER ';', HEADER true);
COPY transaktion FROM '/tmp/transaktion.csv' (FORMAT csv, DELIMITER ';', HEADER true);