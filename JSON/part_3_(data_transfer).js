console.log("data transfer to other file");
console.log("data transfer to other file");

// let data = {"name":"deepanshu","class":"BCA","rollno":"1360610064"}
let data = {name:"deepanshu",class:"BCA",rollno:"1360610064"}
// document.write(data);

//JSON.stringify() is convert java script object into string which is suitable for sendig to server
let changedata = JSON.stringify(data);

// document.write(changedata);

//this syntax is using for send the data to anthor file
window.location="send.php?values=" + changedata;

//JSON.parse() is convert json string to javascript object
let jsobject = JSON.parse(changedata);
document.write(jsobject.class);

