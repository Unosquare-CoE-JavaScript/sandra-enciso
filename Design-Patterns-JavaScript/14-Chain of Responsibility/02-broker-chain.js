/*
Implementing Event broker
*/

class Event
{
  constructor()
  {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) //handler is going to be a function that actually gets invoked whenever somebody tries this
  { //You can use this index like a flyweight
    this.handlers.set(++this.count, handler); //count is a kind of index into the map
    return this.count;
  }

  unsubscribe(idx)
  {
    this.handlers.delete(idx);
  }

  fire(sender, args) //Sender. Who asked for the event and arguments
  {
    this.handlers.forEach(function (v, k)
    {
      v(sender, args); //v is the handler
    });
  }
}

let WhatToQuery = Object.freeze({
  'attack': 1,
  'defense': 2
});

class Query
{ //
  constructor(creatureName, whatToQuery, value) //Creature to query, parameter to query, value to query
  {
    this.creatureName = creatureName;
    this.whatToQuery = whatToQuery;
    this.value = value;
  }
}

/*
Event Broker
Is the central object that happens to share the events that we can work
The centralized component exposes some shared objects and everyone can subsequently subscribe or unsubscribe to those events
*/
class Game
{
  constructor()
  {
    this.queries = new Event(); //this event is going to be used specifically for querying data form creatures (name, attack, etc)
  }

  performQuery(sender, query)
  {
    this.queries.fire(sender, query);
  }
}

class Creature
{
  constructor(game, name, attack, defense)
  {
    this.game = game;
    this.name = name;
    this.initial_attack = attack;
    this.initial_defense = defense;
  }

  // Querying the attack value
  get attack()
  {
    let q = new Query(this.name, WhatToQuery.attack,
      this.initial_attack);
    this.game.performQuery(this, q);
    return q.value;
  }

  get defense()
  {
    let q = new Query(this.name, WhatToQuery.defense,
      this.initial_defense);
    this.game.performQuery(this, q);
    return q.value;
  }

  toString()
  {
    return `${this.name}: (${this.attack}/${this.defense})`;
  }
}

class CreatureModifier
{
  constructor(game, creature)
  {
    this.game = game;
    this.creature = creature;
    this.token = game.queries.subscribe(
      this.handle.bind(this) //you have send this.handle
    );
  }

  handle(sender, query)
  {
    // implement in inheritors
  }

  dispose()
  {
    game.queries.unsubscribe(this.token);
  }
}

class DoubleAttackModifier extends CreatureModifier
{
  constructor(game, creature)
  {
    super(game, creature);
  }

  handle(sender, query) {
    if (query.creatureName === this.creature.name &&
        query.whatToQuery === WhatToQuery.attack)
    {
      query.value *= 2;
    }
  }
}

class IncreaseDefenseModifier extends CreatureModifier
{
  constructor(game, creature)
  {
    super(game, creature);
  }

  handle(sender, query)
  {
    if (query.creatureName === this.creature.name &&
        query.whatToQuery === WhatToQuery.defense)
    {
      query.value += 2;
    }
  }
}

let game = new Game();
let goblin = new Creature(game, 'Strong Goblin', 2, 2);
console.log(goblin.toString());

let dam = new DoubleAttackModifier(game, goblin);
console.log(goblin.toString());

let idm = new IncreaseDefenseModifier(game, goblin);
console.log(goblin.toString());
idm.dispose(); //Unsuscribing

dam.dispose();
console.log(goblin.toString());