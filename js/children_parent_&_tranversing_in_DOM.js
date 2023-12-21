console.log("Deepanshu");

//children , parent & traversing

// querySelector()            //it return only first element
// querySelectorAll()        //it return all elements


let c = document.querySelector('.container');


// console.log(c.childNodes);    // it return all elements includes text , comments also
// console.log(c.children);       // its only return the tag elements includes h1,div ,form
console.log(c);
let a = c.childNodes;    //childNodes is help to give all tag under parent tag (.container)
console.log(a)

a = c.childNodes[0].nodeName;   // nodeName help get the name of node

console.log(a)
a = c.childNodes[0].nodeType;   // nodetype it give the type of node
//node types
// 1. elements
// 2. Attribute
// 3. Text Node
// 8. comments
// 9. document
// 10. docType 

console.log(a);

console.log('you can traverseing all child nodes');
let vf = document.querySelector('header').children;
console.log(vf);

vf = document.querySelector('header').children[0].children;
console.log(vf);

vf = document.querySelector('header').children[0].children[1].children;
console.log(vf);

console.log('*****childNoides*********');
console.log(c.childNodes);
console.log('******firstChild********');
console.log(c.firstChild);
console.log(c.firstElementChild);
console.log('*******lastChild*******');
console.log(c.lastChild);
console.log(c.lastElementChild);
console.log('******Children********');
console.log(c.children);
console.log(c.childElementCount);  //count of child elements
console.log('*******sibling*******');
console.log(c.firstElementChild.parentNode);
console.log(c.firstElementChild.nextElementSibling);
console.log(c.firstElementChild.nextElementSibling.nextElementSibling);

