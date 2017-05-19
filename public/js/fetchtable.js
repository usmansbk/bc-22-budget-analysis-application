var currentTable;
let tableRef = firebase.database().ref('table').once('value').then(function(snapshot) {
  currentTable = snapshot.val();
  console.log(snapshot.val());
})

function jsonToArray() {
  let result = [];
  let arrRow = [];
  for (row in currentTable) {
      console.log(row)
      arrRow.push(row['amount'])
      arrRow.push(row['category'])
      arrRow.push(row['description'])
      arrRow.push(row['priority'])
  }
  return result;
}

let arrTable = jsonToArray();
displayTable('mytable', arrTable)