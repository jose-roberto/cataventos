const express = require('express');
const router = express.Router();

// Rota para a página inicial
router.get('/', (req, res) => {
    res.render('index'); // Renderiza o arquivo index.ejs
});

module.exports = router;