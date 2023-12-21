console.log("array destructuring");


let arr = ['chintu','deepanshu','nayak','rahul','naveen'];


let [top1,top2,top3] = arr;   // each varaible represents array of elements respectivly
let [fisrt1,,,,last1] = arr;  // ", "  this is for skiping array elements

console.log(top1,top2,top3);
console.log(fisrt1,last1);