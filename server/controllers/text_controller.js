const Text = require('../models/Text');
const TextUser = require('../models/TextUser');

const create_text = async (req, res) => {
    try {
        const { title, text, style, genre } = req.body;

        if (!title || !text || !style || !genre) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const type = style === 'poem' ? 1 : 0;

        // Criar uma instância de Text
        const text_instance = new Text();

        // Criar novo texto
        const result = await text_instance.create({
            title: title,
            type: type,
            text: text,
            genre_id: genre,
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

const get_timeline = async (req, res) => {
    try {
        const text_instance = new Text();

        const posts = await text_instance.find_all();

        posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        res.json(posts);
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
        res.status(500).send("Erro ao carregar a timeline.");
    }
};

const get_my_texts = async (req, res) => {
    try {
        const text_instance = new Text();

        const posts = await text_instance.find_my_texts(req.session.user_id);
        console.log(posts);

        // posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        res.json(posts);
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
        res.status(500).send("Erro ao carregar os textos.");
    }
};

module.exports = {
    create_text, 
    get_timeline,
    get_my_texts
};