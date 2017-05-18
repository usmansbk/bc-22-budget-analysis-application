var mytable = [];
let summary = {};
let total_income = 0;
let exprenses = 0;

function createJSONtable() {
  let table = {};

}

function addrow() {
  let table = document.getElementById('table');
  let cat = document.getElementById('category').value;
  let desc = document.getElementById('desc').value;
  let amnt = document.getElementById('amnt').value;
  let myrow = [];

  if (desc != '' && amnt !== '' && amnt > 0) {
    let row = table.insertRow(-1);
    let category = row.insertCell(0);
    let description = row.insertCell(1);
    let amount = row.insertCell(2);
    category.innerHTML = cat;
    description.innerHTML = desc;
    amount.innerHTML = amnt;

    myrow.push(cat);
    myrow.push(desc);
    myrow.push(amnt);

    mytable.push(myrow);
  }
}

function deleterow() {
  let table = document.getElementById('table');
  let row_len = table.rows.length;
  if (row_len > 1) {
    table.deleteRow(-1);
    mytable.pop();
    console.log(mytable);
  }
}

function _save() {
  let len = mytable.length;
  let result = '';
  for (let i = 0; i < len; i++) {
    result += mytable[i][0] + ' | ' + mytable[i][1] + ' | ' + mytable[i][2] + '\n';
  }
  console.log(result);
}

function clearTable() {
  let summaryTable = document.getElementById('summaryTable');
  let x = summaryTable.rows.length - 1;
  for (let i = x; i > 0; i--) {
    summaryTable.deleteRow(i);
  }
}

function displaySummary() {
  clearTable();
  let table = document.getElementById('summaryTable');
  for (cat in summary) {
    let row = table.insertRow(-1);
    let category = row.insertCell(0);
    let amount = row.insertCell(1);
    category.innerHTML = cat;
    amount.innerHTML = summary[cat];
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
}

function analyzetable() {
  createSummary();
  displaySummary();
  console.log(summary);
}