// function Supertype(name, age, profession) {
//   this.name = name;
//   this.age = age;
//   this.profession = profession;
// }

// Supertype.prototype.sayHi = () => {
//   return "Hi!";
// }

// function Subtype() {}

// Subtype.prototype = new Supertype();
// console.log(Subtype.hasOwnProperty('sayHi'));
// // Supertype { name: undefined, age: undefined, profession: undefined }

function Person(name) {
  this.name = name;
  this.school = undefined;
}

Person.prototype.speak = function() {
  return `Hello, my name is ${this.name}.`;
};

// missing code

Child.prototype.learn = function() {
  return "I'm going to school!";
};

let child = new Child("Suzy", "PS 33");
console.log(child instanceof Child);                               // true
console.log(child instanceof Person === false);                    // true
console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
console.log(Object.getPrototypeOf(child).constructor === Child);   // true
console.log(child.school === "PS 33");                             // true
console.log(child.learn() === "I'm going to school!");             // true
console.log();

let person = new Person("Pete");
console.log(person instanceof Child === false);                    // true
console.log(person instanceof Person);                             // true
console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
console.log(Object.getPrototypeOf(person).constructor === Person); // true
console.log(person.school === undefined);                          // true
console.log(person.speak() === "Hello, my name is Pete.");         // true