const Model = require('./model');
const db = require('./database_definition');

class List extends Model {
    constructor() {
        super('list');
        this.conn = db;
    }

    createTable() {
        const statement = this.conn.prepare(
            `CREATE TABLE IF NOT EXISTS list (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                user_id INTEGER,
                privacidade INTEGER,
                descricao TEXT,
                FOREIGN KEY (user_id) REFERENCES user(id)
            )`
        );
        statement.run();
    }
}

module.exports = List;
