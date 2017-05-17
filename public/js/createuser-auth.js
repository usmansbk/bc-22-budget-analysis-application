function addUser(userId, name) {
  var objRef = firebase.database().ref();
  objRef.child('users').set({
    username:userId
  });
}

function makeToast(msg, color) {
    document.getElementById('toast').innerHTML = ''
    document.getElementById('toast').innerHTML = msg;
    document.getElementById('toast').style.fontSize = 'large'
    document.getElementById('toast').style.color = color;
}

function createuser() {
  var email = document.getElementById('email-tf').value;
  var password = document.getElementById('passwd-tf').value;
  var username = document.getElementById('username').value;
  firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then(function() {
    console.log('Creation successful')
    makeToast('Creating user account', 'green');
    window.location='/'
  }).catch(function(error) {
    console.log('Create user failed');
    makeToast('Failed to create user account', 'red')
  });
}