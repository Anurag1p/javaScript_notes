console.log("memoization");

let sum = 0;
const add = (num) => {
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  // console.log("sum value : ", sum);
  return sum;
};

const memoize = (fun)=>{
    let cache = {};
    return function(...args){
        let n = args[0];
        if(n in cache){
            console.log("value available in cache : ",cache);
            return cache[n];
        }else{
            console.log("first time run ");
            let result = fun(n);
            cache[n]=result;
            return result;
        }
    }
}


console.time();
const efficient = memoize(add);
console.log(efficient(5))
// console.log(add(5))
console.timeEnd();

console.time();
console.log(efficient(5))
console.timeEnd();