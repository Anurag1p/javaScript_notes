console.log("async and await");


//async function return promise and await hold code and waiting for response ,then execute rest code
// await ka matlb hai ki jab tak code ki processing puri hoti tab tak aage ka code run hota

async function fun(){
    console.log("inside function");
    const response = await fetch('https://api.github.com/users');

    console.log("before response");
    
    //response.json() return promise
    const users = await response.json();

    console.log("after response");

    return users;
}


console.log("before calling fun()");

let a = fun();  // this is return a promise

console.log("after calling fun()");

console.log(a);

a.then((data)=>{
    console.log("this is data : ");
    console.log(data[0].login);
})

console.log("this is last line");



//practice
// async function fun1(){
//     console.log("inside function fun1()");
//     const response  = await fetch('http://dummy.restapiexample.com/api/v1/employees');

//     const users = await response.json();

//     return users;
// }

// let b = fun1();

// console.log(b);
// b.then((data)=>{
//     let dt = data['data'];
//     console.log(dt[0])
//     for(key in dt){
//         console.log(dt[key].employee_name)
//     }
//     console.log(dt[0].employee_name)
// })