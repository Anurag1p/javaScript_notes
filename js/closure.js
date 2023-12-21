console.log("clouser in javascript");
// closure wo hota hai jisme hum ek function ke return mein hu koi dusra function ko return kerte hai
// closure ki khas baat ye hai ki jab hum main function ko call krte hai to wo ek dura function return krta hai or jab return hoe function ko call krte hai wo tab ki uske parent function ki value ko access kr skta hai
// let sum =(a)=>{
//     console.log("value get : ",a);
//     b=14;
//     return function (c){
//         return (a+b+c)
//     }
// }

// let store = sum(12);  // this function return anthor function

// console.log(store(22))  // calling the function


// **** this is anthor example of closure ****


function getdata (a,b){
    return {
        getAddNum:function(){
            return (a+b);
        },
        getMinusNum:function(){
            return (a-b);
        }
    }
}

let value = getdata(12,6);
console.log("Add",value.getAddNum());
console.log("Minus",value.getMinusNum());


// ager app us function ko dobara alg parameter se call krte hoto to use ke return wale function alg value ko return krte hai
let value2 = getdata(15,2);
console.log("Add",value2.getAddNum());
console.log("Minus",value2.getMinusNum());