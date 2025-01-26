const Model = require('./model');
const db = require('./database_definition');

class ListUser extends Model {
    constructor() {
        super('list_user');
        this.conn = db;
    }

    createTable() {
        const statement = this.conn.prepare(
            `CREATE TABLE IF NOT EXISTS list_user (
                list_id INTEGER,
                user_id INTEGER,
                FOREIGN KEY (list_id) REFERENCES list(id),
                FOREIGN KEY (user_id) REFERENCES user(id),
                PRIMARY KEY (list_id, user_id)
            )`
        );
        statement.run();
    }
}

module.exports = ListUser;
