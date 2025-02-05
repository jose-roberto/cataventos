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

    search_my_lists(user_id, search_query) {
        const search_terms = search_query.split(' ').filter(term => term.trim() !== '');

        let query = `
            SELECT * FROM list WHERE user_id = ? 
        `;

        let params = [user_id];

        if (search_terms.length > 0) {
            query += ` AND (${search_terms.map(() => 'name LIKE ?').join(' OR ')})`;
            params = params.concat(search_terms.map(term => `%${term}%`));
        }

        return this.db_connection.prepare(query).all(...params);
    }

    list_search(search_query, user_id, text_id) {
        return new Promise((resolve, reject) => {
            try {
                // console.log("Search query:", search_query); // Debug: Verifique a query recebida

                // Prepara e executa a consulta SQL
                const statement = this.db_connection.prepare(
                    `SELECT id, name FROM list WHERE(LOWER(name) LIKE LOWER(?)) and user_id = ?
                    AND NOT EXISTS(
                        SELECT 1
                    FROM text_list
                    WHERE text_list.list_id = list.id
                    AND text_list.text_id = ?
                    );`
                );

                // Executa a consulta e obtém os resultados
                const result = statement.all(`%${search_query}%`, user_id, text_id);

                // console.log("Resultado da busca:", result); // Debug: Verifique o resultado

                // Resolve a Promise com os resultados
                resolve(result);
            } catch (error) {
                console.error('Erro ao buscar listas:', error);

                // Rejeita a Promise com o erro
                reject(new Error('Erro ao buscar listas.'));
            }
        });
    }
}

module.exports = List;
