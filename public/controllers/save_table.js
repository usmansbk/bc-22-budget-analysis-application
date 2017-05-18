
var config = {
  apiKey: "AIzaSyDXKRPg6YQvO-XG7PLdFyPo8DrQS9qveDs",
  authDomain: "budget-app-7c6f2.firebaseapp.com",
  databaseURL: "https://budget-app-7c6f2.firebaseio.com",
  projectId: "budget-app-7c6f2",
  storageBucket: "budget-app-7c6f2.appspot.com",
  messagingSenderId: "424415092443"
};
firebase.initializeApp(config);

var databaseRefObject = firebase.database();
var userId = firebase.auth().currentUser.uid;

function writeUserTable(userId, table) {
  firebase.database().ref('users/'+userId).set({
    mytable: table
  });
}

function save() {
  writeUserTable(userId, table);
}
