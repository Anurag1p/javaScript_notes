console.log("arrow function");

let fun1 = function fun(){
    console.log("this is function fun()");
}

fun1();

function fun2(){
    console.log("this is fun2()");
}

fun2();

let fun3 = function(){
    console.log("this is fun3()");
}

fun3();




//this is Arrow function
//in this function you don't neet to write 'function' keyword and function name
let fun4 = ()=>{
    console.log("this is fun4()");
}
fun4();

let fun5 = ()=>{
    return "this string is rerurn from fun5()";
}
console.log(fun5());


//you can pass parameter like this
let fun6 = (value)=>{
    return "this string is return fron fun6()  :  "+value;
}

console.log(fun6(5));

//if you have single parameter then you don't need any braceses
let fun7 = value => {
    return "this string is return from fun7() :   "+value;
}

console.log(fun7(12));


//you also return the value like this
//in this way you can return value without 'return' keyword and braces
let fun8 = value =>"this string is return from fun8() :   "+value;

console.log(fun8(20));

//you can passed more than one parameter but you need brecess
let fun9 = (a,b)=>"this string is return from fun8() :   "+(a+b);

console.log(fun9(30,20));