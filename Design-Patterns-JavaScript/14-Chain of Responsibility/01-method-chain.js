/*
CHAIN OF RESPONSIBILITY
A chain of components who all get a chance to process a command or a query, optionally having default processing implementation
an ability to terminate the processing chain.
*/

/*
The implementation of the chain of responsability that we're going to do here is called a method chain 
*/

//Create a creature with name, attack and defense
class Creature {
    constructor(name, attack, defense) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
    }

    toString() {
        return `${this.name} (${this.attack}/${this.defense})`;
    }
}

/*This is our base class */
class CreatureModifier
{
    constructor(creature)
    {
        this.creature = creature;
        this.next = null; //linked list
        //Is a hint as to what's going on next, is the next modifier in a sequence of modifiers
    }

    /*
    The add() method appends a new element with a specified value to the end of a Set object.
    */

    //add additional modifiers into the end of the list
    add(modifier)
    {
        if (this.next) this.next.add(modifier);
        else this.next = modifier;
    }

    //To aplly the creature modifiers
    handle()
    {
        if (this.next) this.next.handle();
    }
}
  
class NoBonusesModifier extends CreatureModifier
{
    constructor(creature)
    {
    super(creature);
    }

    handle()
    {
    console.log('No bonuses for you!');
    }
}
  
class DoubleAttackModifier extends CreatureModifier
{
    constructor(creature)
    {
        super(creature);
    }

    handle()
    {
        console.log(`Doubling ${this.creature.name}'s attack`);
        this.creature.attack *= 2; //Doubling the creature's attack
        super.handle(); //Then check for another modifier
    }
}
  
class IncreaseDefenseModifier extends CreatureModifier
{
    constructor(creature)
    {
        super(creature);
    }

    handle() {
        if (this.creature.attack <= 2)
        {
        console.log(`Increasing ${this.creature.name}'s defense`);
        this.creature.defense++;
        }
        super.handle();
    }
}
  
let goblin = new Creature('Goblin', 1, 1);
console.log(goblin.toString());

//Allows to modify the properties of goblin creature
let root = new CreatureModifier(goblin);

//Negate the entire chain
//root.add(new NoBonusesModifier(goblin));

root.add(new DoubleAttackModifier(goblin));
//root.add(new DoubleAttackModifier(goblin));

root.add(new IncreaseDefenseModifier(goblin));

// eventually...
root.handle(); //Apply the modifiers
console.log(goblin.toString());

/*
COMMAND QUERY SEPARATION
We separate all the invocations into two different concepts, which are called query and command.
-Command = asking for an action or change (eg. please set your attack value to 2).
-Query = asking for information (eg. please give me your attack value);
-CQS = having a separate means of sending commands and queries to eg. direct field access.
*/