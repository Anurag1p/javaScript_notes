console.log("Object Prototype");

//Object Literal
let obj={};

console.log(obj);
console.log(Object.getPrototypeOf(obj));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(obj)));


//constructor

let cons = new Array();
console.log(cons);  //its return Array[]
console.log(Object.getPrototypeOf(cons));   // its return Array.prototype object
console.log(Object.getPrototypeOf(Array.prototype)); // its return Object.prototype Object
console.log(Object.getPrototypeOf(Object.prototype)); // its return Object.prototype object