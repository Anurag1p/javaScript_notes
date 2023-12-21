console.log("sort in javascript");

// sort method se hum array ko sort kr skte hai accending and deccending order mein

const data = [12,2,13,54,54,76,23,98,23,54,72];

const arrObj = [
    {name:"google",category:"product based",start:1952,end:2005},
    {name:"paytm",category:"product based",start:1963,end:2012},
    {name:"tcs",category:"service based",start:1936,end:2015},
    {name:"tech mahindra",category:"service based",start:1914,end:2014},
];

// sort method ek callback function leta hai or us callback function mein do parameter leta hai joki array ke first and second element ko represent krta hai 
// or callback function " 1 or -1 " mese koi ek value ko return kr skta hai jiska mtlb accending and deccending order hota hai
// sort_method ek naya array ko return joki sorted hota hai

// const store = data.sort((a,b)=>{
//     if(a > b){
//         return 1;
//     }else{
//         return -1;
//     }
// })


// const store = arrObj.sort((a,b)=>{
//     if(a.start > b.start){
//         return 1;
//     }else{
//         return -1;
//     }
// })

// sort method with ternary operator
const store = arrObj.sort((a,b)=>(a.start < b.start) ? 1 : -1);


console.log(store);

