
function createuser() {
  var email = document.getElementById('email-tf').value;
  var password = document.getElementById('passwd-tf').value;
  console.log(email);
  console.log(password);
  firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then(function() {
    console.log('Creation successful')
    window.location='/'
  })
  .catch(function(error) {
    console.log('Create user failed')
});
}