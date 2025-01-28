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
                    birthdate TEXT,
                    type INTEGER
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
}

module.exports = User;
