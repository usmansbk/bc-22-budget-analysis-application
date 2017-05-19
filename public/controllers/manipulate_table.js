var mytable = [];
let summary = {};
let total = 0;
let sorted = false;
let jsonTable = {};
let nextIndex = 0;

function createJSONtable() {
  let table = {};
}

function addrow() {
  let table = document.getElementById('table');
  let cat = document.getElementById('category').value;
  let desc = document.getElementById('desc').value;
  let amnt = document.getElementById('amnt').value;
  let priority = document.getElementById('priority').value;
  if (priority === '') {
    priority = 0;
  }
  let myrow = [];
  let jsonRow = {};

  if (desc != '' && amnt !== '' && amnt > 0) {
    let row = table.insertRow(-1);
    let category = row.insertCell(0);
    let description = row.insertCell(1);
    let amount = row.insertCell(2);
    let pri = row.insertCell(3); // priority cell in table
    category.innerHTML = cat;
    description.innerHTML = desc;
    amount.innerHTML = amnt;
    pri.innerHTML = priority

    myrow.push(cat);
    myrow.push(desc);
    myrow.push(amnt);
    myrow.push(priority);
    jsonRow['category'] = cat;
    jsonRow['description'] = desc;
    jsonRow['amount'] = amnt;
    jsonRow['priority'] = priority
    jsonTable[nextIndex + ''] = jsonRow;
    nextIndex++;
    mytable.push(myrow);
  }
}
/*
function save() {
  let len = mytable.length;
  let result = '';
  for (let i = 0; i < len; i++) {
    result += mytable[i][0] + ' | ' + mytable[i][1] + ' | ' + mytable[i][2] + '\n';
  }
  console.log(result);
}*/

function clearTable(tableid) {
  let table = document.getElementById(tableid);
  let x = table.rows.length - 1;
  for (let i = x; i > 0; i--) {
    table.deleteRow(i);
  }
}

function displaySummary() {
  clearTable('summaryTable');
  let table = document.getElementById('summaryTable');
  for (cat in summary) {
    let row = table.insertRow(-1);
    let category = row.insertCell(0);
    let amount = row.insertCell(1);
    category.innerHTML = cat;
    amount.innerHTML = summary[cat];
  }
  let tincome = document.getElementById('income_field');
  let texpense= document.getElementById('expense_field');
  let treport = document.getElementById('warning_field');
  if (summary['Income'] > 0) {
    tincome.innerHTML = ' ' + summary['Income'];
  } else {
    tincome.innerHTML = ' ' + 0;
  }
  texpense.innerHTML = ' ' + total;

  if (Number(summary['Income']) < total) {
    treport.innerHTML = 'Warning: Over Allocation<br>Deficit: ' + (total - Number(summary['Income']));
  }
}

function createSummary() {
  summary = {};
  let len = mytable.length;
  for (let i = 0; i < len; i++) {
    let cat = mytable[i][0];
    let amnt = mytable[i][2];
    if (summary[cat] !== undefined) {
      summary[cat] += Number(amnt);
    } else {
      summary[cat] = Number(amnt);
    }
  }
  total = getTotalExpenses();
}

function getTotalExpenses() {
  total = 0;
  for (cat in summary) {
    if (cat === 'Income') continue;
    else {
      total += Number(summary[cat]);
    }
  }
  return total;
}

function analyzetable() {
  createSummary();
  displaySummary();
}

function displayTable(tableid, theTable) {
  clearTable(tableid);
  let table = document.getElementById(tableid);
  let len = theTable.length;
  for (let i = 0; i < len; i++) {
    let row = table.insertRow(-1);
    let category = row.insertCell(0);
    let description = row.insertCell(1);
    let amount = row.insertCell(2);
    let pri = row.insertCell(3);

    let cat = theTable[i][0];
    let desc = theTable[i][1];
    let amnt = theTable[i][2];
    let priority = theTable[i][3];
    category.innerHTML = cat;
    description.innerHTML = desc;
    amount.innerHTML = amnt;
    pri.innerHTML = priority;
  }
}

function sort() {
  if (!sorted) {
    function mysort(a, b) {
      a = Number(a[3]);
      b = Number(b[3]);
      return b - a;
    }
    let sortedtable = mytable.slice();
    sortedtable.sort(mysort);
    displayTable('table', sortedtable);
    sorted = true;
  }
}

function undo() {
  if (sorted) {
    displayTable('table', mytable)
    sorted = false;
  } else {
    let table = document.getElementById('table');
    let row_len = table.rows.length;
    if (row_len > 1) {
      table.deleteRow(-1);
      mytable.pop();
     // console.log(mytable);
    }
  }
}

var database = firebase.database().ref('table/');
//var userId = firebase.auth().currentUser.uid;
function writeUserTable(table) {
  database.set(table);
}

function fetch() {
  ref.on('value', function(snapshot) {
    var currentTable = snapshot.val();
  }, (err)=>{})
// console.log(currentTable);
}

function save() {
  writeUserTable(jsonTable);
  alert('Saved');
}
