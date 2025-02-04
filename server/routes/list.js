const express = require('express');
const router = express.Router();
const list_controller = require('../controllers/list_controller');
const authenticate = require('../middleware/auth');

// Rota para cadastrar um novo usuário
router.post('/create_list', authenticate, list_controller.create_list);

router.get('/my_lists', authenticate, list_controller.get_my_lists);

router.get('/:id', authenticate, list_controller.get_list);

router.get('/:id/texts', authenticate, list_controller.get_list_texts);

router.put('/:id/edit_list', authenticate, list_controller.update_list);

module.exports = router;