const Model = require('./model');
const db = require('./create_database');

class Genre extends Model {
    constructor() {
        super('genre');
        this.conn = db;
    }

    createTable() {
        const statement = this.conn.prepare(
            `CREATE TABLE IF NOT EXISTS genre (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT
            )`
        );
        statement.run();
    }
}

module.exports = Genre;
