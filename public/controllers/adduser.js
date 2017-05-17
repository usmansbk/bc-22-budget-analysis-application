var database = firebase.database();
function addUser(userId, name) {
  var objRef = firbase.database().ref();
  obj.child('users').set({userId, name});
}