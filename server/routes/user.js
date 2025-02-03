const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_controller');

// Rota para cadastrar um novo usuário
router.post('/login', user_controller.login);

router.get('/logout', user_controller.logout);

router.post('/create_user', user_controller.create_user);

router.get('/read_user', user_controller.read_user);

router.put('/update_user', user_controller.update_user);

router.delete('/delete_user', user_controller.delete_user);

module.exports = router;