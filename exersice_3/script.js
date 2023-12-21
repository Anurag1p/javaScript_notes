console.log("3rd exersice in java script");


document.querySelector('.editable').addEventListener('click',fun1);
document.querySelector('.btn').addEventListener('click',fun2);

function fun1(e){
    
    s.forEach(element => {
        console.log(element);
    });
    let data = prompt("enter your data");
    localStorage.setItem("data",`${data}`);
    let get = localStorage.getItem('data');
   document.querySelector('.editable').innerHTML=`<h3>${get}</h3>`;
//    document.writeln(get);
}

function fun2(){
    let show = localStorage.getItem('data');
    // let show = null;
    // console.log(show);
    document.querySelector('.editable').innerHTML=`<h3>${show}</h3>`;
    
    if(show==null){
        console.log("this is null");
    }
    else{
        console.log("this is from loop: "+show);

    }
}