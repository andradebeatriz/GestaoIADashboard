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

// Rota para listar usuários (agora com /api/)
app.get("/api/usuarios", (req, res) => {
  db.query("SELECT id, nome, email FROM usuarios", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Rota para adicionar usuário
app.post("/api/usuarios", (req, res) => {
  const { nome, email } = req.body;
  
  // Validação simples
  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });
  }

  db.query(
    "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
    [nome, email, "senha_temporaria"],
    (err, results) => {
      if (err) {
        console.error("Erro ao inserir usuário:", err);
        return res.status(500).json({ error: "Erro interno do servidor" });
      }
      res.json({ id: results.insertId, nome, email });
    }
  );
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});