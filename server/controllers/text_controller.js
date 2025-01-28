const Text = require('../models/Text');

const create_text = async (req, res) => {
    try {
        // Teste adequado para o frontend atual
        const { title, text } = req.body;
        // console.log(req.body);

        // Teste adequado para o frontend atual
        if (!title || !text) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        // const { title, text, publication_date, type, like, status } = req.body;

        // // Validação de entrada
        // if (!title || !type || !text || !like || !status) {
        //     return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        // }

        // Criar uma instância de User
        const text_instance = new Text();

        // Criar novo usuário
        const result = await text_instance.create({
            title: title,
            type: 0,
            text: text,
            publication_date: new Date().toISOString(),
            like: 0,
            status: 1
        });

        // Retornar resposta de sucesso
        res.status(201).json({ message: 'Texto criado com sucesso!', text_id: result.lastInsertRowid });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar text.' });
    }
};

module.exports = {
    create_text
};