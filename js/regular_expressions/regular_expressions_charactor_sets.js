console.log("regular expressions charactor sets");

//Regular Expressions
    //Basic Funtions
    //Metacharactor symbols
    //Charator sets

// let regx = /^d/i;


//Charactor sets - We use []
let regx = /ch[a-z]ntu/;  //can be any charactor from a to z
regx = /ch[std]ntu/;    // can be an s,t or d
regx = /ch[^std]ntu/;   // cannot be an s,t or d
regx = /ch[^std]nt[dSu]/;   // cannot be an s,t or d + can be an d,S or u
regx = /b[a-zA-Z]s[Su0-9][0-5]/;   // cannot be an s,t or d + can be an d,S or u


//Quntifier - We use {}
regx = /de{2}panshu/;  // "e" can be 2 time
regx = /de{0,2}panshu/; // "e" can be 0 or 2 time


//Grouping  - We use paranthesis for groupings ()
regx = /(chi){2}nt([0-9]u){2}/
// const str ='chantS is bEsu1 SDE';
// const str = 'dpanshu is bEsu1 SDE';
const str ='chichint5u4u is bEsu1 SDE';

let result = regx.exec(str);
console.log(result);

if(regx.test(str)){
    console.log(`the string '${str}' match the '${regx.source}' expressions`);
}else{
    console.log(`the string '${str}' does not match the '${regx.source}' expressions`)
}