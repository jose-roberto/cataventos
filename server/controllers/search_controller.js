const Text = require('../models/Text');
const TextUser = require('../models/TextUser');
const User = require('../models/User');
const List = require('../models/List')

const get_text = async (req, res) => {
    try {
        const text_instance = new Text();
        const search_query = req.query.q;

        let posts;

        if (search_query) {
            // Se houver uma pesquisa, filtre os textos
            posts = await text_instance.search_texts(search_query);
        } 

        posts.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date));

        res.json(posts);
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
        res.status(500).send("Erro ao carregar os textos.");
    }
};

const get_user = async (req, res) => {
    try {
        const search_query = req.query.q;

        const user_instance = new User();

        let collaborators;

        if (search_query) {
            collaborators = await user_instance.search_collaborator(search_query, res.locals.user_id, req.params.id);
        } else {
            collaborators = "";
        }

        res.json(collaborators);
    } catch (error) {
        console.error("Erro ao pesquisar colaborador:", error);
        res.status(500).json({ error: "Erro ao pesquisar colaborador." });
    }
};

const get_list = async (req, res) => {
    try {
        const list_instance = new List();
        const search_query = req.query.q;

        let lists;

        if (search_query) {
            // Se houver uma pesquisa, filtre as listas
            lists = await list_instance.search_lists(search_query);
        }

        lists.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date));

        res.json(lists);
    } catch (error) {
        console.error("Erro ao buscar listas:", error);
        res.status(500).send("Erro ao carregar as listas.");
    }
};

module.exports = {
    get_text,
    get_user,
    get_list
};