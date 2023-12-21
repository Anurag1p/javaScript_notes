console.log("my name is deepanshu");

// node

// a.forEach(function(element,index){
//     if(true==a[index].includes(data)){

//         console.log(element);
//     }
//     else{
//         // console.log(element);
//         console.log("not found")
//     }
// })

// {
//     let data = "nayak";
//     Array.from(document.links).forEach(function(element,index){
//         let a = [];
//         a[index]=element;
//         a[index]=a[index].toString();
    
//     })
//     a.forEach(function(element,index){
//         if(true==a[index].includes(data)){
    
//             console.log(element);
//         }
//         else{
//             // console.log(element);
//             console.log("not found")
//         }
//     })
// }


//best solution
let data = "nayak";
let a =new Array();
let c = document.links;
Array.from(document.links).forEach(function(element,index){
    // let a = [];
    a=element.href;
    
    if(a.includes(data)){

        console.log(a);
    }
    else{
        // console.log(element);
        console.log("not found")
    }

})