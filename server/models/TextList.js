const Model = require('./Model');

class TextList extends Model {
    constructor() {
        super('text_list');
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
                `CREATE TABLE IF NOT EXISTS text_list (
                    list_id INTEGER,
                    text_id INTEGER,
                    FOREIGN KEY (list_id) REFERENCES list(id) ON DELETE CASCADE,
                    FOREIGN KEY (text_id) REFERENCES text(id) ON DELETE CASCADE,
                    PRIMARY KEY (list_id, text_id)
                )`
            );
            statement.run();
            console.log(`Tabela "${this.table_name}" criada com sucesso.`);
        } else {
            console.log(`Tabela "${this.table_name}" já existe.`);
        }
    }
}

module.exports = TextList;
