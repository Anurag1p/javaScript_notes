console.log("Maps in js");

const myMap = new Map();

const key1="myString" , key2 = {}, key3 = function(){ };

// Setting map values
myMap.set(key1,"this is string for key1");
myMap.set(key2,"this is string for key2");
myMap.set(key3,"this is string for key3");

console.log("here : ",myMap);

// Getting the values from a Map 
let value1 = myMap.get(key1);
console.log("value1 : ", value1);

let value2 = myMap.get(key2);
console.log("value2 : ",value2);

let value3 = myMap.get(key3);
console.log( "value3 : ", value3);


// Get the size of the map
console.log("size",myMap.size);


// You can loop using for..of loop to get keys and values
for (const [key,value] of myMap) {
    console.log(key ,value);
    
}

// Get only keys
for (const key of myMap.keys()) {
    console.log("this is key : " ,key);
    
}

// Get only values
for (const value of myMap.values()) {
    console.log("this is value : ",value);
    
}

// You can also use foreach loop
// make sure passing parameters are same order
myMap.forEach((values,keys)=>{
    console.log(keys);
    console.log(values);
})


// Converting map to an array
let arrayMap = Array.from(myMap);
console.log(arrayMap);


// Converting map keys to an array
let arrayMapKey = Array.from(myMap.keys());
console.log(arrayMapKey);


// Converting map values to an array
let arrayMapValue = Array.from(myMap.values());
console.log(arrayMapValue);