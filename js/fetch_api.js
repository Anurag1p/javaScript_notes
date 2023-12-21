console.log("this is fetch api");

//this is example of 'GET' request
function getData(){
    console.log("starting getdata function");
    fetch("https://api.github.com/users").then((response)=>{
        console.log("this is response section");
        return response.text();
    }).then((data)=>{
        console.log("this is data section");
        console.log(data);
    })
}


//this is example of 'GET' request
// function getData() {
//     console.log("starting getdata function");
//     fetch("https://api.github.com/users").then((response) => {
//         console.log("this is response section");
//         return response.json();
//     }).then((data) => {
//         console.log("this is data section");
//         for (key in data) {

//             console.log(data[key].login);
//         }
//     })
// }

console.log("before running getData function");
getData();
console.log("after running getData function");



//this is example of 'POST' request

function postData(){
    console.log("postData() function is starting");
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"ddffd5","salary":"123","age":"23"}';
    parameter = {
        method : 'post',
        headers:{
            'Content-Type':'application/json'
        },
        body : data
    }
    fetch(url , parameter).then((response)=>{
        console.log("first then");
        return response.json();
    }).then((data)=>{
        console.log("second then");
        console.log(data);
    })
}

// postData();