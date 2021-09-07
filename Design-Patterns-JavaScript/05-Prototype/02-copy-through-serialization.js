class Address
{
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  toString()
  {
    return `Address: ${this.streetAddress}, ` +
      `${this.city}, ${this.country}`;
  }
}

class Person
{
  constructor(name, address)
  {
    this.name = name;
    this.address = address; //!
  }

  toString()
  {
    return `${this.name} lives at ${this.address}`;
  }

  greet()
  {
    console.log(
      `Hi, my name is ${this.name}, ` +
      `I live at ${this.address.toString()}`
    );
  }
}

class Serializer
{
  constructor(types){
    this.types = types;
  }

  /*
  Takes an object and goes through the entire object in a recursive, and tries to find the types corresponding to the different parts of the object.
  and if it finds those types, then it adds them as just additional data of that object.
  */
  markRecursive(object)
  {
    // anoint each object with a type index
    let idx = this.types.findIndex(t => { //we have to find the index of the object
      return t.name === object.constructor.name;
    });
    if (idx !== -1) //meaning if we actually did find a time, then what we need to do is we need to imbue the object that we're working with, with the index of that type
    {
      object['typeIndex'] = idx;

      for (let key in object)
      {
        if (object.hasOwnProperty(key) && object[key] != null)
          this.markRecursive(object[key]);
      }
    }
  }

  /*
  We need to make sure that every single property of that object actually gets assigned to what we got from the original object.
  So every single property of object has to be written into obj
  */
  reconstructRecursive(object)
  {
    if (object.hasOwnProperty('typeIndex'))
    {
      let type = this.types[object.typeIndex];
      let obj = new type();
      for (let key in object)
      {
        if (object.hasOwnProperty(key) && object[key] != null) { //if the actual object has this value of null, then that's not somethig we can perform recursion on.
          obj[key] = this.reconstructRecursive(object[key]); //reconstruct the subelements resursively.
        }
      }
      delete obj.typeIndex; //we delete the obj.typeIndex because is no loger needed because is irrelevant
      return obj; // return the reconstructed object
    }
    return object; //otherwise, return the original object
  }

  clone(object)
  {
    this.markRecursive(object);
    let copy = JSON.parse(JSON.stringify(object)); //copy get a kind of replica of the object but without any type information.
    return this.reconstructRecursive(copy);
  }
}

let john = new Person('John',
  new Address('123 London Road', 'London', 'UK'));

let jane = JSON.parse(JSON.stringify(john));

jane.name = 'Jane';
jane.address.streetAddress = '321 Angel St';

john.greet();
// this won't work
// jane.greet();

// try a dedicated serializer
let s = new Serializer([Person,Address]); // pain point
jane = s.clone(john);

jane.name = 'Jane';
jane.address.streetAddress = '321 Angel St';

console.log(john.toString());
console.log(jane.toString());