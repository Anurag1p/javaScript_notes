console.log("try() and catch()");

let a = undefined;
// let a = 'deepanshu';
 
if(a != undefined){
    throw new Error('this is not undefined');  //this is throw an error in the console 
    // console.log("this is not undefined");
}else{
    console.log("this is undefined");
}


//if any error not occured in the try block then catch block not executed but finally block is always execute either try block run or catch block run

// these are some error that is occured in try block errors:
//Type of error
// TypeError = occurs when a variable or parameter is not of a valid type.
// SyntaxError = occurs when there is an error in syntax.
// ReferenceError = occurs when there is an invalid reference.
// EvalError= occurs when there is an error in global function.
// RangeError=  occurs when a numeric variable or parameter is outside of its valid range.

try{
    // null.console
    console.log("inside the try block");

    funsdf();  // error occured here becuase this function not defined and try controle tranfer to catch block
    console.log("hello");
}
catch(error){
    console.log("inside the catch block");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log("inside the finally block");
}

