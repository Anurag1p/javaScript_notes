console.log("symbol in js");

const sym1 = Symbol("this is symbol in js");
const sym2 = Symbol("this is symbol in js");

//symbol matlb ye hamesha unique hote hai
console.log(sym1);
console.log(sym1===sym2);

const a="this is a";
const b="this is a";

console.log(a===b);
console.log(null===null);
console.log(undefined===undefined);

const k1 = Symbol("identifier for k1");
const k2 = Symbol("identifier for k2");

let obj={};
obj[k1]="deepanshu";
obj[k2]="nayak";
obj["name"]="chintu";
obj[2]="hello";

console.log(obj);
console.log(obj[k1]);
console.log(obj[k2]);
console.log(obj.k1);  // !! ALERT !!: cannot do this to get deepanshu because it is same as obj["k1"]


for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key , obj[k1])
        
    }
}