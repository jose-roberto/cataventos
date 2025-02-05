const Model = require('./Model');

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
                    FOREIGN KEY (text_id) REFERENCES text(id) ON DELETE CASCADE,
                    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
                    PRIMARY KEY (text_id, user_id)
                )`
            );
            statement.run();
            console.log(`Tabela "${this.table_name}" criada com sucesso.`);
        } else {
            console.log(`Tabela "${this.table_name}" já existe.`);
        }
    }

    find_by_two_keys(text_id, user_id) {
        return new Promise((resolve, reject) => {
            try {
                const statement = this.db_connection.prepare(
                    `SELECT * FROM ${this.table_name} WHERE text_id = ? AND user_id = ?`
                );

                const result = statement.get(text_id, user_id);
                // console.log("Resultado da busca:", result);

                // Se o resultado for encontrado, resolve com o resultado
                if (result) {
                    resolve(1);
                } else {
                    resolve(0);
                }
            } catch (error) {
                // Em caso de erro, rejeita a Promise
                reject(error);
            }
        });
    }
}

module.exports = TextUser;
