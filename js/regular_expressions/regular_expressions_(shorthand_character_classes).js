console.log("regular expressions (shorthand charactor classes)");


//charactor classes 

//word charactor
let regx = /\whi/; // word charactor - means _ or alphabet or number
regx = /\w+4u/;    //w+ means one or more word characters
regx = /\Wnt/;     // non charactor
regx = /\W+nt/;    // \W+ means more than one Non word character

//digit
regx = /\drt/;     // \d means digit
regx = /\d+15/;    //\d+ means one or more digit
regx = /\D15 SDE/;     // \D non digits
regx = /\D+15 SDE/;     // \D non digits

//space
regx = /\sbEst15/;       // Match whitespace character
regx = /\s+bEst15\s+SDE/;  // \s+ means match one or more than one whitespace characters
regx = /\S15/;            // Match non whitespace character
regx = /\S+4u/;          // Match one or more than one non whitespace character

//word boundary
regx = /5u4u\b/;     // it seprated to word with space

//Assertions
regx = /E(?=s)/
regx = /E(?!s)/

//--->word charactor
// const str ='chichi&nt5u4u is bEsu1 SDE';
// const str ='chichi &%$%nt5u4u is bEsu1 SDE';
//--->digit
// const str ='chichi &%$%nt5u4u is bEsu115rtg SDE';
// const str ='chichi &%$%nt5u4u is bEsu15 SDE';
// const str ='chichi &%$%nt5u4u is bEsu15 SDE';
// const str ='chichi &%$%nt5u4u is bEst15 SDE';
//--->space
// const str ='chichi &%$%nt5u4u is\tbEst15        SDE';
// const str ='chichi &%$%nt5u4u is bEst15 SDE';
// const str ='chichi &%$%nt5u4u is bEst15 SDE';
//--->word boundary
// const str ='chichi &%$%nt5u4u is bEst15 SDE';
//--->Assertions
const str ='chichi &%$%nt5u4u is bEgt15 SDE';

let result = regx.exec(str);
console.log(result);

if(regx.test(str)){
    console.log(`the string '${str}' match the '${regx.source}' expressions`);
}else{
    console.log(`the string '${str}' does not match the '${regx.source}' expressions`)
}