function signout() {
 firebase.auth().signOut().then(function() {
  console.log('signing out successful')
  window.location='/'
}).catch(function(error) {
  console.log('signing out failed')
});
}