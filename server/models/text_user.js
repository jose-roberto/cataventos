const Model = require('./model');

class TextUser extends Model {
    constructor() {
        super('text_user');
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
                `CREATE TABLE IF NOT EXISTS text_user (
                    text_id INTEGER,
                    user_id INTEGER,
                    FOREIGN KEY (text_id) REFERENCES text(id),
                    FOREIGN KEY (user_id) REFERENCES user(id),
                    PRIMARY KEY (text_id, user_id)
                )`
            );
            statement.run();
            console.log(`Tabela "${this.table_name}" criada com sucesso.`);
        } else {
            console.log(`Tabela "${this.table_name}" já existe.`);
        }
    }
}

module.exports = TextUser;
