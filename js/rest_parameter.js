console.log("rest paramenter");

// rest parameter using u pass more than 2 argument 
// kyo ki rest parameter parameter ko array bna deta hai
// rest paramter repersented as a three dot "..." after three dots you must used "any_name"
// syntax :
//          ...any_name


function sum(...inputs){
    // console.log(a+b);
    
    console.log(inputs);
    console.log(...inputs);

    let total=0;
    for(let i of inputs){
        
        total += i;
    }
    console.log(total);
}

sum(1,3,2,4,5,7);