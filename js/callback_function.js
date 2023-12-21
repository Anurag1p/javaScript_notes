console.log("this is callback function program");


//when function passed as a arguments its called callback function.
//two type of callback function
// 1) synchronous   - its means function wait for a function and next code executed after this function
// 2) Asynchronous  - its means this is not block the code 

// synchronous
console.log("synchronous");
// function show(a){
//     console.log("this is show function "+a);

// }
function grey(b ,callback){
    let a = 121 + b;
    callback(a);
}
// grey(10,function(a){
//     console.log("this is show function "+a);
// });

grey(12,a=>{
    console.log("this is show function "+a);
})


// Asynchronous
console.log("Asynchronous");
setTimeout(function one(callback){
        console.log("this is callback function");
    },5000);

    console.log("this is End of the function");




