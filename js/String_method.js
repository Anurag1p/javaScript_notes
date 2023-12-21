// String method in java script

let str = "This is my first string";
let str1 = " My name is Deepanshu Nayak";

console.log(str);

console.log(str.concat(str1));  //it merge two string
console.log(str.length);        //return length of a string
console.log(str.toLowerCase()); //this function translate a string into Lowecase
console.log(str.toUpperCase()); //this function translate a string into uppercase
console.log(str.indexOf("first"));  //return index of element ..ye sirf phle aane wale element ka hi index return krta h chahe aage kitne b same element ho 
console.log(str.lastIndexOf("first"));  //return index of element ..ye sirf picche se aane wale element ka hi index return krta h chahe aage kitne b same element ho 
console.log(str.charAt(2));           //return value of index that you put
console.log(str.endsWith("string"));  //it match an element in string from the end then return true and false
console.log(str.includes("string"));  //it match an element in whole the string and the return true and false
console.log(str.substring(1,2));     //return the string according to subsstring(indexNumber , how many element you want)
console.log(str.substr(3,8)); // it will return substring of string (indexNumber , length of the string) and if you not give sencond argument then it will return substring from perticular index to last index
console.log(str.slice(0,4));        //return the string according to subsstring(indexNumber , how many element you want)
console.log(str.split(" "));          //you split a string with any symbol or space which present in your string and return its array
console.log(str.replace("This","deepanshu"));  //to replace perticular element or word with anthor element or word and it only replace that element which is come first
console.log(str.search("This")); // it will return index of that element and it only take single argument

//tamplate

let name = "deepanshu";
let course = "BCA";

let a = `My name is <h2>${name}</h2>
<br>
and i am persuning ${course} form Pt.nekiram sharma govt. college,rohtak`;
console.log(`My name is ${name}
and i am persuning ${course} form Pt.nekiram sharma govt. college,rohtak`);
document.body.innerHTML=a;