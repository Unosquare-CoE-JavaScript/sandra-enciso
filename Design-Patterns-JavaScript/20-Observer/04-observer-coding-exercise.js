/*
Imagine a game where one or more rats can attack a player. Each individual rat has an initial attack value of 1.
However, rats attack as a swarm, so each rat's attack value is actually equal to the total number of rats in play.
Given that a rat enters play through the initializar and leaves play (dies) via its die() method, please implement the Game and Rat classes so that,
at any point in the game, the attack value of a rat is always consistent.
Here's a sample:
let game = new Game();
let rat = new Rat(game);
let rat2 = new Rat(game);
expect(rat.attack).toEqual(2);
expect(rat2.attack).toEqual(2);
*/

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

  fire(sender, args)
  {
    this.handlers.forEach(function (v, k)
    {
      v(sender, args);
    });
  }
}

class Game
{
  constructor()
  {
    this.ratEnters = new Event();
    this.ratDies = new Event();
    this.notifyRat = new Event();
  }

  // the following is a set of utility methods
  // they are not strictly necessary but some of them
  // omit extra parameters that we do not need

  // the sender is the rat that enters
  fireRatEnters(sender)
  {
    this.ratEnters.fire(sender, null);
  }

  // the sender is the rat that died
  fireRatDies(sender)
  {
    this.ratDies.fire(sender, null);
  }

  fireNotifyRat(sender, whichRat)
  {
    this.notifyRat.fire(sender, whichRat)
  }
}

class Rat
{
  constructor(game)
  {
    this.game = game;
    this.attack = 1;
    game.ratEnters.subscribe(
      this.handleRatEnters.bind(this) //bind the rat
    );
    game.ratDies.subscribe(
      this.handleRatDies.bind(this)
    );
    game.notifyRat.subscribe(
      this.handleNotifyRat.bind(this)
    );
    game.fireRatEnters(this);
  }

  handleRatEnters(sender, args)
  {
    if (sender !== this)
    {
      this.attack++;
      this.game.fireNotifyRat(this, sender);
    }
  }

  handleRatDies(sender, args)
  {
    this.attack--;
  }

  handleNotifyRat(sender, whichRat)
  {
    if (whichRat === this)
      this.attack++;
  }

  die()
  {
    this.game.fireRatDies(this);
  }
}

let game = new Game();
let rat = new Rat(game);
console.log(rat.attack)//1

let game = new Game();
let rat = new Rat(game);
let rat2 = new Rat(game);
console.log(rat.attack)//2
console.log(rat2.attack)//2

/////////

let game = new Game();

let rat = new Rat(game);
console.log(rat.attack)//1

let rat2 = new Rat(game);
console.log(rat.attack); //2
console.log(rat2.attack); //2

let rat3 = new Rat(game);
console.log(rat.attack) //3
console.log(rat2.attack) //3
console.log(rat3.attack) //3
rat3.die()

console.log(rat.attack); //2
console.log(rat2.attack); //2

/*
SUMMARY
Observer is an intrusive approach: an observable must provide an event to subscribe to
Subscription and unsubscription handled with addition/removal of items in a list
Property notifications are easy;
dependent property notifications are tricky
*/