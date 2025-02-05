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
                    created_by INTEGER,
                    FOREIGN KEY (created_by) REFERENCES user(id) ON DELETE CASCADE
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

    search_my_texts(user_id, search_query) {
        const search_terms = search_query.split(' ').filter(term => term.trim() !== '');

        let query = `
            SELECT * FROM text
            WHERE id IN (
                SELECT text_id FROM text_user WHERE user_id = ?
            )
        `;

        let params = [user_id];

        if (search_terms.length > 0) {
            query += ` AND (${search_terms.map(() => 'title LIKE ?').join(' OR ')})`;
            params = params.concat(search_terms.map(term => `%${term}%`));
        }

        return this.db_connection.prepare(query).all(...params);
    }

    search_texts(search_query) {
        const search_terms = search_query.split(' ').filter(term => term.trim() !== '');
    
        let query = `SELECT * FROM text`;
        let params = [];
    
        if (search_terms.length > 0) {
            query += ` WHERE ${search_terms.map(() => 'title LIKE ?').join(' OR ')}`;
            params = search_terms.map(term => `%${term}%`);
        }
    
        return this.db_connection.prepare(query).all(...params);
    }
}

module.exports = Text;
