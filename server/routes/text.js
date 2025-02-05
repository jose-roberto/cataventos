const express = require('express');
const router = express.Router();
const text_controller = require('../controllers/text_controller');
const authenticate = require('../middleware/auth');

// Rota para cadastrar um novo usuário
router.post('/create_text', authenticate, text_controller.create_text);

router.get('/read_texts', authenticate, text_controller.get_timeline);

router.get('/my_texts', authenticate, text_controller.get_my_texts);

router.get('/:id', authenticate, text_controller.get_text);

router.put('/:id/update_text', authenticate, text_controller.update_text);

router.post('/:id/like_text', authenticate, text_controller.like_text);

router.delete('/:id/delete_text', authenticate, text_controller.delete_text);

router.get('/:id/search_collaborator', authenticate, text_controller.search_collaborator);

router.post('/:id/add_collaborator', authenticate, text_controller.add_collaborator);

router.get('/:id/verify_collaborator', authenticate, text_controller.verify_collaborator);

router.get('/:id/search_list', authenticate, text_controller.search_list);

router.post('/:id/add_text_to_list', authenticate, text_controller.add_text_to_list);

module.exports = router;
