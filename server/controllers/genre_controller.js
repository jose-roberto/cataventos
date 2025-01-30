const Genre = require('../models/Genre');

const read_genre = async (req, res) => {
    try {
        // Criar uma instância de Genre
        const genre_instance = new Genre();

        // Obter todas as instâncias de genre
        const result = await genre_instance.find_all();
        
        // Retornar resposta de sucesso
        res.json(result);
        // res.status(201).json({ message: 'Gêneros obtidos!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter os gêneros.' });
    }
};

module.exports = {
    read_genre
};