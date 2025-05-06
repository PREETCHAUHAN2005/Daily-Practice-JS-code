const students = {
  fullName: "Preet Chauhan",
  marks: "94.4",
  printMarks: function () {
    console.log("marks=", this.marks);
  },
};

const employee = {
  calcTax() {
    console.log("calcTax = 10%");
  },
};
const emp1 = {
  salary: 50000,
  calcTax() {
    console.log("calcTax = 15%");
  },
};
const emp2 = {
  salary: 50000,
};
const emp3 = {
  salary: 50000,
};
const emp4 = {
  salary: 50000,
};
emp1.__proto__ = employee;
emp2.__proto__ = employee;
emp3.__proto__ = employee;
emp4.__proto__ = employee;

class ToyotaCar {
  constructor(brand, mileage) {
    console.log("create new brandedCar");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("start car");
  }
  stop() {
    console.log("stop car");
  }
  setBrand(brand) {
    // console.log("setBrand=" ,this.brand);
    this.brand = brand;
  }
}

let fortuner = new ToyotaCar("Fortuner", 10);
// fortuner.setBrand(fortuner);
let lexus = new ToyotaCar("lexus", 12);
// lexus.setBrand(lexus);

class Person {
  constructor(name) {
    this.species="homo sapiens";
    this.name = name;
  }
  eat() {
    console.log("Person eats");
  }
  sleep() {
    console.log("Person sleeps");
  }
}
class Engineer extends Person {
  constructor(name) {
    super(name); // to invoke parent class instructor or constructor
    // this.branch = branch;
  }
  work() {
    super.eat();
    console.log("Work and develops something smart");
  }
}

let engObject = new Engineer("Preet");
