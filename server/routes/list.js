const express = require('express');
const router = express.Router();
const list_controller = require('../controllers/list_controller');

// Rota para cadastrar um novo usuário
router.post('/create_list', list_controller.create_list);

router.get('/my_lists', list_controller.get_my_lists);

router.get('/:id', list_controller.get_list);

router.get('/:id/texts', list_controller.get_list_texts);

router.put('/update_list', list_controller.update_list);

module.exports = router;