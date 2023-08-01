function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Set up inheritance: Link Employee's prototype to a new object with Person's prototype as the prototype
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Reset the constructor to Employee
Employee.prototype.constructor = Employee;

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
