const Text = require('../models/Text');
const TextUser = require('../models/TextUser');

const create_text = async (req, res) => {
    try {
        // Teste adequado para o frontend atual
        const { title, text, style, genre } = req.body;
        // console.log(req.body);

        // Teste adequado para o frontend atual
        if (!title || !text || !style || !genre) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const type = style === 'poem' ? 1 : 0;

        // Criar uma instância de User
        const text_instance = new Text();

        // Criar novo usuário
        const result = await text_instance.create({
            title: title,
            type: type,
            text: text,
            publication_date: new Date().toISOString(),
            like: 0,
            status: 1
        });

        // Criar uma instância de TextUser
        const text_user = new TextUser();

        // Associar texto ao usuário criador
        const text_user_result = await text_user.create({
            text_id: result.id,
            user_id: req.session.user_id
        });

        // Retornar resposta de sucesso
        // res.status(201).json({ message: 'Texto criado com sucesso!', text_id: result.lastInsertRowid });
        res.redirect('/my_tales');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar text.' });
    }
};

module.exports = {
    create_text
};