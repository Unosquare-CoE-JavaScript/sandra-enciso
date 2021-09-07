/*

*/
//Event class that we also used in the chain of responsability broke a chain implementation -> Observer design pattern.
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

/* A class that storages when a player scored a goal */
class PlayerScoredEventArgs
{
    constructor(playerName, goalsScoredSoFar) {
        this.playerName = playerName;
        this.goalsScoredSoFar = goalsScoredSoFar;
    }

    print()
    {
        console.log(`${this.playerName} has scored `
        + `their ${this.goalsScoredSoFar} goal`);
    }
}

/* Our mediator is the class Game. */
class Game {
    constructor() { //Specify a single event as kind of share shared object that everyone
        this.events = new Event();
    }
}

/* A football player */
class Player
{
    constructor(name, game)
    {
        this.name = name;
        this.game = game;
        this.goalsScored = 0; //goals that player scored
    }

    score()
    {
        this.goalsScored++;
        let args = new PlayerScoredEventArgs(this.name, this.goalsScored);
        this.game.events.fire(this, args); //calls the mediator and sends the information to fire the evet
    }
}

class Coach
{
    constructor(game)
    {
        this.game = game;

        game.events.subscribe(function (sender, args)
        {
            if (args instanceof PlayerScoredEventArgs
                && args.goalsScoredSoFar < 3)
            {
                console.log(`coach says: well done, ${args.playerName}`);
            }
        });
    }
}

let game = new Game();
let player = new Player('Sam', game);
let coach = new Coach(game);

player.score();
player.score();
player.score();