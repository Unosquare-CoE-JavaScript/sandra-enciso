
class Event
{
  constructor()
  {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler)
  {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(idx)
  {
    this.handlers.delete(idx);
  }

  // 1) who fired the event?
  // 2) additional data (event args)
  fire(sender, args)
  {
    this.handlers.forEach(
      (v, k) => v(sender, args)
    );
  }
}

/* Stores the infomation when age changes */
class PropertyChangedArgs
{
  constructor(name, newValue)
  {
    this.name = name;
    this.newValue = newValue;
  }
}

/* Notify when changes the person's age */
class Person
{
  constructor(age)
  {
    this._age = age;
    this.propertyChanged = new Event(); //handle when the age change
  }

  get age() { return this._age; }

  set age(value)
  {
    if (!value || this._age === value)
      return;
    this._age = value;
    this.propertyChanged.fire( //fire the handle
      this,
      new PropertyChangedArgs('age', value)
    );
  }
}

/* Allows you to register if age is greather or equal to 13 */
class RegistrationChecker
{
  constructor(person)
  {
    this.person = person;
    this.token = person.propertyChanged.subscribe(
      this.age_changed.bind(this)
    );
  }

  age_changed(sender, args)
  {
    if (sender === this.person && args.name === 'age')
    {
      if (args.newValue < 13)
      {
        console.log(`Sorry, you are still to young`);
      } else {
        console.log(`Okay, you can register`);
        sender.propertyChanged.unsubscribe(this.token); //Unsubscribe because is older than 13 years
      }
    }
  }
}

let person = new Person('John');
let checker = new RegistrationChecker(person);
for (let i = 10; i < 20; ++i)
{
  console.log(`Changing age to ${i}`);
  person.age = i; //
}