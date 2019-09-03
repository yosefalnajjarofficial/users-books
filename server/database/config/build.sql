BEGIN;

DROP TABLE IF EXISTS users, books, users_books CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    location TEXT
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE users_books (
    user_id INTEGER REFERENCES users(id),
    book_id INTEGER REFERENCES books(id)
);

COMMIT;