console.log("deepanshu");

//Add Element

let vf = document.createElement('li');   //to add element in DOM
let d = document.createTextNode('this is from li createtextnode'); //its alternate of innerText or innerHTML
vf.appendChild(d);
vf.className = 'li_class';
vf.id = 'li_id';
vf.setAttribute('title','this is title');
// vf.innerHTML="<h1>this is from li</h1>";
console.log(vf);


document.querySelector('#navi').children[1].appendChild(vf);   //appendChild() used for add element at the last
console.log(document.querySelector('#navi').children[1]);

//Replace Element

console.log("*****replacing********");
let elm2 = document.createElement('h2');
let tnode = document.createTextNode('this text using for replaceing');
elm2.appendChild(tnode);
console.log(elm2);

vf.replaceWith(elm2);


//replace element in child

let rchild = document.querySelector('#navi').children[1];
rchild.replaceChild(elm2 ,document.getElementById('tui'));   //replaceChild() using for replacing child by id
rchild.removeChild(document.getElementById('dui'));  //removeChild() using for removing child by id


//getAttribute
let w = document.querySelector('#navi')
w.getAttribute('id');               //return the name of the id 
w.getAttribute('class');            //return the name of the class

w.hasAttribute('id');               //return true or false acc. id is available
w.hasAttribute('class');            //return true or false acc. class is available

w.setAttribute("class","dclass");     //you can add attribute like class, id , title..

// w.removeAttribute('id');                //you can remove attribute like id , class 
// w.removeAttribute('class');            //you can remove attribute like id , class 