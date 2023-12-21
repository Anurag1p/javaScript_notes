// loop in java script

let a = ["deepanshu","rahul","shivam","vicky"];
let b = [1,2,3,1,2,5,1];

//this is function helt to print array
function arrayPrint(ar){
    //for loop statement
    for(var i=0;i<a.length;i++){
        if(i==2){
            break;
            // continue;
        }
    console.log("elment number is : "+i+"  and value is  :  "+ar[i]);
}
}

// by this function you can print any Array
b.forEach(function(element){
    console.log(element);
})

//while loop 
let j=0;
while(j<a.length){
    console.log("elment number is : "+j+"  and value is  :  "+a[j]);
    j++;
}

//do while loop statement
let z =0;
console.log("this is do while statment");
do{
    console.log("elment number is : "+z+"  and value is  :  "+b[z]);
    z++;
}
while(z<b.length);