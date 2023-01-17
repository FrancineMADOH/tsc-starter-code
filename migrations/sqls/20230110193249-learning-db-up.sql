/* Replace with your SQL commands */
/*hold the command for creating  the specified db*/

CREATE TABLE book(
    id SERIAL PRIMARY KEY,
    book_title VARCHAR(150),
    author VARCHAR(100),
    published DATE,
    pages INT,
    genre VARCHAR(100),
    available  BOOLEAN,
    summary TEXT
);

CREATE TABLE author(
    id SERIAL PRIMARY KEY,
    author_name VARCHAR(200),
    birth_date DATE,
    is_alive BOOLEAN

);
