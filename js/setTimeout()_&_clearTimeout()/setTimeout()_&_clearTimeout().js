console.log("setTimeout() & clearTimeout()");

//setTimeout() function is hold code untill time interwel is complete
//clearTimeout() function is dissmiss the setTimeout work

function changeColor(){ 
    let txt = document.getElementById('txt');
    txt.style.color="red";
}

let timeoutID = setTimeout(changeColor,2000);

let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    clearTimeout(timeoutID);

})