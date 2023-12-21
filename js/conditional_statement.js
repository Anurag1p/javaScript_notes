// conditional statement in java script
function password(psd){
    let a = "Deepanshu@12";
    
    //single if else statement 
    if(a==psd){
        console.log("this is password is verified");
    }
    else{
        console.log("password does not mutch ...Try again")
    }

}

function EnterMarks(mrk){
    let c = perc(mrk);
    console.log("your percentage is :  "+c+"%");

    //if else ladder 
    if(c >= 90){
        console.log("your grade is : A+");
    }
    else if(c >= 80){
        console.log("your grade is : B+");
    }
    else{
        console.log("your grade is : C+");
    }
} 

function perc(mrk){
    return mrk/5;
}

let age = 25;
console.log((age<20)? "your age less than 20" : "your age is not less than 20");

//switch

switch(Date().getDay()){
    case 18:
        console.log("you are 18 years old");
        break;
    case 25:
        console.log("you are 25 years old");
        break;
    case 30:
        console.log("you are 30 years old");
        break;
    default:
        console.log("this is default line");

}