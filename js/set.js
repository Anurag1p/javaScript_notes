console.log("Set in js");

//set always store unique value
//if u add same value 2 time but set always count once
const mySet = new Set();


//adding value in set  and u can add any types of value
mySet.add("deepanshu");
mySet.add("nayak");
mySet.add(254);
mySet.add(true);
mySet.add(false);
mySet.add("nayak");
mySet.add({});
mySet.add(function(){ });

// Use a constructor to initialize the set
// let mySet2 = new Set([1, 45, 'this', false, {a:4, b:8}, 'this']);
// console.log('New set:',mySet2);

// //deleting value in set
mySet.delete(254);

// //check availablity of any perticular value
console.log(mySet.has("deepanshu")); //it return 'true' bcz value finded in set
console.log(mySet.has("rahul"));     //it return 'false' bcz value doesn't finded in set


// Get the size of the set
console.log(mySet.size);

//iterating set using for of loop
// for (const iterator of mySet) {
//         console.log("this is iterator : ",iterator);
//     }



//iterating set using foreach loop
mySet.forEach((i)=>{
    console.log("this is iterator : ",i);
    
})


//convert set into array
let arraySet = Array.from(mySet);
console.log(arraySet);
console.log(mySet);


//**************practice********* */
console.log("**************practice********* ");

//convert array into set and set remove duplicate value
let nameSet = ["deepanshu","nayak","rahul","deepanshu","rahul"];

const mySet3 = new Set(nameSet);

console.log(mySet3);


let newArray = Array.from(mySet3);
console.log(newArray);