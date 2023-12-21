console.log("callback function program and also use promises function");


const students = [
    {name:"deepanshu",subject:"javascript"},
    {name:"chintu",subject:"DBMS"}
]


function enrollStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            students.push(student)
            let error = false;
            if(!error){
                resolve();
            }else{
                reject();
            }
        }, 5000);
    })
}


let newStudent = {name:"rahul",subject:"history"}
enrollStudent(newStudent).then(
    getStudent
    ).catch(function(){
        console.log("sorry bro");
})

 function getStudent(){
        setTimeout(() => {
            
            let str ="";
            students.forEach(function(element){
                str += `<li>${element.name}</li>`;
            })
            let list = document.getElementById('list').innerHTML=str;
            console.log("student data has been fetched");
        }, 4000);
    }