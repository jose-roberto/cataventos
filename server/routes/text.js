const express = require('express');
const router = express.Router();
const text_controller = require('../controllers/text_controller');

// Rota para cadastrar um novo usuário
router.post('/create_text', text_controller.create_text);

module.exports = router;