/*

*/
class Stuff
{
  constructor()
  {
    this.a = 11;
    this.b = 22;
  }

  /*Iterator is like a function, is something that allows us to define the default iterator for the stuff class.
  */
  // default iterator
  [Symbol.iterator]()
  {
    let i = 0;
    let self = this;
    return {
      next: function() //retuns a function called next
      {
        return {
          done: i > 1, //A flag indication whether or not we are done with the iteration. I only want to return 2 elements (a and b)
          value: self[i++ === 0 ? 'a' : 'b'] //the next elements you want to return. Uses the post increment (i++) to do the comparasion and then increment
          /* self is the elements (this) to iterate*/
        }; 
      }
    }
  }

  //The same iterator but using getter
  get backwards()
  {
    let i = 0;
    let self = this;
    return {
      next: function()
      {
        return {
          done: i > 1,
          value: self[i++ === 0 ? 'b' : 'a']
        };
      },
      // make iterator iterable
      [Symbol.iterator]: function() { return this; }
    }
  }
}

let values = [100, 200, 300];
//Acces to the values using the index i
for (let i in values)
{
  console.log(`Element at pos ${i} is ${values[i]}`);
}

//Goes througth the values
for (let v of values)
{
  console.log(`Value is ${v}`);
}

let stuff = new Stuff();
for (let item of stuff)
  console.log(`${item}`);

for (let item of stuff.backwards)
  console.log(`${item}`);