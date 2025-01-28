const List = require('../models/List');

const create_list = async (req, res) => {
    try {
        // Teste adequado para o frontend atual
        const { name, description } = req.body;
        // console.log(req.body);

        // Teste adequado para o frontend atual
        if (!name || !description) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        // const { name, description, user_id, status  } = req.body;

        // // Validação de entrada
        // if (!name || !description || !user_id || !status ) {
        //     return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        // }

        // Criar uma instância de User
        const list_instance = new List();

        // Criar novo usuário
        const result = await list_instance.create({
            name: name,
            description: description,
            user_id: 1,
            status: 1
        });

        // Retornar resposta de sucesso
        res.status(201).json({ message: 'Lista criada com sucesso!', list_id: result.lastInsertRowid });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar lista.' });
    }
};

module.exports = {
    create_list
};