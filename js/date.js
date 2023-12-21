console.log("Date in java script");

let date = new Date();  // it return the current date and time and month
console.log(date);

//following way you can get date of perticuler day;

let otherDate = new Date('8-04-2003 04:54:04');  //new not working
console.log(otherDate);
otherDate = new Date('August 13 1999');
console.log(otherDate);
otherDate = new Date('08/13/1999');
console.log(otherDate);

//get day, date and month , hours , minutes , seconds
console.log("getting");
let a;
a = otherDate.getDate();
console.log(a);

/*Day defined by number value
0 = Sunday
1 = Monday
2 = Tuesday
3 = Wednesday
4 = Thursday
5 = Friday
6 = Saturday
*/
a = otherDate.getDay();
console.log(a);

/*Month defined by number value
0 = January
1 = Februry
.
.
10 = November
11 = December
*/
a = otherDate.getMonth();
console.log(a);
a = otherDate.getHours();
console.log(a);
a = otherDate.getMinutes();
console.log(a);
a = otherDate.getSeconds();
console.log(a);
a = otherDate.getMilliseconds();
console.log(a);
a = otherDate.getTime();  //its return 
console.log(a);


//set Value
console.log("set value");
let showDate = new Date('08/05/2006');
// let b;
console.log(showDate);
showDate.setDate(25);
console.log(showDate);
showDate.setMonth(1);
console.log(showDate);
showDate.setFullYear(1999);
console.log(showDate);
showDate.setHours(5);
console.log(showDate);
showDate.setMinutes(5);
console.log(showDate);
showDate.setSeconds(5);
console.log(showDate);
showDate.setMilliseconds(5);
console.log(showDate);


