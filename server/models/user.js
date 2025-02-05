const Model = require('./Model');
const bcrypt = require('bcryptjs');

class User extends Model {
    constructor() {
        super('user');
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
                `CREATE TABLE IF NOT EXISTS user (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    username TEXT UNIQUE,
                    email TEXT UNIQUE,
                    password TEXT,
                    birthdate TEXT
                )`
            );
            statement.run();
            console.log(`Tabela "${this.table_name}" criada com sucesso.`);
        } else {
            console.log(`Tabela "${this.table_name}" já existe.`);
        }
    }

    async crypt_password(password) {
        try {
            // Gera um "salt" (um valor aleatório) para aumentar a segurança do hash
            const salt = await bcrypt.genSalt(10); // 10 é o custo do processamento (quanto maior, mais seguro e lento)

            // Cria o hash da senha usando o salt
            const hashedPassword = await bcrypt.hash(password, salt);

            return hashedPassword; // Retorna a senha criptografada
        } catch (error) {
            throw new Error('Erro ao criptografar a senha');
        }
    }

    async authentication(username, password) {
        try {
            console.log('Iniciando autenticação para o usuário:', username);

            // Encapsula a operação síncrona em uma Promise
            return await new Promise((resolve, reject) => {
                try {
                    // Prepara a query
                    const query = 'SELECT id, password FROM user WHERE username = ?;';
                    // console.log('Executando query:', query);

                    // Executa a query de forma síncrona
                    const result = this.db_connection.prepare(query).get(username);

                    // console.log('Resultado da query:', result);

                    if (result) {
                        // Compara a senha usando bcrypt
                        bcrypt.compare(password, result.password, (err, match) => {
                            if (err) {
                                console.error('Erro ao comparar senhas:', err);
                                reject(err);
                            } else {
                                // console.log('Resultado da comparação:', match);

                                if (match) {
                                    // console.log('Senha válida. ID do usuário:', result.id);
                                    resolve(result.id); // Resolve com o ID do usuário
                                } else {
                                    console.log('Senha inválida.');
                                    resolve(null); // Resolve com null (senha incorreta)
                                }
                            }
                        });
                    } else {
                        console.log('Usuário não encontrado.');
                        resolve(null); // Resolve com null (usuário não encontrado)
                    }
                } catch (error) {
                    console.error('Erro ao executar a query:', error);
                    reject(error); // Rejeita a Promise em caso de erro
                }
            });
        } catch (error) {
            console.error('Erro na função authentication:', error);
            throw new Error('Erro ao autenticar usuário!');
        }
    }

    search_collaborator(search_query, user_id, text_id) {
        return new Promise((resolve, reject) => {
            try {
                // console.log("Search query:", search_query); // Debug: Verifique a query recebida

                // Prepara e executa a consulta SQL
                const statement = this.db_connection.prepare(
                    `SELECT id, username, name FROM user WHERE (LOWER(username) LIKE LOWER(?) OR LOWER(name) LIKE LOWER(?)) and id != ?
                    AND NOT EXISTS (
                    SELECT 1
                    FROM text_user
                    WHERE text_user.user_id = user.id
                    AND text_user.text_id = ?
                    );`
                );

                // Executa a consulta e obtém os resultados
                const result = statement.all(`%${search_query}%`, `%${search_query}%`, user_id, text_id);

                // console.log("Resultado da busca:", result); // Debug: Verifique o resultado

                // Resolve a Promise com os resultados
                resolve(result);
            } catch (error) {
                console.error('Erro ao buscar colaboradores:', error);

                // Rejeita a Promise com o erro
                reject(new Error('Erro ao buscar colaboradores.'));
            }
        });
    }
}

module.exports = User;
