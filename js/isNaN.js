console.log("isNaN() in javascript");

// isNaN() full form "is Not a Number"

// ye check krta hai ki ye number hai ya nhi and number chahe string mein likha ho ("233") use b ye number hi manta hai 

// isNaN(32)       :- return false
// isNaN("32")     :- return false
// isNaN("hello")  :- return true

let a = 23;
let b = "32";
let c = "hello";

console.log("value of isNaN(23) : ",isNaN(a));
console.log("value of isNaN('32') : ",isNaN(b));
console.log("value of isNaN('hello') : ",isNaN(c));