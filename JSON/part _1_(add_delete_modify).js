console.log("part _1_(add_delete_modify)");

let jsonObject = {
    "name" : "deepanshu",
    "lastname" : "nayak",
    "age" : 22,
    "profession" : "web developer"
}
//print value one by one
// document.write(jsonObject.name);
// document.write(jsonObject.lastname);

//modifiy value
jsonObject.name = "chintu";

//add key and their value 
jsonObject.rollno = 12121;
jsonObject.firstname = "deepanshu";

//delete key value
delete jsonObject.rollno;

//if you get key and value then using for in loop

for(getalldata in jsonObject){
    // document.write(getalldata+"<br>");  // if you use variable only then you got "key" 
    
    document.write(jsonObject[getalldata]+"<br>");  // if you get "value" of "key" 
}

//then you can check JSON is valid or not on "https://www.jsonlint.com"
