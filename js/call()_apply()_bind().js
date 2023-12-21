console.log("call, apply, bind in javascript");


let arrObj = {
    name:"Deepanshu",
    degree:"BCA",
    fun:function(){
        console.log(this.name);  // "this" usi object ko targe krta hai jisme usko use kiya ja rha hai and "this" ko ap object ke bahar use hi kr skte
    }
}

let dataFun = function(city,state){
    console.log("helo")
    console.log(this.name,city,state);
}

// arrObj.fun()
// dataFun();


let arrObj1 = {
    name:"Rahul",
    degree:"BCA",
    fun:function(){
        console.log(this.name); 
    }
}

// ********** call method ********
// ager hum arrObj method mein fun function hai joki "this" keyword se usi ke key value use kr skta hai jekin hum usi function mein "this" keyword se kisi dusre or arrObj1 key value ko access kr skte hai

// arrObj.fun.call(arrObj1); // is trah hum ise impliment kr skte hai
dataFun.call(arrObj1,"rohtak","haryana");


// ********* apply method *************
// apply method is almost similatr to the call method but only difference is that call method take multiple parameter individualy but in apply method is take multiple paramete in the form of array

dataFun.apply(arrObj1,["rohtak","haryana"]);


// ********* bind method *************
// this method is also similar to call and apply method . only difference is that it return the value insted of run directly we need to store the result for future use

const result = dataFun.bind(arrObj1,"rohtak","haryana");
result()
