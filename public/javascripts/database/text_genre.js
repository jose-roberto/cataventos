const Model = require('./model');
const db = require('./database_definition');

class TextGenre extends Model {
    constructor() {
        super('text_genre');
        this.conn = db;
    }

    createTable() {
        const statement = this.conn.prepare(
            `CREATE TABLE IF NOT EXISTS text_genre (
                text_id INTEGER,
                genre_id INTEGER,
                FOREIGN KEY (text_id) REFERENCES text(id),
                FOREIGN KEY (genre_id) REFERENCES genre(id),
                PRIMARY KEY (text_id, genre_id)
            )`
        );
        statement.run();
    }
}

module.exports = TextGenre;
