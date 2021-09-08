/*
You are given a game scenario with clasess Goblin and GoblinKing. Please implement the following rules:
-A goblin has base 1 attack/1 defense (1/1), a goblin king is 3/3.
-When the Goblin King is in play, every other globin gets +1 Attack.
-Goblin get +1 to Defense for every other Goblin in play (a GoblinKing is a Goblin!).
Example:
-Supose you have 3 ordinary goblins in play. Each one is a 1/3 (1/1 + 0/2 defense bonus)
-A goblin king comes into play. Now every goblin is a 2/4 (1/1 + 0/3 defense bonus from each other +1/0 from goblin king)
The state of all the goblins has to be consistent as goblins are added and removed from the game.
Example
let game = new Game();
let goblin = new Goblin(game);
expect(goblin.attack).toEqual(1);
expect(goblin.defense).tpEqual(1);
Note: creature removal (unsubscription) does not need to be implemented.
*/

let WhatToQuery = Object.freeze({
    'attack': 1,
    'defense': 2
});

class Query
{
    constructor(whatToQuery, result)
    {
        this.whatToQuery = whatToQuery;
        this.result = result;
    }
}
  
class Goblin
{
    constructor(game, baseAttack=1, baseDefense=1)
    {
        this.game = game;
        game.creatures.push(this);
        this.baseAttack = baseAttack;
        this.baseDefense = baseDefense;
    }

    handleQuery(source, query) // q = 1, 0
    {
        if (source === this)
        {
            switch (query.whatToQuery)
            {
                case WhatToQuery.attack:
                query.result += this.baseAttack;
                break;
                case WhatToQuery.defense:
                query.result += this.baseDefense;
                break;
            }
        }
        else if (query.whatToQuery === WhatToQuery.defense)
        {
            query.result++;
        }
    }

    get defense()
    {
        let q = new Query(WhatToQuery.defense, 0);
        for (let c of this.game.creatures)
        c.handleQuery(this, q);
        return q.result;
    }

    get attack()
    {
        let q = new Query(WhatToQuery.attack, 0); //1, 0
        for (let c of this.game.creatures)
        c.handleQuery(this, q);
        return q.result;
    }
}
  
class GoblinKing extends Goblin
{
    constructor(game)
    {
    super(game, 3, 3);
    }

    handleQuery(source, query) {
    if (source !== this && query.whatToQuery === WhatToQuery.attack)
    {
        query.result++;
    }
    super.handleQuery(source, query);
    }
}
  
class Game
{
    constructor()
    {
    this.creatures = [];
    }
}

let game = new Game();
let goblin = new Goblin(game);
console.log(goblin.attack); //1
console.log(goblin.defense); //1

let goblin2 = new Goblin(game);
console.log(goblin.attack); //1
console.log(goblin.defense); //2

let goblin3 = new GoblinKing(game);
console.log(goblin.attack); //2
console.log(goblin.defense); //3

/*
Chain of Responsibility can be implemented as a chain of references or a centralized construct
Enlist objects in the chain, possibly controlling their order/priority
In a linked-list implementation, one menber can impide further procesing
Support removal of objects from the chain (lifetime control),
*/