const Model = require('./Model');

class List extends Model {
    constructor() {
        super('list');
    }

    create_table() {
        // Função para verificar se a tabela existe
        const table_exists = (table_name) => {
            const statement = this.db_connection.prepare(
                "SELECT name FROM sqlite_master WHERE type='table' AND name=?"
            );
            const result = statement.get(table_name);
            return !!result;
        };

        // Verifica se a tabela já existe antes de tentar criar
        if (!table_exists(this.table_name)) {
            const statement = this.db_connection.prepare(
                `CREATE TABLE IF NOT EXISTS list (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    description TEXT,
                    user_id INTEGER,
                    status INTEGER,
                    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
                )`
            );
            statement.run();
            console.log(`Tabela "${this.table_name}" criada com sucesso.`);
        } else {
            console.log(`Tabela "${this.table_name}" já existe.`);
        }
    }

    find_my_lists(user_id) {
        const statement = this.db_connection.prepare(
            `SELECT * FROM list WHERE user_id = ?`
        );
        return statement.all(user_id);
    }

    find_text_list(list_id) {
        const statement = this.db_connection.prepare(
            `SELECT * FROM text_list WHERE list_id = ?`
        );
        return statement.all(list_id);
    }
}

module.exports = List;
