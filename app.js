var express = require('express');
var session = require('client-sessions');
var app = express()
var bodyParser = require('body-parser');

let port = process.env.PORT || 8081;
//app.use(express.static('public'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }));

// Gets login(index) page
app.get('/', (req, res) => {
  console.log('rquest for home page')
  res.render('index.jade')
})

// Get sign up page
app.get('/signup', (req, res) => {
  console.log('request for sign up page')
  res.render('signup.jade')
})

// Get dashboard
app.get('/dashboard', (req, res) => {
  res.render('dashboard.jade')
})

app.get('/plan', (req, res) => {
  res.render('newplan.jade')
})

app.get('/logout', (req, res)=> {
  req.session.reset();
  res.redirect('/')
})

app.listen(port, ()=> {
  console.log('Listening at ' + port);
})