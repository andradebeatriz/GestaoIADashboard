const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",     // ajuste conforme seu MySQL
  password: "",     // ajuste conforme seu MySQL
  database: "gestao_empresarial"
});

db.connect(err => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conectado ao MySQL!");
  }
});

// Rota teste
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Rota para listar usuários
app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
