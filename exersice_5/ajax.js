console.log("exersice 5");

let fruitBtn = document.getElementById('fruitBtn');
fruitBtn.addEventListener('click',fruitFun);

function fruitFun(){
    console.log("fruitFun clicked");

    const xhr = new XMLHttpRequest();


    xhr.open('GET','fruit.js',true);  // calling data by js file

    xhr.onload = function(){
        if(this.status == 200){
            // console.log(JSON.parse(this.responseText));
            let obj = JSON.parse(this.responseText);
            let list = document.getElementById('list');
            str = "";
            for(key in obj){
                str += `${obj[key].name} <br>`
            }
            list.innerHTML = str;
            // console.log( this.responseText);
        }else{
            console.log("error");
        }
    }

    xhr.send();

}

let vegBtn = document.getElementById('vegBtn');
vegBtn.addEventListener('click',vegFun);

function vegFun(){
    console.log("vegFun clicked");

    const xhr = new XMLHttpRequest();


    xhr.open('GET','veg.json',true);  // calling data by json file

    xhr.onload = function(){
        if(this.status == 200){
            // console.log(JSON.parse(this.responseText));
            let obj = JSON.parse(this.responseText);
            let list = document.getElementById('list');
            str = "";
            for(key in obj){
                str += `${obj[key]} <br>`
            }
            list.innerHTML = str;
            // console.log( this.responseText);
        }else{
            console.log("error");
        }
    }

    xhr.send();
}

