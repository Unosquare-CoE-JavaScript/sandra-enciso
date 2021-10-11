/* Understanding Classes */
/*
Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them. 
Classes are used by React to creat its components
*/

class Human { //Parent class
  constructor(){
    this.gender = 'male';
  }
  
  printGender(){
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor(){
    super(); //executes the parent constructor
    this.name = 'Max';
    this.gender = 'female' // reassign the property of the parent
  }
  
  printMyName(){
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName(); //'Max'
person.printGender(); //'female' //Accesing to parent method