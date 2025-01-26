const Database = require('better-sqlite3');

const db = new Database('cataventos.db');

module.exports = db;
