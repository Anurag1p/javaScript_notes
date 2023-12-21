console.log("promises");

function fun1(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true;
            if(error){
                console.log("function : promis has been resoleve");
                resolve();
            }else{
                console.log("function : promis has been not resolve");
                reject('sorry not fulfilled');
            }
        },5000);
    })
}

fun1().then(function(){
    console.log("thanks bro");
}).catch(function(error){
    console.log("very bad bro reason : "+ error)
})


//then() is defination of resolve()
//catch() is defination of reject()