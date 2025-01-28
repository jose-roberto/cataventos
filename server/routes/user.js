const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_controller');

// Rota para cadastrar um novo usuário
router.post('/register', user_controller.create_user);

module.exports = router;