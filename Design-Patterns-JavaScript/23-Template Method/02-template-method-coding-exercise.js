/*
Imagine a typical collectible card game which has cards representing creatures. 
Each creature has two values: Attack and Health. Creatures can fight each other, dealing their Attack damage, thereby reducing their opponent's healt.
The class CardGame implements the logic for two creatures fighting one another. However, the exact mechanics of how damage is dealt is different.
-TemporaryCardDamage: In some games (eg Magic: the Gathering), unless the creature has been killed, its health returns to the original value at the end of combat.
-PermanentCardDamage: In other games (eg Hearthstone) health damage persists.
You are asked to implement classes TemporaryCardDamageGame and PermanentCardDamageGame that would allow us to simulate combat between creatures.
Some examples:
-With temporary damage, creatures 1/2 and 1/3 can never kill one another. With permanent damage, second creature will win after 2 rounds of combat.
-With either temporary or permanent damage,two 2/2 creatures kill one another.
*/

class Creature
{
  constructor(attack, health)
  {
    this.attack = attack;
    this.health = health;
  }
}

class CardGame
{
  constructor(creatures)
  {
    this.creatures = creatures;
  }

  // returns index of winner if there's a winner
  // returns -1 if there's no winner (both alive or both dead)
  combat(creature1index, creature2index)
  {
    let first = this.creatures[creature1index];
    let second = this.creatures[creature2index];
    this.hit(first, second);
    this.hit(second, first);
    let firstAlive = first.health > 0;
    let secondAlive = second.health > 0;
    if (firstAlive === secondAlive) return -1;
    return firstAlive ? creature1index : creature2index;
  }

  hit(attacker, defender)
  {
    throw new Error('Please implement this in inheritors');
  }
}

class TemporaryCardDamageGame extends CardGame
{
  constructor(creatures) {
    super(creatures);
  }

  hit(attacker, defender) {
    let oldHealth = defender.health;
    defender.health -= attacker.attack;
    if (defender.health > 0)
      defender.health = oldHealth;
  }
}

class PermanentCardDamageGame extends CardGame
{
  constructor(creatures) {
    super(creatures);
  }

  hit(attacker, defender) {
    defender.health -= attacker.attack;
  }
}

let c1 = new Creature(1, 2);
let c2 = new Creature(1, 2);
let game = new TemporaryCardDamageGame([c1, c2]);
console.log(game.combat(0, 1)); //-1
console.log(game.combat(0, 1)); //-1

let c1 = new Creature(1, 1);
let c2 = new Creature(2, 2);
let game = new TemporaryCardDamageGame([c1, c2]);
console.log(game.combat(0, 1)) //1

let c1 = new Creature(2, 2);
let c2 = new Creature(2, 2);
let game = new TemporaryCardDamageGame([c1, c2]);
console.log(game.combat(0, 1)) //-1

let c1 = new Creature(1, 2);
let c2 = new Creature(1, 3);
let game = new PermanentCardDamageGame([c1, c2]);
console.log(game.combat(0, 1)); //-1
console.log(game.combat(0, 1));//1

/*
SUMMARY
Define an algorithm at a high level
Define constituent parts as empty methods/properties
Inherit the algorith class, providing necessary overrides
*/