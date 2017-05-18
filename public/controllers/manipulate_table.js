var table = {};
function addrow() {
  var table = document.getElementById('table');
  var cat = document.getElementById('category').value;
  var desc = document.getElementById('desc').value;
  var amnt = document.getElementById('amnt').value;

  if (desc != '' && amnt !== '' && amnt > 0) {
    var row = table.insertRow(-1);

    var category = row.insertCell(0);
    var description = row.insertCell(1);
    var amount = row.insertCell(2);

    category.innerHTML = cat;
    description.innerHTML = desc;
    amount.innerHTML = amnt;

  }
}

function deleterow() {
  var table = document.getElementById('table');
  var row_len = table.rows.length;
  if (row_len > 1) {
    table.deleteRow(-1);
  }
}