console.log('object prototype');


//this is boject literal 
let obj = {
    name: "Deepanshu",
    profession : "software Engineer",
    course : "Bachler of Computer Application"
}
console.log(obj.name, obj.profession, obj.course);

//in this way you can add member in object literals
obj.color = "grey";



//you can add member by prototype but its not recommended in tha case of object literal
// Object.prototype.color="yellow";


//this is constuctor
function mobile(brand,price){

    //this is ( Instance Members )
    this.comp = brand;
    this.rate = price;
}

let xiaomi = new mobile("xiaomi",15000);
let samsung = new mobile("samsung",20000);

//in this way you can add member in the constructor but its only accessble for perticular object that you can created
xiaomi.color="white";
samsung.color="black";

//if you want to add member in the constructor which is accessble by all object and it is created by prototype 
//classname.prototype.key= 'value'

//this is called ( Prototype Members )
mobile.prototype.model='pro model';
mobile.prototype.getSpec=function (){
    console.log(`${this.comp} is available in 6GB / 128GB`);
}

console.log(xiaomi);
console.log(samsung);
console.log(samsung.getSpec());

