console.log("this is second java script file");

//if user add a note , add it to the localstorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");
    // let title = localStorage.getItem("title");
    let addTxt = document.getElementById('addTxt');
    let ttlTxt = document.getElementById('ttlTxt');
    if (notes == null) {
        notesObj = [];
        // titleObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        // titleObj = JSON.parse(title);
    }

    let myObj = {
        title: ttlTxt.value,
        text: addTxt.value
    }


    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    // addTxt.value = "";
    console.log(notesObj);

    showNotes()
});


let clrBtn = document.getElementById('clrBtn').addEventListener("click", function (el) {
    let addTxt = document.getElementById('addTxt');
    let ttlTxt = document.getElementById('ttlTxt');
    addTxt.value = "";
    ttlTxt.value = "";
});



let rfsBtn = document.getElementById('rfsBtn').addEventListener("click", function () {
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem('notes');
    console.log("shownotes");
    // let title = localStorage.getItem('title');
    if (notes == null) {
        notesObj = [];
        console.log("storage null");
    }
    else {
        notesObj = JSON.parse(notes);
        console.log("storage not null");
    }
        let html = "";
        notesObj.forEach(function (element, index) {

            html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <img src="img/img.png" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${element.title} </h5>
            <p class="card-text">${element.text}</p>
            <button class="btn btn-primary" id="${index}" onclick="dltFun(this.id)">Delete Note</button>
            </div>
            </div>
            `;
            console.log("show");

    });

    // for (let i = 0; i < notesObj.length && i < titleObj.length; i++) {
    //     html += `
    //         <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    //         <img src="img/img.png" class="card-img-top" alt="...">
    //         <div class="card-body">
    //         <h5 class="card-title" style="font-weight:600"> ${titleObj[i]} </h5>
    //         <p class="card-text">${notesObj[i]}</p>
    //         <button class="btn btn-primary" id="${i}" onclick="dltFun(this.id)">Delete Note</button>
    //         </div>
    //         </div>
    //         `;
    //     console.log("show");
    // }
    let notesEln = document.getElementById('notes');
    let addTxt = document.getElementById('addTxt');
    if (addTxt.value == "") {
        // break;
        console.log("text area EMPTY");
    }
    else if (notesObj.length != 0) {
        notesEln.innerHTML = html;
        console.log("text area not EMPTY");
    }
    console.log("refresh");
}

function dltFun(index) {
    console.log(index);
    console.log("this is deleting a note");
    let dltNote = localStorage.getItem('notes');

    if (dltNote == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(dltNote);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
    console.log("deleted");
}


let dltAllBtn = document.getElementById('dltAllBtn');
dltAllBtn.addEventListener("click", function () {
    // localStorage.removeItem('notes');
    localStorage.clear();
    // localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
    location.reload();
});

let pgRefBtn = document.getElementById('pgRefBtn');
pgRefBtn.addEventListener("click", function () {
    location.reload();
});


let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let searchVal = search.value;
    console.log("search value : " + searchVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        console.log(cardTxt);
        if (cardTxt.includes(searchVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});

let uprCasBtn = document.getElementById('uprCasBtn');
uprCasBtn.addEventListener("click", function () {
    let addTxt = document.getElementById('addTxt');
    let uperCase = addTxt.value.toUpperCase();
    console.log(uperCase);
    document.getElementById('addTxt').value = uperCase;
});


let lwrCasBtn = document.getElementById('lwrCasBtn');
lwrCasBtn.addEventListener("click", function () {
    let addTxt = document.getElementById('addTxt');
    let lowrCase = addTxt.value.toLowerCase();
    console.log(lowrCase);
    document.getElementById('addTxt').value = lowrCase;
});

let cptCasBtn = document.getElementById('cptCasBtn');
cptCasBtn.addEventListener("click", function () {
    let addTxt = document.getElementById('addTxt');
    let captCase = addTxt.value.toCapitalCase();
    console.log(captCase);
    document.getElementById('addTxt').value = captCase;
});

function drkmod() {
    // document.body.style.color="white";
    // document.body.style.background="black";
    var drk = document.body;
    drk.classList.toggle("dark-mode");
    console.log("dark mode");
}
