/*
Bulding a prototype factory using serializer
*/

class Address
{
  constructor(suite, streetAddress, city)
  {
    this.suite = suite;
    this.streetAddress = streetAddress;
    this.city = city;
  }

  toString()
  {
    return `Suite ${this.suite}, ` +
      `${this.streetAddress}, ${this.city}`;
  }
}

class Employee // renamed
{
  constructor(name, address)
  {
    this.name = name;
    this.address = address; //!
  }

  toString()
  {
    return `${this.name} works at ${this.address}`;
  }

  greet()
  {
    console.log(
      `Hi, my name is ${this.name}, ` +
      `I work at ${this.address.toString()}` //!
    );
  }
}

/*
Serializer helps to copying objects while preserving their type
*/
class Serializer
{
  constructor(types){
    this.types = types;
  }

  markRecursive(object)
  {
    // anoint each object with a type index
    let idx = this.types.findIndex(t => {
      return t.name === object.constructor.name;
    });
    if (idx !== -1)
    {
      object['typeIndex'] = idx;

      for (let key in object)
      {
        if (object.hasOwnProperty(key) && object[key] != null)
          this.markRecursive(object[key]); // ^^^^^^^^^^ important
      }
    }
  }

  reconstructRecursive(object)
  {
    if (object.hasOwnProperty('typeIndex'))
    {
      let type = this.types[object.typeIndex];
      let obj = new type();
      for (let key in object)
      {
        if (object.hasOwnProperty(key) && object[key] != null) {
          obj[key] = this.reconstructRecursive(object[key]);
        }
      }
      delete obj.typeIndex;
      return obj;
    }
    return object;
  }

  clone(object)
  {
    this.markRecursive(object);
    let copy = JSON.parse(JSON.stringify(object));
    return this.reconstructRecursive(copy);
  }
}

/*
Define the offices where people can work
*/
class EmployeeFactory
{
  static _newEmployee(proto, name, suite) //this method creates a new employee from a given prototype
  {
    let copy = EmployeeFactory.serializer.clone(proto);
    copy.name = name;
    copy.address.suite = suite;
    return copy;
  }

  /* Creating a new main office */
  static newMainOfficeEmployee(name, suite)
  {
    return this._newEmployee(
      EmployeeFactory.main, name, suite
    );
  }

  /* Creating a new aux office */
  static newAuxOfficeEmployee(name, suite)
  {
    return this._newEmployee(
      EmployeeFactory.aux, name, suite
    );
  }
}

EmployeeFactory.serializer = new Serializer([Employee, Address]); //Instantiate the serializer using the classes Employee and Address
EmployeeFactory.main = new Employee(null, //Main is my prototype
  new Address(null, '123 East Dr', 'London'));
EmployeeFactory.aux = new Employee(null, //auxiliar office
  new Address(null, '200 London Road', 'Oxford'));

let john = EmployeeFactory.newMainOfficeEmployee('John', 4321);
let jane = EmployeeFactory.newAuxOfficeEmployee('Jane', 222);

console.log(john.toString());
console.log(jane.toString());