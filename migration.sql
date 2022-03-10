DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
    );

INSERT INTO  users(name, age) VALUES('lok', 29);
INSERT INTO users(name, age) VALUES('Achala', 28);
INSERT INTO users(name, age) VALUES('Raj', 32);