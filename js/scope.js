//scope in java script 
let i = 11;
if(1){
    console.log(i);
    
}
function local(){
   let i = 15;
    return `the value of i is : ${i} in function lacal`;
}
console.log(local());
console.log(`this is value of i : ${i} in glabal`);