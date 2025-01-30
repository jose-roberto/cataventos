const express = require('express');
const router = express.Router();
const genre_controller = require('../controllers/genre_controller');

// Rota para carregar os gêneros cadastrados
router.get('/read_genre', genre_controller.read_genre);

module.exports = router;