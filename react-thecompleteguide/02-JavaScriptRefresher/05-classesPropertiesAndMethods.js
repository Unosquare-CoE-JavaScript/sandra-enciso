/*  Classes, Properties and Methods  */
/*
Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them. 
Properties are like 'variables attached to classes/objects'
Methods are like 'functions attached to classes/objects'
*/
/* Using Next Generation JS ES7*/
class Human { //Parent class
  gender = 'male'; //Dont need a constructor and this keyword
  
  printGender = () => { //Using arrow function 
    console.log(this.gender);
  }
}

class Person extends Human { //Dont need a constructor
    name = 'Max'; 
    gender = 'female' // reassign the property of the parent //dont need call super()
  
  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName(); //'Max'
person.printGender(); //'female' //Accesing to parent method