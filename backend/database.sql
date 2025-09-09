CREATE DATABASE gestao_empresarial;
USE gestao_empresarial;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  senha VARCHAR(255)
);

INSERT INTO usuarios (nome, email, senha) 
VALUES ("Teste", "teste@email.com", "1234");
