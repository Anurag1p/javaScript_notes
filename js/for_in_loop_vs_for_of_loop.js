console.log("for in loop vs for of loop");

let name = ["deepanshu","chintu","nayak","rajput"];
let city =["rohtak","bhiwani","jind"];
let myString = "this is a string";

//this is traditional way of for loop
// for (let i = 0; i < name.length; i++) {
//     const element = name[i];
//     console.log(name[i]);
    
// }

//iterate object literal
let obj = {
    name : "deepanshu",
    course : "BCA",
    university : "MDU"
}

//this is also traditional way to iterate object
// for (let i = 0; i < Object.keys(obj).length; i++) {
//     const element = Object.keys(obj)[i];
//     console.log(Object.keys(obj)[i]);  //its return key
//     console.log(obj[Object.keys(obj)[i]]);  //its return value
    
// }

//this is for in loop is using for iterate object and also array
// for (const key in obj) {
    //     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(obj[key]);  //it also return value
//         console.log(obj);

//     }
// }


//using for in loop u can iterate string
// for (const stringChar in myString) {
//     if (Object.hasOwnProperty.call(myString, stringChar)) {
//         const element = myString[stringChar];
//         console.log(myString[stringChar]);
        
//     }
// }



// for (const key in city) {
//     if (Object.hasOwnProperty.call(city, key)) {
//         const element = city[key];
//         console.log(city[key]);
        
//     }
// }

// this is for of loop it using for iterate only array without giving index of the value
// for (const iterator of city) {
//     console.log(iterator);
// }


//using for of loop u can iterate string charactor
for (const stringChar of myString) {
    console.log(stringChar);
}