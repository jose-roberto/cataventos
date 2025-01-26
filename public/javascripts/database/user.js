const Model = require('./model');
const db = require('./database_definition');

class User extends Model {
    constructor() {
        super('user');
        this.conn = db;
    }

    createTable() {
        const statement = this.conn.prepare(
            `CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                nome_usuario TEXT UNIQUE,
                email TEXT UNIQUE,
                senha TEXT,
                data_nasc TEXT,
                tipo INTEGER
            )`
        );
        statement.run();
    }
}

module.exports = User;
