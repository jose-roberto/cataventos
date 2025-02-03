const express = require('express');
const router = express.Router();
const text_controller = require('../controllers/text_controller');
const authenticate = require('../middleware/auth');

// Rota para cadastrar um novo usuário
router.post('/create_text', authenticate, text_controller.create_text);

router.get('/read_texts', authenticate, text_controller.get_timeline);

router.get('/my_texts', authenticate, text_controller.get_my_texts);

router.get('/:id', authenticate, text_controller.get_text);

router.put('/:id/edit_text', authenticate, text_controller.edit_text);

router.post('/:id/like_text', authenticate, text_controller.like_text);

router.delete('/:id/delete_text', authenticate, text_controller.delete_text);

module.exports = router;
