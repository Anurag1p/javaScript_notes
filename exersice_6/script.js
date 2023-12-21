console.log("exersice 6");



let fbtn = document.getElementById('fbtn');
fbtn.addEventListener('click',function(){

    console.log("click on fetch button");
    const xhr = new XMLHttpRequest();
    xhr.open('GET','data.json',true);
    xhr.onload = function(){
        if(this.status==200){
            console.log(JSON.parse(this.responseText));
            let obj = JSON.parse(this.responseText);
            let list = document.getElementById('list');
            str="";
            for(key in obj){
                str +=`<li>${obj[key]}</li>`;
            }
            list.innerHTML = str;
        }
    }
    xhr.send();
});