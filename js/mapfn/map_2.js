console.log("map part 2");

//map method is target the single element of the array and using this u can perform any operation on each element of the array


// array.map(callback(value, index, arrayname),thisArg)
// value parameter pas krna compsory hai


//this is example of array

let a = [1,5,4,3,8,7];
let b = [
    {
        name:'deepanshu',
        course:'BCA'
    },
    {
        name:'chinti',
        course:'MCA'
    },
    {
        name:'Rahul',
        course:'BA'
    },
]

b.map((value , index)=>{
    // value++;
    console.log(` ${index+1}. name is : ${value.name } and course : ${value.course}`);

})


//this is example of "array of object"

let obj=[
    {
        name:"deepanshu",
        course:"BCA",
        rollno:45
    }
];

obj.map((value)=>{
    console.log(obj[0].name);
    console.log(obj[0].course);
    console.log(obj[0].rollno);
})