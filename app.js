var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const bodyParser = require('body-parser');

const db_connection = require('./server/config/database');

var indexRouter = require('./server/routes/index');
var userRouter = require('./server/routes/user');
var textRouter = require('./server/routes/text');
var listRouter = require('./server/routes/list');
var genreRouter = require('./server/routes/genre');

var app = express();

// Configuração do express-session
app.use(session({
  secret: 'travessia', // Chave secreta para assinar a sessão
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Defina como true se estiver usando HTTPS
}));

// Middleware para analisar o corpo das requisições
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/index', indexRouter);
app.use('/user', userRouter);
app.use('/text', textRouter);
app.use('/list', listRouter);
app.use('/genre', genreRouter);

// Rota para processar o login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verificação básica de login (substitua por uma lógica real)
  if (username === 'admin' && password === '1234') {
    req.session.username = username;
    res.redirect('/templates/homepage.html');
  } else {
    res.send('Usuário ou senha incorretos');
  }
});

// Rota para logout
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Iniciar o servidor
// app.listen(port, () => {
//   console.log(`Servidor rodando em http://localhost:${port}`);
// });

module.exports = app;