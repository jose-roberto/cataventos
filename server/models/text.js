const Model = require('./Model');

class Text extends Model {
    constructor() {
        super('text');
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
                `CREATE TABLE IF NOT EXISTS text (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT,
                    text TEXT,
                    publication_date TEXT,
                    type INTEGER,
                    genre_id INTEGER,
                    like INTEGER,
                    status INTEGER
                )`
            );
            statement.run();
            console.log(`Tabela "${this.table_name}" criada com sucesso.`);
        } else {
            console.log(`Tabela "${this.table_name}" já existe.`);
        }
    }

    find_my_texts(user_id) {
        const statement = this.db_connection.prepare(
            `SELECT * FROM text WHERE id IN (
                SELECT text_id FROM text_user WHERE user_id = ?
            )`
        );
        return statement.all(user_id);
    }

    delete_text(id) {
        return new Promise((resolve, reject) => {
            try {

                const transaction = this.db_connection.transaction(() => {

                    this.db_connection.prepare("DELETE FROM text_user WHERE text_id = ?").run(id);
                    this.db_connection.prepare("DELETE FROM text_list WHERE text_id = ?").run(id);
    
                    const result = this.db_connection.prepare(`DELETE FROM ${this.table_name} WHERE id = ?`).run(id);
    
                    return result;
                });

                const result = transaction();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = Text;
