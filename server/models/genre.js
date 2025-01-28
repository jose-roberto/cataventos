const Model = require('./Model');

class Genre extends Model {
    constructor() {
        super('genre');
    }

    // Função para criar a tabela
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
                `CREATE TABLE genre (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL
                )`
            );
            statement.run();
            console.log(`Tabela "${this.table_name}" criada com sucesso.`);
        } else {
            console.log(`Tabela "${this.table_name}" já existe.`);
        }
    }
}

module.exports = Genre;
