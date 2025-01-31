const express = require('express');
const router = express.Router();

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

router.get('/homepage', (req, res) => {
    res.render('homepage');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});

router.get('/my_tales', (req, res) => {
    res.render('my_tales');
});

router.get('/my_lists', (req, res) => {
    res.render('my_lists');
});

module.exports = router;