/*
OBSERVER
An observer is an object that wishes to be informed about events happening in the system.
The entity generating the events is an observable.
Motivation. We need to be informed when a certain things happen
    Object's property changes
    Object does something
    Some external evet occurs
We want to listen to events and be notified when they occur
    Notifications should include useful data
Want to unsubscribe from events if we're no longer interested
*/

/*
Building a reusable component that allow certain object to notify other objects that something is happening
*/
//Event is somethig you want to observe
class Event
{
  constructor()
  {
    this.handlers = new Map(); //Uses map instead an array to allow unsuscribe to the event
    this.count = 0;
  }

  /* The handler is a callback */
  subscribe(handler)
  {
    this.handlers.set(++this.count, handler); //count - The numer of the susbcriber
    return this.count;
  }

  unsubscribe(idx)
  {
    this.handlers.delete(idx);
  }

  // 1) who fired the event? sender
  // 2) additional data (event args)
  fire(sender, args)
  {
    this.handlers.forEach(
      (v, k) => v(sender, args)
    );
  }
}

/* Stores the information to pass when handle */
class FallsIllArgs
{
  constructor(address)
  {
    this.address = address;
  }
}

class Person
{
  constructor(address)
  {
    this.address = address;
    this.fallsIll = new Event();
  }

  //If the person falls ill, then get a notification
  catchCold()
  {
    this.fallsIll.fire(
      this, //the sender
      new FallsIllArgs(this.address)
    );
  }
}

let person = new Person('123 London Road');
let sub = person.fallsIll.subscribe((s, a) => { //New subscription
  console.log(`A doctor has been called `+
    `to ${a.address}`);
});
person.catchCold();
person.catchCold();

person.fallsIll.unsubscribe(sub);
person.catchCold();