const express = require('express');
const router = express.Router();
const text_controller = require('../controllers/text_controller');

// Rota para cadastrar um novo usuário
router.post('/create_text', text_controller.create_text);

router.get('/read_texts', text_controller.get_timeline);

module.exports = router;