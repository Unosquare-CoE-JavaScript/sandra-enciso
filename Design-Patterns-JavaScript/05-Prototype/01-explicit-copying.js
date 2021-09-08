/*
Prototype.
A partially or fully initialized object that you copu (clone) and make use of.
Complicated objects (eg cars) aren't designed from scratch
    they reiterate existing designs
An existing (partially or fully constructed) design is a Prototype
We make a copy (clone) the prototype and customize it
    Requires 'deep copy' support
We make the cloning convenient (eg. via a Factory)
*/

/* In this example, creates a Person, this person has an addres. And then copy the person in a new person to modify the properties later */
class Address
{
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  deepCopy() //Return the VALUE of this object
  {
    return new Address(
      this.streetAddress,
      this.city,
      this.country
    );
  }

  toString()
  {
    return `Address: ${this.streetAddress}, ` +
      `${this.city}, ${this.country}`;
  }
}

//Creates a new Person which has a name and an addres
class Person
{
  constructor(name, address)
  {
    this.name = name;
    this.address = address; //!
  }

  deepCopy()
  { //make a deep copy of the person
    return new Person(
      this.name,
      this.address.deepCopy() // needs to be recursive because is an object
    );
  }

  toString()
  {
    return `${this.name} lives at ${this.address}`;
  }
}

let john = new Person('John',
  new Address('123 London Road', 'London', 'UK'));

let jane = john.deepCopy();

jane.name = 'Jane';
jane.address.streetAddress = '321 Angel St'; // oops

console.log(john.toString()); // oops, john is called 'jane'
console.log(jane.toString());