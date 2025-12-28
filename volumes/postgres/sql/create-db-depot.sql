CREATE USER depot PASSWORD 'p';
CREATE DATABASE depot;
GRANT ALL ON DATABASE depot TO depot;
CREATE TABLESPACE depotspace OWNER depot LOCATION '/var/lib/postgresql/tablespace/depot';