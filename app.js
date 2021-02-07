var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var eventRouter = require('./routes/event');
var clientsRouter = require('./routes/client');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));


app.use('/', indexRouter);
app.use('/event', eventRouter);
app.use('/clients', clientsRouter);

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/images', express.static('images'));
app.use(express.static('public'));


app.get('/navigationmaps', function (req, res, next)
{
  const Sections = [
    {title: "Прием", href: '/appointments', image : '../../../images/user.svg'},
    {title: "События", href: '/events', image : '/images/messages.svg'},
    {title: "Оповещения", href: '/notifications', image : '/images/broadcast.svg'},
    {title: "Клиенты", href: '/clients', image : '../../../images/clients.svg'},
    {title: "Сотрудники", href: '/employees', image : '../../images/employees.svg'},
    {title: "Личный кабинет", href: '/users', image : '../../../images/user.svg'}
  ];
  res.json(Sections);
});

// app.get('/event/:id', (request, response) =>{
//   response.status(200).send('get info:' + request.params.id);
// });
// app.post('/event/:id', (request, response) =>{
//   response.status(200).send('element created:');
// });
// app.put('/event/:id', (request, response) =>{
//   response.status(200).send('one row updated:' + request.params.id);
// });
// app.delete('/event/:id', (request, response) =>{
//   response.status(200).send('one row deleted:' + request.params.id);
// });



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
