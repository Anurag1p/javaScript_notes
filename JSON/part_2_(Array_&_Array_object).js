//array in JSON

let arrayObject = {
    "array" : ["chintu","deepanshu","nayak"]
}

// document.write(arrayObject.array);


//array object

let arrayobj = {
    "student" : [
        {
            "name":"rahul",
            "class": "12th"
        },
        {
            "name":"subham",
            "class":"10th"
        },
        {
            "name":"jatin",
            "class":"8th"
        }
    ]
}

// document.write(arrayobj.student[1].name);

for(outer_x in arrayobj.student){
    // document.write(`<h5>${outer_x}</h5>`);
    for( inner_x in arrayobj.student[outer_x]){
        document.write(arrayobj.student[outer_x][inner_x]+"<br>");
    }
    document.write("<br>");
}