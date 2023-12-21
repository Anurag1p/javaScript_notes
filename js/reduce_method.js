console.log("reduce in javascript");

// reduce method ka array mein elements per arthmetic operation ko apply krne k liye use krte hai
// jaise add , multipli , divid, substraction
// or ye arthmetic operation complete hone ke baad final result return kr deta hai

const data = [12,2,2];

let total = 0;

// const store = data.reduce((total,elem)=>{
//     return total+elem;
// },0)  // 0 tatal varible ki intial value hai


const store = data.reduce((total,elem)=>{
    return total*elem;
},1)  // 0 tatal varible ki intial value hai

console.log(store);