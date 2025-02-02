const List = require('../models/List');
const { get } = require('../routes/list');

const create_list = async (req, res) => {
    try {
        // Teste adequado para o frontend atual
        const { name, description, visibility } = req.body;
        // console.log(req.body);

        // Teste adequado para o frontend atual
        if (!name || !description || !visibility) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const status = visibility === 'public' ? 1 : 0;

        // Criar uma instância de User
        const list_instance = new List();

        // Criar nova lista
        const result = await list_instance.create({
            name: name,
            description: description,
            user_id: req.session.user_id,
            status: status
        });

        // Retornar resposta de sucesso
        // res.status(201).json({ message: 'Lista criada com sucesso!', list_id: result.lastInsertRowid });
        res.redirect('/my_lists');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar lista.' });
    }
};

const get_my_lists = async (req, res) => {
    try {
        const list_instance = new List();

        const lists = await list_instance.find_my_lists(req.session.user_id);
        console.log(lists);

        res.json(lists);
    } catch (error) {
        console.error("Erro ao buscar listas:", error);
        res.status(500).send("Erro ao carregar as listas.");
    }
};

const get_list = async (req, res) => {
    try {
        const list_instance = new List();

        const list = await list_instance.find_by_id(req.params.id);

        if(!list) {
            return res.status(404).send("Lista não encontrada.");
        }

        res.render('list', { list });
    } catch (error) {
        console.error("Erro ao buscar lista:", error);
        res.status(500).send("Erro ao carregar o lista.");
    }
};

module.exports = {
    create_list,
    get_my_lists,
    get_list
};