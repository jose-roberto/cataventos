const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');

// Rota para a página inicial
router.get('/', (req, res) => {
    res.render('index'); // Renderiza o arquivo index.ejs
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/homepage', authenticate, (req, res) => {
    res.render('homepage');
});

router.get('/my_tales', authenticate, (req, res) => {
    res.render('my_tales');
});

router.get('/my_lists', authenticate, (req, res) => {
    res.render('my_lists');
});

router.get('/search', authenticate, (req, res) => {
    res.render('search');
});


module.exports = router;