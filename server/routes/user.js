const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_controller');
const authenticate = require('../middleware/auth');

// Rota para cadastrar um novo usuário
router.post('/login', user_controller.login);

router.get('/logout', authenticate, user_controller.logout);

router.post('/create_user', authenticate, user_controller.create_user);

router.get('/read_user', authenticate, user_controller.read_user);

router.put('/update_user', authenticate, user_controller.update_user);

router.delete('/delete_user', authenticate, user_controller.delete_user);

module.exports = router;
