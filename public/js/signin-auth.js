  function signin() {
    document.getElementById('toast').innerHTML = "";
    document.getElementById('ld').style.visibility = 'visible'
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  firebase.auth()
  .signInWithEmailAndPassword(username, password).
  then(function(result) {
    console.log('sign in sucess')
    document.getElementById('toast').innerHTML = "";
    window.location='/dashboard'
  }).catch(function(error) {
    console.log('sign in failed');
    document.getElementById('ld').style.visibility = 'hidden'
    document.getElementById('toast').innerHTML = 'Invalid username or password'
    document.getElementById('toast').style.fontSize = 'large'
    document.getElementById('toast').style.color = 'cyan';
  })
}