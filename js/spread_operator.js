console.log('spread operator');

// spread operator array element ko as a variable use krne k liye krte hai
// spread operator repersented as a three dot "..." after three dots you must used "array_name"
// syntax :
//          ...array_name

// ************* First Use (pass array element pass as a parameter )***********
// function sum(a,b,c,d){
//     return (a+b+c+d);
// }

// let arr = [3,4,5,2];

// console.log(sum(...arr));

// *********** Second Use (concatition more than two array) *************
// by spread operatot u can concatition more than two array at a time 

let a = [1,2,3];
let b = [4,5,6];
let c = [7,8,9];

// let arr = a.concat(c);  // by concat method it not prectical way to concat more than 2 array

// let arr1 = [...a,...b,...c];  // by spread operator 
// console.log(arr1);


// *************** Third Use (copy array) ****************

let ar = [2,3,2];

// this is old method which have a drawback that is when i push elements in copied array "ar1" and updation occure in old array "ar" also and "ar" automatic updated . solution os this drawback is u can use spread operator
// let ar1 = ar;
// ar1.push(4,9);
// console.log(ar1);  // new array
// console.log(ar);   // old array

let ars = [...ar,1,6]; // u can push like this
ars.push(3,4);    // u can also push like this
console.log(ars);
console.log(ar);


