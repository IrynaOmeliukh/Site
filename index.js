// підключення модулів
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//вказуємо шаблонізатор
app.set('view engine', 'ejs');
//статичні файли
app.use('/public', express.static('public'));


app.get('/', function(req, res) {
  res.render('index');
});

app.get('/Lolly', function(req, res) {
  res.render('Lolly');
});
app.get('/hobby', function(req, res) {
  res.render('hobby');
});

app.get('/form', function(req, res) {
  res.render('form');
});

// app.post('/form', urlencodedParser, function(req, res) {
//   if (!req.body) return res.sendStatus(400);
//   console.log(req.body);
//   res.render('succed');
// });

app.listen(1000);
