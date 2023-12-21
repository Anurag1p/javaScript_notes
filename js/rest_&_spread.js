console.log("rest and spread operator in javascript");

// rest   => ka mtlb combined krna 
// spread => ka mtlb hota alg alg krna

let arrObj = {
    name:"Deepanshu",
    degree:"BCA",
    designation:"Software Engineer"
}
let sum =function(a,b,c,...other){  // here "...other" is example of rest operator kyoki baki usne baki ke elements ko combine krke ek array bnadiya
    console.log(...other)          // here "...other" is example of spread operator kyoki isne array ke elements ko alg alg dikhata hai
    return (a+b+c);
}
console.log(sum(5,4,3,4,6,3,"dfa"))
console.log(arrObj)


let arrObj2 ={
    ...arrObj,
    designation:"software developer"
}

const {name,...rest} = arrObj2;
console.log(arrObj2)
console.log(name,rest)