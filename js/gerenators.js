console.log("gerenators in js");

//generator value ko generate krta hai
// yield ka meaning hai kiye function ko wahi pause or rok deta hai 
// or isko object.next() se call krte hai
// phli bar call kroge to first yield call hoga or dusri bar call kroge to dura yield call hoga 
// jitne b yield ko access krna h to utni bar hi object.next() krke call krna pdega

// function* fun() {
//     console.log("this is first console.log");
//     yield 'first yeild';
//     console.log("this is second console.log");
//     yield 'second yeild';
// }


//is method se kitni bhi baar yield ko call kr skte hai
// function* fun1() {
//     let i = 0;
//     while (true) {
//         yield i++;
//     }
// }


// let b = fun1();
// for (let c = 0; c < 5000; c++) {

//     console.log(b.next().value);
// }



//is main ap yield ki value pass kr skte ho
// function *fun(){
//     // let result = (yield)*10;
//     let yArray = [yield,yield,yield];  //yield mein array bhi store krwa skte ho
//     console.log(`this is yeild value : ${yArray}`);
//     console.log(`this is yeild value : ${yArray[2]}`);
// }

// function *fun(){
//     yield 66;
//     yield ['node','javascipt','operating']; //isse saari value ek hi array aajaigi
//     yield* ['node','javascipt','operating']; //isse sari value alg alg aaygi
// }

function *fun(){
    yield 'php';
    yield 'python';

    yield 'java';
    yield 'javascript';
}

let gen = fun();
// console.log(gen.next());
// console.log(gen.next());
// gen.next();
// gen.next(600);
// gen.next('deepanshu');
// gen.next(700);

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

console.log(gen.next().value);
console.log(gen.return()); //ye function ko return kr deta uske bad next() kroge to undifined return krega
console.log(gen.next().value);
console.log([...gen]); // ye function mein baki bache huye yield ki value ko ek array bna kr show krta hai