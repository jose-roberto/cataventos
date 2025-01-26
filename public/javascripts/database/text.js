const Model = require('./model');
const db = require('./database_definition');

class Text extends Model {
    constructor() {
        super('text');
        this.conn = db;
    }

    createTable() {
        const statement = this.conn.prepare(
            `CREATE TABLE IF NOT EXISTS text (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo TEXT,
                tipo INTEGER,
                texto TEXT,
                sinopse TEXT,
                data_publicacao TEXT,
                like INTEGER,
                status INTEGER
            )`
        );
        statement.run();
    }
}

module.exports = Text;
