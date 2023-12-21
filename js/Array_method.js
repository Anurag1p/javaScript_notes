//Array method in java script
let arr = ["deepanshu","nayak",252,525];

console.log("array length is : "+arr.length);
console.log(`array length is : ${arr.length}`);
//this methods using for modification
// arr.toString();             //convert array into string
// arr.pop();                  //it delete the element from the last
// arr.push("hello");          //it add the element from the last and return the length of array after adding element
// arr.shift();                //it delete the element from the begining
// arr.unshift("awesome");     //it add the element from the begining and return the length of array after adding element
// arr.join("&");              //you can be put any symbol between an element
// arr.reverse();                //it reverse an array
// arr.splice(0,2);         //to delete the multiple element ... splice(indexNumber , how many element you wanna remove)
// arr.splice(1,0,"deepanshu","nayak")   //to add the multiple element...splice(indexNumber , how many element you wanna remove, "which element added","which element added")
// arr.sort();               // it sort an array
// delete arr[1];  //it delete the index of the array

console.log(Array.isArray(arr));  //to verify the variable that is Array or not

console.log(arr.indexOf("hello"));  //it return the index of the element according put the value

//Merging an Array
let brr = [1,2,5,4,6,9];
console.log(arr.concat(brr));

//object
let obj = {
    name : "deepanshu",
    course : "BCA",
    rollno : 1360610094
}
console.log(obj.name);

//it is only use for object
for(let key in obj){
    console.log(`the ${key} of object : ${obj[key]}`);
}
