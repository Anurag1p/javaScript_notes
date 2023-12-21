console.log("Ajax in javaScript");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',fetchClickHandler);

function fetchClickHandler(){
    console.log("fetchBtn clicked");

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('Get','content/readme.txt',true);
    // xhr.open('Get','https://jsonplaceholder.typicode.com/todos',true);
    //POST request
    // xhr.open('Get','JSON/part _1_(add_delete_modify).js',true);

    //get ready status of data
    xhr.onreadystatechange = function(){
        console.log('this is value of readyStatus : '+this.readyState);
    }

    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log("loading...");
    }


    // What to do when response is ready
    xhr.onload = function(){
        if(this.status == 200){
            console.log(JSON.parse(this.responseText));
            let obj = JSON.parse(this.responseText);
            let pop = document.getElementById('list');
            str ="";
            for(key in obj){
                str += `<li>${obj[key].name}</li>`;
            }
            pop.innerHTML=str;
        }else{
            
            console.error("some error occered");
        }
    }


    // send the request
    xhr.send();

    console.log("we are done");
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click',popBtnHandler);


function popBtnHandler(){
    console.log("popBtn clicked");


    xhrp = new XMLHttpRequest();
    xhrp.getResponseHeader('Content-type','application/json');

    xhrp.open('POST','http://dummy.restapiexample.com/api/v1/create',true);

    xhrp.onload = function(){
        if(this.status==200){
            console.log(JSON.parse(this.responseText));
            // console.log(this.responseText);
        }else{
            console.error("thare are error");
        }
    }

    p = `{"name":"tesxc€zt","salary":"123","age":"23"}`;  //this data send for added
    xhrp.send(p);
}
