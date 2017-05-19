
var currentTable;
function jsonToArray() {
  let result = [];
  for (row in currentTable) {
      currentRow = currentTable[row];
      let arrRow = [];
      arrRow.push(currentRow['amount'])
      arrRow.push(currentRow['category'])
      arrRow.push(currentRow['description'])
      arrRow.push(currentRow['priority'])
      console.log('Row array', arrRow)
      result.push(arrRow)
  }
  return result;
}
let tableRef = firebase.database().ref('table').once('value').then(function(snapshot) {
    currentTable = snapshot.val();
    let arrTable = jsonToArray();
    console.log(arrTable);
    displayTable('mytable', arrTable);
})
