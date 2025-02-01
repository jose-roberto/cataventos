function authenticate(req, res, next) {
    if (req.session.user_id) {
        return next();
    } else {
        console.log('Usuário não autenticado.');
        res.redirect('/login');
    }
}

module.exports = authenticate;