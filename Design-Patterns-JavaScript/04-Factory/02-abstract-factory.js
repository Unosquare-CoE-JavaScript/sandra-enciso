/* The idea behind the abstract fatory design pattern is that you can have a hierarchu of objects and you can have a related hierarchy of types 
and then you can group the factories*/
/*
Hot drink factory example: Factory to create Tea and Coffe
*/
const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const async = require('async');

class HotDrink
{
  consume() {} //in JS you dont have abstract members, so if you want something that the inheritors can implement, you can leave it blank, but you cant really say this is abstract
}

class Tea extends HotDrink
{
  consume() { //overrides the consume method
    console.log('This tea is nice with lemon!'); //instead of call the base class
  }
}

class Coffee extends HotDrink
{
  consume()  //overrides the consume method
  {
    console.log(`This coffee is delicious!`); //instead of call the base class
  }
}

class HotDrinkFactory
{
  prepare(amount) { /* abstract */ }
}

class TeaFactory extends HotDrinkFactory
{
  prepare(amount) { //Overrides the prepare
    console.log(`Put in tea bag, boil water, pour ${amount}ml`); //instead of call the base class
    return new Tea();
  }
}

class CoffeeFactory extends HotDrinkFactory
{
  prepare(amount) {
    console.log(`Grind some beans, boil water, pour ${amount}ml`); //instead of call the base class
    return new Coffee();
  }
}

let AvailableDrink = Object.freeze({
  coffee: CoffeeFactory,
  tea: TeaFactory
});

class HotDrinkMachine
{
  constructor()
  {
    this.factories = {};
    for (let drink in AvailableDrink) /// goes through the driks and then construct the new factory
    {
      this.factories[drink] = new AvailableDrink[drink]();
    }
  }

  makeDrink(type) //Prepares the drink
  {
    switch (type)
    {
      case 'tea':
        return new TeaFactory().prepare(200);
      case 'coffee':
        return new CoffeeFactory().prepare(50);
      default:
        throw new Error(`Don't know how to make ${type}`);
    }
  }

  interact(consumer) //this method allows to the user to enter the drink which want to dink and then call the correspondent factory
  {
    rl.question('Please specify drink and amount ' +
      '(e.g., tea 50): ', answer => {
      let parts = answer.split(' ');
      let name = parts[0];
      let amount = parseInt(parts[1]);
      let d = this.factories[name].prepare(amount);
      rl.close();
      consumer(d);
    });
  }
}

let machine = new HotDrinkMachine();
// rl.question('which drink? ', function(answer)
// {
//   let drink = machine.makeDrink(answer);
//   drink.consume();
//
//   rl.close();
// });
machine.interact(
  function (drink) {
    drink.consume();
  }
);