console.log("prototype inheritance");


let mobile = function(){
    this.a = 10;
}
mobile.prototype.z=30;  //its using for adding element in the mobile.prototype

let samsung = function(){
    mobile.call(this);  // its using for inherite all properties of the super class that is access by chile class by the its object
    this.s = 20;
}

samsung.prototype = Object.create(mobile.prototype);
let mob = new mobile();
let sam = new samsung();

console.log(sam.s); //its call the properties from their constructor
console.log(`this is from mobile constructor : ${sam.a}`);  //using object of child class samsung() and access property of mobile() superclass
console.log(`this is from mobile.prototype constructor : ${sam.z}`);  //object of samsung constructor is access property of mobile.prototype 



//************this is practice section*****************
console.log("****this is practice section****");
let student = function(){
    this.stuName = "this is student Name";
}

student.prototype.clas=function(){
    console.log("this is class");
}
// let stu = new student();
// console.log(stu.stuName);
// stu.clas();

let teacher = function(){
    student.call(this);
    this.teaName = "this is teaName";
}
teacher.prototype = Object.create(student.prototype); // first level inheritance
// let t = new teacher();
// console.log(t.teaName);
// console.log(t.stuName);
// t.clas();


let people = function(){
    teacher.call(this);
    this.peo = "this is people section";
}
people.prototype = Object.create(teacher.prototype); // multi level inheritance

people.prototype.constructor=people;  //manually set constructor
let p = new people();
console.log(p.peo);
console.log(p.teaName);
console.log(p.stuName);
p.clas();

