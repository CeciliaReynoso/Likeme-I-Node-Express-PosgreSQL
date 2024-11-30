-- Active: 1729636694938@@127.0.0.1@5432@likeme

CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),
descripcion VARCHAR(255), likes INT);

INSERT INTO posts (titulo, img, descripcion, likes) 
VALUES ('Test Post', 'https://via.placeholder.com/300', 'Descripción de prueba', 0);

