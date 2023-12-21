console.log('array filter method');

// array.filter method is use for filter the array
// syntax :- 
//          array_name.filter(function_name or callback_function);

// "filter" method is take function as a parammeter which is represented perticauler element of the  array and compare that element with the given condition

// u can pass callback function as a parameter

let arr = [34,22,55,11,43];
console.log(arr);

// *** without callback function used ***
const checkArray = (arrayElement)=>{
        return arrayElement < 30;
    }
    let result = arr.filter(checkArray);
    console.log(result);
    
// *** with callback function used ***
let result2 = arr.filter((age)=>age > 30);

console.log(result2);