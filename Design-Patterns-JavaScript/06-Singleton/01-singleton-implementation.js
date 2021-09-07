/*
SINGLETON

A component which is instantiated only once.

For some components it only makes sense to have one in the system
    Database repository
    Object factory
Eg. the constructor call is expensive
    We want initialization to only happen once
    We provide everyone with the same instance
Want to prevent anyone creating additional copies
*/

/*
First of all, we're going to ask the constructor for that instance, if that instance exist, we're going to return it. Otherwise we are going to assign it.
*/
class Singleton {
    constructor()
    {
      const instance = this.constructor.instance;
      if (instance) { // if have an instance, then return it
        return instance;
      }
  
      this.constructor.instance = this; //if don't have an instance, assign an instance from the current object (is the first time that we run the constructor)
    }
  
    foo() {
      console.log('Doing something...')
    }
  }
  
  let s1 = new Singleton(); // s1 it the instance that will always be returned.
  let s2 = new Singleton();
  console.log('Are they identical? ' + (s1 === s2)); //true
  s1.foo();