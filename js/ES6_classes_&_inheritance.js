console.log("ES6 classes and inheritance");

class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan(){
        return `I m ${this.name} and this company is the best`;
    }
    joiningYear(){
        return 2021 - this.experience;
    }
    static add(a,b){      //To access this function you not need to create object of the class 
        return (a+b);     // its directly accessable
    }
}

let chintu = new Employee("Deepanshu",5,"Programmer");
console.log(chintu);
console.log(chintu.slogan());
console.log(chintu.joiningYear());

//you can access static add() function without create object
console.log(Employee.add(2,5));

class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,language){
        super(givenName,givenExperience,givenDivision);
        this.language = language;
    }
    favLanguange(){
        if(this.language == 'python'){
            return `favourite language is python`;
        }
        else{
            return `favourite language is javascript`;
        }
    }
    static mul(c,d){
        return (c*d);
    }
}
let pro = new Programmer("rohit",4,"saler","python");
console.log(pro);
