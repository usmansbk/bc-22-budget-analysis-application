// Get the modal
var modal = document.getElementById('myModal');

var summaryModal = document.getElementById('mySummaryModal');

// Get the button that opens the modal
var btn = document.getElementById("addbtn");

var analysisbtn = document.getElementById('analysisbtn');

// Get the <span> element that closes the modal
var clsdiv = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

analysisbtn.onclick = function() {
  analyzetable();
  summaryModal.style.display = 'block';
}



// When the user clicks on <span> (x), close the modal
clsdiv.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == summaryModal){
        summaryModal.style.display = 'none';
    }
}