var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

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
  cookie: {
    maxAge: 1000 * 60 * 60, 
    httpOnly: true,
    secure: false,
  },
}));

app.use((req, res, next) => {
  res.locals.user_id = req.session.user_id || null;
  next();
});

app.get('/get_user_id', (req, res) => {
  if (!req.session.user_id) {
      return res.status(401).json({ error: 'Não autenticado' });
  }
  res.json({ user_id: req.session.user_id });
});

// Middleware para analisar o corpo das requisições
app.use(bodyParser.urlencoded({ extended: true }));

// Configura o method-override
app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/text', textRouter);
app.use('/list', listRouter);
app.use('/genre', genreRouter);
// app.use('/pages', genreRouter);

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

module.exports = app;
