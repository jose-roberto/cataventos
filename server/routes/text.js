const express = require('express');
const router = express.Router();
const text_controller = require('../controllers/text_controller');

// Rota para cadastrar um novo usuário
router.post('/create_text', text_controller.create_text);

router.get('/read_texts', text_controller.get_timeline);

router.get('/my_texts', text_controller.get_my_texts);

router.delete('/:id/delete_text', text_controller.delete_text);

router.put('/:id/edit_text', text_controller.edit_text);

router.get('/:id', text_controller.get_text);

router.post('/:id/like_text', text_controller.like_text);


module.exports = router;