/*Sub builders */
//This example uses sub sub builders to create a new Person which has a job, address and each property of Person has its own properties
class Person //creates a Person
{
  constructor()
  {
    // address info
    this.streetAddress = this.postcode = this.city = ''; //initializing

    // employment info
    this.companyName = this.position = '';
    this.annualIncome = 0;
  }

  toString() //Returns a String which contains all the person's info
  {
    return `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n`
      + `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`;
  }
}

class PersonBuilder //Builds a new person
{
  constructor(person = new Person()) //by default new Person()
  {
    this.person = person;
  }

  get lives()
  {
    return new PersonAddressBuilder(this.person); //builds a person's addres
  }

  get works()
  {
    return new PersonJobBuilder(this.person); //builds a person's job
  }

  build() //return the person with the properties
  { 
    return this.person;
  }
}

/* class PersonJobBuilder have a parent class, to modify later its properties */
class PersonJobBuilder extends PersonBuilder 
{
  constructor(person)
  {
    super(person);
  }

  at(companyName)
  {
    this.person.companyName = companyName;
    return this;
  }

  asA(position)
  {
    this.person.position = position;
    return this;
  }

  earning(annualIncome)
  {
    this.person.annualIncome = annualIncome;
    return this;
  }
}

/* class PersonAddressBuilder have a parent class, to modify later its properties */
class PersonAddressBuilder extends PersonBuilder
{
  constructor(person)
  {
    super(person);
  }

  at(streetAddress)
  {
    this.person.streetAddress = streetAddress;
    return this;
  }

  withPostcode(postcode)
  {
    this.person.postcode = postcode;
    return this;
  }

  in(city)
  {
    this.person.city = city;
    return this;
  }
}

let pb = new PersonBuilder();
let person = pb
  .lives.at('123 London Road').in('London').withPostcode('SW12BC') // . sub builders
  .works.at('Fabrikam').asA('Engineer').earning(123000)
  .build(); //finally build
console.log(person.toString());

