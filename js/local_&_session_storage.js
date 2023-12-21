console.log("local and session storage");
//localStorage is storage the data permanent
//sessionStorage is storage the data temperally

//*** Limitation of local Storage ***/
//you cannot add An Array.this problem is overcome by using JSON
let impArray = ['java','python','c++'];


//add items in local storage
localStorage.setItem("Name","nayak");
localStorage.setItem("Name2","chintu");
localStorage.setItem("language",JSON.stringify(impArray));

//remove all items in the lacal storage
// localStorage.clear();


//remove perticular item by key
// localStorage.removeItem('Name2');

//get item gives value according key
let get = localStorage.getItem('Name2');
console.log(get);
get = JSON.parse(localStorage.getItem('language'));
console.log(get);


//sessionStorage

//*** Limitation of session Storage ***/
//you cannot add An Array.this problem is overcome by using JSON
let sArray = ['js','HTML','CSS'];


//add items in session storage
sessionStorage.setItem("N","sDeepanshu");
sessionStorage.setItem("Name4","schintu");
sessionStorage.setItem("slanguage",JSON.stringify(sArray));

//remove all items in the session storage
// sessionStorage.clear();


//remove perticular item by key
// sessionStorage.removeItem('Name3');

//get item gives value according key
let sget = sessionStorage.getItem('Name3');
sget = JSON.parse(sessionStorage.getItem('slanguage'))
console.log(sget);

