console.log("events and event object part 2");

document.querySelector('#cln').addEventListener('click',funclean);
function funclean(){
    // window.clear();
    console.log('djklajd');
}


let btn = document.querySelector('#btn');
btn.addEventListener('click',fun1);         //its active after single click
btn.addEventListener('dblclick',fun2);      //its active after double click
btn.addEventListener('mousedown',fun3);     //it active by all key of the mouse 
btn.addEventListener('mouseenter',fun4);     //it active when mouse cursor enter the class 
btn.addEventListener('mouseleave',fun5);     //it active when mouse cursor leave the class 
btn.addEventListener('mousemove',fun6);     //it return movement of the cursor in the class 

function fun1(e){
    console.log("its single click");
    e.preventDefault();
}

function fun2(e){
    console.log("its double click");
    e.preventDefault();
}

function fun3(e){
    console.log("its mouse down event");
    e.preventDefault();
}

function fun4(e){
    console.log("its mouse enter event");
    // e.preventDefault();
}

function fun5(e){
    console.log("its mouse exit event");
    // e.preventDefault();
}

function fun6(e){
    console.log("its mouse move event");
    // document.querySelector('body').style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetY})`;
    
    // e.preventDefault();
}
document.querySelector('body').addEventListener('mousemove',function(e){
    document.querySelector('body').style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetY})`
    console.log("offsetX",e.offsetX);
    console.log("offsetY",e.offsetY);
})