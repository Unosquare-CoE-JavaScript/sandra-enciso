/*
Monostate design pattern
*/
class ChiefExecutiveOfficer
{
  get name() { return ChiefExecutiveOfficer._name; }
  set name(value) { ChiefExecutiveOfficer._name = value; }

  get age() { return ChiefExecutiveOfficer._age; }
  set age(value) { ChiefExecutiveOfficer._age = value; }

  toString()
  {
    return `CEO's name is ${this.name} ` +
      `and he is ${this.age} years old.`;
  }
}
/* The age and the name is shared between all the instances
So we must to initialize it outside the scope of the actual class, but in the class provide the setters and getters
*/
ChiefExecutiveOfficer._age = undefined;
ChiefExecutiveOfficer._name = undefined;

let ceo = new ChiefExecutiveOfficer();
ceo.name = 'Adam Smith';
ceo.age = 55;

let ceo2 = new ChiefExecutiveOfficer();
ceo2.name = 'John Gold';
ceo2.age = 66;

/* Why? because coe and ceo2 are the same instance  */
console.log(ceo.toString()); //CEO's name is John Gold and he is 66 years old.
console.log(ceo2.toString()); //CEO's name is John Gold and he is 66 years old.