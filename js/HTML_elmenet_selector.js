console.log("deepanshu nayak");
//elements selectors
//single element selector
//multi element selector


//single element selector

let a = document.getElementById('navi');
// a = a.className;          //is id ke alava jo class use hui hai vo return krta hai
// a = a.childNodes;         //it is return the child nodes of the div
// a = a.parentNode;         //it is return the parent node of the div
a.style.color = "red";
// a.innerHTML = "<h1>Deepanshu Nayak</h1>"
// a.innerText = "Deepanshu Nayak"
// console.log(a);


let c = document.querySelector('#navi');       //it also similar to getElementById function 
// c = document.querySelector('.container');
// c = document.querySelector('div');   //it give always first div in DOM
// document.querySelector('#demo');    
// document.querySelector('div').style.backgroundColor="green";  
// console.log(c);



//multi selector
let vf = document.getElementsByClassName('container');
vf = document.getElementsByTagName('div');
Array.from(vf).forEach(function(element){
    // console.log(element);
    element.style.color="yellow";
})
