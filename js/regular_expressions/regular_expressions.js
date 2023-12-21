console.log("Regular Expresion");

let regular = /best/; //this is regular expressions
// regular = /best/g;  //g means globle flag
// regular = /best/i;  //i means case insenstive flag

console.log("this : ",regular);
console.log("this : ",regular.source);

let s = "best student is the best Software Engineer";

// function to match expressions
// 1. exec() - This function will return an array for match or null for no 
let result = regular.exec(s);
console.log(result);
console.log(result.index);
console.log(result.input);
console.log(result.length);

// result = regular.exec(s);
// console.log(result);

// 2. test() - Returns true or false
//   if data is matched in string then test() function return true otherwise false return
let result1 = regular.test(s);
console.log(result1);


//3. match() - return array when data is match otherwise return null
let result2 = s.match(regular);
console.log(result2);


//4. search() - return index of the match then if failed it return -1
let result3 = s.search(regular);
console.log(result3);

//5. replace() - it replace the matched substring with a replacement substring
// and it create new string
//if you cannot use globle flag when replace() function is only replace first substring
//if you want to replace all substring then you need to use globle flag
let result4 = s.replace(regular, "deepanshu"); 
console.log(result4);
