  function signin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  firebase.auth()
  .signInWithEmailAndPassword(username, password).
  then(function(result) {
    document.getElementById('ld').style.visibility = 'visible'
    document.getElementById('toast').innerHTML = "";
    window.location='./dashboard.html'
  }).catch(function(error) {
    console.log('sign in failed');
    document.getElementById('toast').innerHTML = 'Error logging in'
    document.getElementById('toast').style.fontSize = 'large'
    document.getElementById('toast').style.color = 'red';
  })
}