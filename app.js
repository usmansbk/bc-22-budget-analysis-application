var express = require('express');
var app = express()
var bodyParser = require('body-parser');

// Gets login(index) page
app.get('/', (req, res) => {
  res.sendfile('./public/index.html')
})

// Get sign up page
app.get('/html/signup.html', (req, res) => {
  res.sendfile('./public/signup.html')
})

// Get dashboard
app.get('/html/dashboard.html', (req, res) => {
  res.sendfile('./public/dashboard.html')
})

app.post('/', function(req, res) {
  console.log('Got a POST request for the login page');
  res.send('Login')
})

app.listen(8081, ()=> {
  console.log('Listening at 8081');
})