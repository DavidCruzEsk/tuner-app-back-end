DROP DATABASE IF EXISTS songs_dev;

CREATE DATABASE songs_dev;

\connect songs_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    album VARCHAR(100),
    time VARCHAR(100),
    is_favorite BOOLEAN
);