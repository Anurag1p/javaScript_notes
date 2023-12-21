console.log("object literal and constructor");

//create object 
let car = {
    name : 'mahindra XUV700',
    toSpeed : 200,
    run : function(){
        console.log("car is running");
    }
}
console.log(car.name , car.toSpeed,);
car.run()

function brandedcar(model,company, topSpeed){
    this.name = model;
    this.brand = company;
    this.speed = topSpeed;
    this.run = function(){
        console.log(`${company} and MODEL ${model} is runnig...`);
    }
    this.anlysis = function(){
        console.log(`${model} car slower by ${300-this.speed} than range rover`)
    }
}

let car1 = new brandedcar('xuv', 'mahindra',200);
let car2 = new brandedcar('harrier','TATA',220);

console.log(car1.run(),car1.anlysis());
console.log(car2.run(),car2.anlysis());