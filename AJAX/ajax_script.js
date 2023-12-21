console.log("deepanshu nayak");

document.getElementById('loadData').addEventListener('click',loadData);
function loadData(){
    let xhttp = new XMLHttpRequest();

    // xhttp.onreadystatechange = function(){
    //     if(this.readyState == 4 && this.status == 200){
    //         // console.log(this.responseText);
    //         document.getElementById('demo').innerHTML = this.responseText;
    //     }
    //     else if(this.readyState == 4 && this.status == 404){
    //         document.getElementById('demo').innerHTML = "<h3 style='color:red'>file not found</h3>";

    //     }
    // }



    //fake json data
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let st = JSON.parse(this.responseText);
            console.log(typeof this.responseText);
            console.log(st[0]['userId']);
        }
    }

    // xhttp.open('GET' ,"content/readme.txt",true);
    xhttp.open('GET' ,"https://jsonplaceholder.typicode.com/posts",true);
    xhttp.send();

}