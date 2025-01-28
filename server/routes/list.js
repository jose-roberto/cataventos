const express = require('express');
const router = express.Router();
const list_controller = require('../controllers/list_controller');

// Rota para cadastrar um novo usuário
router.post('/create_list', list_controller.create_list);

module.exports = router;