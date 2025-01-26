const Model = require('./model');
const db = require('./database_definition');

class TextUser extends Model {
    constructor() {
        super('text_user');
        this.conn = db;
    }

    createTable() {
        const statement = this.conn.prepare(
            `CREATE TABLE IF NOT EXISTS text_user (
                text_id INTEGER,
                user_id INTEGER,
                FOREIGN KEY (text_id) REFERENCES text(id),
                FOREIGN KEY (user_id) REFERENCES user(id),
                PRIMARY KEY (text_id, user_id)
            )`
        );
        statement.run();
    }
}

module.exports = TextUser;
