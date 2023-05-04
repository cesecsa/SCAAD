let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let saveBtn = document.getElementById("save");
let cancelBtn = document.getElementById("cancel");
let projTitle = document.getElementById("projTitle");
let print = document.getElementById("myPrint");
// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

print.onclick = function () {
    window.print();
}

// When the user clicks the Save button, save the text and close the modal
saveBtn.onclick = function () {
    let textArea = document.getElementById("text-area");
    projTitle.innerHTML = textArea.value;
    textArea.value = "";
    // Do something with the text (e.g. send it to the server)
    modal.style.display = "none";
}

// When the user clicks the Cancel button or clicks outside the modal, close it
cancelBtn.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

