const Text = require('../models/Text');
const TextUser = require('../models/TextUser');
const User = require('../models/User');

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

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const all_posts = await text_instance.find_all();

        all_posts.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date));

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const posts = all_posts.slice(startIndex, endIndex);

        res.json({
            posts,
            pagination: {
                page,
                limit,
                total_posts: all_posts.length, // Total de posts no banco de dados
            },
        });
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
        res.status(500).send("Erro ao carregar a timeline.");
    }
};

const get_my_texts = async (req, res) => {
    try {
        const text_instance = new Text();
        const search_query = req.query.q;

        let posts;

        if (search_query) {
            // Se houver uma pesquisa, filtre os textos
            posts = await text_instance.search_my_texts(req.session.user_id, search_query);
        } else {
            // Caso contrário, retorne todos os textos
            posts = await text_instance.find_my_texts(req.session.user_id);
        }

        posts.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date));

        res.json(posts);
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
        res.status(500).send("Erro ao carregar os textos.");
    }
};

const get_text = async (req, res) => {
    try {
        const text_instance = new Text();

        const text = await text_instance.find_by_id(req.params.id);

        if (!text) {
            return res.status(404).send("Texto não encontrado.");
        }

        res.render('text', { text });
    } catch (error) {
        console.error("Erro ao buscar post:", error);
        res.status(500).send("Erro ao carregar o texto.");
    }
};

const like_text = async (req, res) => {
    try {
        const text_instance = new Text();
        const text = await text_instance.find_by_id(req.params.id);

        if (!text) {
            return res.status(404).json({ error: "Texto não encontrado." });
        }

        text.like += 1;
        await text_instance.update(req.params.id, { like: text.like });

        res.json({ likes: text.like }); // Retorna o número atualizado de likes
    } catch (error) {
        console.error("Erro ao curtir post:", error);
        res.status(500).json({ error: "Erro ao curtir o texto." });
    }
};

const update_text = async (req, res) => {
    try {
        const { title, text, style } = req.body;

        if (!title || !text || !style) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const type = style === 'poem' ? 1 : 0;

        const text_instance = new Text();
        const selected_text = await text_instance.find_by_id(req.params.id);

        if (!selected_text) {
            return res.status(404).json({ error: "Texto não encontrado." });
        }

        await text_instance.update(req.params.id, {
            title: title,
            type: type,
            text: text,
        });

        res.redirect('/my_tales');
    } catch (error) {
        console.error("Erro ao editar post:", error);
        res.status(500).json({ error: "Erro ao editar o texto." });
    }
}

const delete_text = async (req, res) => {
    try {
        const text_instance = new Text()
        const text = await text_instance.find_by_id(req.params.id);

        if (!text) {
            return res.status(404).json({ error: "Texto não encontrado." });
        }

        const result = await text_instance.delete(req.params.id);

        res.redirect('/my_tales');
    } catch (error) {
        console.error("Erro ao deletar post:", error);
        res.status(500).json({ error: "Erro ao deletar o texto." });
    }
};

const search_collaborator = async (req, res) => {
    try {
        const search_query = req.query.q;

        // console.log("Consulta recebida:", search_query); // Debugando a query recebida

        const user_instance = new User();

        let collaborators;

        if (search_query) {
            collaborators = await user_instance.search_collaborator(search_query, res.locals.user_id);
        } else {
            collaborators = "";
        }

        // console.log("Colaboradores encontrados:", collaborators);

        res.json(collaborators);
    } catch (error) {
        console.error("Erro ao pesquisar colaborador:", error);
        res.status(500).json({ error: "Erro ao pesquisar colaborador." });
    }
}

const add_collaborator = async (req, res) => {
    try {
        const { collaborator_id } = req.body;

        console.log("ID do colaborador:", collaborator_id);

        if (!collaborator_id) {
            return res.status(400).json({ error: 'ID do colaborador é obrigatório.' });
        }

        const text_user = new TextUser();

        const result = await text_user.create({
            text_id: req.params.id,
            user_id: collaborator_id
        });

        res.json({ message: 'Colaborador adicionado com sucesso!' });
    } catch (error) {
        console.error("Erro ao adicionar colaborador:", error);
        res.status(500).json({ error: "Erro ao adicionar colaborador." });
    }
}

module.exports = {
    create_text,
    get_timeline,
    get_my_texts,
    get_text,
    like_text,
    update_text,
    delete_text,
    search_collaborator,
    add_collaborator
};