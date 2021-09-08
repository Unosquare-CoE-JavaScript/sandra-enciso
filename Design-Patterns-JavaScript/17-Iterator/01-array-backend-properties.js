/*
ITERATOR
An object that facilitates the transversal of a data structure
Motivation
Iteration (transversal) is a core functionality of various data structures
An interator is a class that facilitates the traversal
    Keeps a reference to the current element
    Knows how to move to a different element
    Knows when it's done and there are no elements to move to
JavaScript supports this through
    Symbol.iterator member that returns
    An intertator object with a function called next() that
    returns an object containing:
        The value being iterated
        The done flag indicating whether iteration is finished
    An iterator object itself can also be made iterable
*/

class Creature {
    /*
    The Array() constructor is used to create Array objects.
    The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
    */
    constructor() {
        // this.strength = this.agility
        //   = this.intelligence = 10;
        this.stats = new Array(3).fill(10); //length = 3. All the values of the array are 10
    }
    //Array back properties

    //strength is at position 0
    get strength() {
        return this.stats[0];
    }

    set strength(value) {
        this.stats[0] = value;
    }
    //agility is at position 1
    get agility() {
        return this.stats[1];
    }

    set agility(value) {
        this.stats[1] = value;
    }
    //intelligence is at position 2
    get intelligence() {
        return this.stats[2];
    }

    set intelligence(value) {
        this.stats[2] = value;
    }

    get sumOfStats() {
        return this.stats.reduce((x, y) => x + y, 0);
    }

    //Here returns the average value of the stats
    get averageStat() {
        return this.sumOfStats / this.stats.length;
    }

    //Returns the max value of the stats
    get maxStat() {
        return Math.max(...this.stats); //use the spread
    }

    // get sumOfStats()
    // {
    //   return this.strength + this.agility
    //     + this.intelligence;
    // }
    //
    // get averageStat()
    // {
    //   return sumOfStats() / 3.0; // magic number
    // }
    //
    // get maxStat()
    // {
    //   return Math.max(this.strength, this.agility,
    //     this.intelligence);
    // }
}
  
let creature = new Creature();
creature.strength = 10;
creature.agility = 11;
creature.intelligence = 15;
console.log(`Creature has average stat ${creature.averageStat}, `
    + `max stat = ${creature.maxStat}, `
    + `sum of stats = ${creature.sumOfStats}.`);