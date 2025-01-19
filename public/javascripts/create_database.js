const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao banco de dados SQLite.');
});

db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  nome_usuario TEXT UNIQUE,
  email TEXT UNIQUE,
  senha TEXT,
  data_nasc TEXT,
  pais TEXT,
  tipo INTEGER
)`, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Tabela "users" criada ou já existe.');
});

const inserirUsuario = (nome, nome_usuario, email, data_nasc, senha, tipo) => {
  bcrypt.hash(senha, 10, (err, hash) => {
    if (err) {
      return console.error(err.message);
    }
    db.run(`INSERT INTO users (nome, nome_usuario, email, data_nasc, senha, tipo) VALUES (?, ?, ?, ?, ?, ?)`, 
      [nome, nome_usuario, email, data_nasc, hash, tipo], function(err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Um novo usuário foi inserido com o ID ${this.lastID}`);
    });
  });
};

db.run(`CREATE TABLE IF NOT EXISTS text (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT,
  user_id INTEGER,
  tipo INTEGER,
  texto TEXT,
  descricao TEXT,
  generos TEXT,
  publicacao TEXt
)`, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Tabela "text" criada ou já existe.');
});

db.run(`CREATE TABLE IF NOT EXISTS list (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  user_id INTEGER,
  privacidade INTEGER,
  descricao TEXT
)`, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Tabela "list" criada ou já existe.');
});

db.run(`CREATE TABLE IF NOT EXISTS genre (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT
)`, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Tabela "genre" criada ou já existe.');
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conexão com o banco de dados fechada.');
});