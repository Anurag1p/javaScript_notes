console.log("regular_expressions - metacharactor");

let regx = /deepanshu/;

regx = /^deep/;  // ^ means expressions will match if string start with
regx = /anshu$/;  // $ at the end of the string means "string ends with"
regx = /dee.anshu/;  // match any one charactor
regx = /t*chy/;  //  matches any 0 or more charactor
regx = /te?chy?/;  // ? after charactor means that charactor is optional
regx = /te\*chy/;  // if you want match exect same word in the string then you can use \ before *


// let str = 'deepanshu won tchjyg deepanshu'; //example for regx = /te?chy?/;
let str = 'deepanshu won te*chy deepanshu';
let result = regx.exec(str);
console.log(result);

if(regx.test(str)){
    console.log(`the string '${str}' match the '${regx.source}' expressions`);
}else{
    console.log(`the string '${str}' does not match the '${regx.source}' expressions`)
}


