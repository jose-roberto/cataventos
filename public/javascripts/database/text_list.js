const Model = require('./model');
const db = require('./database_definition');

class TextList extends Model {
    constructor() {
        super('text_list');
        this.conn = db;
    }

    createTable() {
        const statement = this.conn.prepare(
            `CREATE TABLE IF NOT EXISTS text_list (
                list_id INTEGER,
                text_id INTEGER,
                FOREIGN KEY (list_id) REFERENCES list(id),
                FOREIGN KEY (text_id) REFERENCES text(id),
                PRIMARY KEY (list_id, text_id)
            )`
        );
        statement.run();
    }
}

module.exports = TextList;
