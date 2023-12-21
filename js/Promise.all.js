console.log("this is deepanshu");

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("this is first Promise");
        resolve(20);
    },1 * 1000);
});

let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("this is second Promise");
        resolve(50);
    }, 2 * 1000);
});

let total = 0;

Promise.all([p1,p2]).then((result)=>{
    for(var element of result){
        total+=element;
    }
    console.log("result : ",result);
    console.log("total : ",total);
}).catch((error)=>{
    console.log("this is an error : ",error);
})