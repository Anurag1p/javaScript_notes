// Function in java script
function square(a){
    return a*a;
}

function areaOfCircle(radius){
    return 3.14*radius ;
}
function pitha(l,a){
    return (l*l)+(a*a);
}


const myar = function(name , thanks="Thank you"){
    let c = `hello , ${name} , ${thanks} to join us.`;
    // console.log(`hello , ${name} , ${thanks} to join us.`);
    return c;
}
let val = myar("deepanshu","this is end point");
// console.log(wish("Deepanshu"));
console.log(myar);

let arrvar = {
    name : "deepanshu",
    rollno: function(){
        return "this is function return Deepanshu name";
    },
}