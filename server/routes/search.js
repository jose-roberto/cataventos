const express = require('express');
const router = express.Router();
const search_controller = require('../controllers/search_controller');

router.get('/text', search_controller.get_text);

router.get('/user', search_controller.get_user);

router.get('/list', search_controller.get_list);

module.exports = router;