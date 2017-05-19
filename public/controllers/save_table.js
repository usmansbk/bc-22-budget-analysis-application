var database = firebase.database().ref();
//var userId = firebase.auth().currentUser.uid;
function writeUserTable(userId, table) {
  database.set({
    name: 'usman'
  })
}

function save() {
  writeUserTable('baddoo', {Hello : 'hello'});
}

save();