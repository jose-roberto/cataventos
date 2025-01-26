const Database = require('better-sqlite3');

const db = new Database('cataventos.db');

db.prepare(
  `CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  nome_usuario TEXT UNIQUE,
  email TEXT UNIQUE,
  senha TEXT,
  data_nasc TEXT,
  tipo INTEGER
)`).run();

db.prepare(
  `CREATE TABLE IF NOT EXISTS text (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT,
  tipo INTEGER,
  texto TEXT,
  descricao TEXT,
  data_publicacao TEXT,
  likes INTEGER,
  status INTEGER
)`).run();

db.prepare(
  `CREATE TABLE IF NOT EXISTS list (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  user_id INTEGER,
  privacidade INTEGER,
  descricao TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
)`).run();

db.prepare(
  `CREATE TABLE IF NOT EXISTS genre (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT
)`).run();

db.prepare(
  `CREATE TABLE IF NOT EXISTS text_genres (
  text_id INTEGER,
  genre_id INTEGER,
  FOREIGN KEY (text_id) REFERENCES text(id),
  FOREIGN KEY (genre_id) REFERENCES genre(id),
  PRIMARY KEY (text_id, genre_id)
)`).run();

db.prepare(
  `CREATE TABLE IF NOT EXISTS list_texts (
  list_id INTEGER,
  text_id INTEGER,
  FOREIGN KEY (list_id) REFERENCES list(id),
  FOREIGN KEY (text_id) REFERENCES text(id),
  PRIMARY KEY (list_id, text_id)
)`).run();

db.prepare(
  `CREATE TABLE IF NOT EXISTS text_users (
  text_id INTEGER,
  user_id INTEGER,
  FOREIGN KEY (text_id) REFERENCES text(id),
  FOREIGN KEY (user_id) REFERENCES user(id),
  PRIMARY KEY (text_id, user_id)
)`).run();

console.log("Banco de dados criado!");

module.exports = db;
