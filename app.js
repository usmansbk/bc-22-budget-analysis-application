var express = require('express');
var app = express()
var bodyParser = require('body-parser');

let port = process.env.PORT || 4000;

app.use(express.static('public'));

// Gets login(index) page
app.get('/', (req, res) => {
  console.log('rquest for home page')
  res.render('./public/index.html')
})

// Get sign up page
app.get('/signup.html', (req, res) => {
  console.log('request for sign up page')
  res.render('./public/signup.html')
})

// Get dashboard
app.get('/dashboard.html', (req, res) => {
  res.render('./public/dashboard.html')
})

app.get('/newplan.html', (req, res) => {
  res.render('./public/newplan.html')
})

app.post('/', function(req, res) {
  console.log('Got a POST request for the login page');
  res.send('Login')
})

app.listen(port, ()=> {
  console.log('Listening at ' + port);
})