/*
You are given a class called Person. The person has two fields: id, and name.
Please implement a PersonFacatory that has a non-static createPerson() method that takes a person's name 
and returns a person initialized with this name and an id.
The id of the person should be set as a 0-based index of the object any instance of PersonFactory has created.
So, the first person any factory makes should have id=0, second id=1 and so on.
*/
class Person
{
  constructor(id, name)
  {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory
{
  createPerson(name)
  {
    return new Person(
        PersonFactory.id++,
        name
    );
  }
}

PersonFactory.id = 0;

/*let np = new PersonFactory();
let sandy = np.createPerson('Sandy');
let alberto = np.createPerson('Alberto');

console.log(sandy);
console.log(alberto);*/