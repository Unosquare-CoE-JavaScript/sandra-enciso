/*
You are given the Person class and asked to write a ResponsiblePerson proxy that does the following:
-Allows person to drink unless they are younger than 18 (in that case, return "too young")
-Allows person to drive unless they are younger than 16 (otherwise "too young")
-In case of driving while drink, returns "dead", regardless of age
*/
/*
You are given the Person class and asked to write a ResponsiblePerson proxy that does the following:
-Allows person to drink unless they are younger than 18 (in that case, return "too young")
-Allows person to drive unless they are younger than 16 (otherwise "too young")
-In case of driving while drink, returns "dead", regardless of age
*/

class Person
{
  constructor(age=0)
  {
    this.age = age;
  }

  drink() { return 'drinking'; }
  drive() { return 'driving'; }
  drinkAndDrive() { return 'driving while drunk'; }
}

class ResponsiblePerson
{
  constructor(person)
  {
    this.person = person;
  }

  drink(){
    return this.person.age < 18 ? "too young":this.person.drink();
  }

  drive(){
    return this.person.age < 16 ? "too young":this.person.drive();
  }

  drinkAndDrive(){
    return "dead"
  }
  
}

let p = new Person(18);
let person = new ResponsiblePerson(p);
console.log(person.drink());
let p1 = new Person(16);
let person1 = new ResponsiblePerson(p1)
console.log(person1.drive());

/*
SUMMARY
A proxy has the same interfaace as the underlying object
To create a proxy, simply replicate the existing interface of an object
Add relevant functionality to the redefined member functions
Different proxies (communication, loggin, caching, etc.) have completely different behaviors
*/