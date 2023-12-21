console.log("This is Editable div");


console.log("function call");
let container = document.querySelector('.container');
let first = document.querySelector('.container').children[1];
let divElm = document.createElement('div');

let val = localStorage.getItem('data');
let text;
if (val == null) {
    text = document.createTextNode("You can type Text Here");
}
else {
    text = document.createTextNode(val);

}

divElm.appendChild(text);
divElm.setAttribute("id", "elem");
divElm.setAttribute("class", "elem");
divElm.setAttribute("style", "border:2px solid black; padding:10px; width:30vw");

//insert element
container.insertBefore(divElm, first);


// console.log(divElm, first, container);

divElm.addEventListener("click", function () {
    let notextarea = document.getElementsByClassName('textarea').length;
    if (notextarea == 0) {
        let html = elem.innerHTML;
        divElm.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3" placeholder="You can type Text Here">${html}</textarea>`
        console.log("helo");
    }
    let textarea = document.getElementById('textarea');
    let val = localStorage.getItem('data');
    if (textarea.value == 0) {
        // localStorage.removeItem('data');
        // delete localStorage;
        // localStorage.clear();
        // location.reload();
        elem.innerHTML=textarea.value;
        console.log("textarea empty");
    }
    else {
        textarea.addEventListener("blur", function () {
            localStorage.setItem('data', textarea.value);
            elem.innerHTML=textarea.value;
            console.log("textarea not empty");
        })

    }
})