/*
A creature is walking through the dungeon. It is expected to have the following attributes.
attack is its attack value
healt is its health value
alive indicates whether the creature is alive or not
The creature is part of a game that involvs traps. When a creature springs a trap, two things can happen:
In a ConstantDamageStrategy, the creature's health is reduced by exactly 1(one) point. So if a creature had 5 health and it springs a trap, it now has 4 health
In a GrowingDamageStrategy, each spring trap does 1 more damage to the creature than the previous one. So the creature takes 1 damage to the creature than the previous one.
So the creature takes 1 damage on the first trap, 2 on the second, 3 on the third, and so on.
Please help complete the implementation of both Creature and associated strategies using the provided implementation.
*/

class Creature
{
  constructor(attack, health)
  {
    this.attack = attack;
    this.health = health;
    this.alive = this.health > 0;
    this.id = Creature.count++;
  }
}
Creature.count = 0;

class Game
{
  constructor(damageStrategy)
  {
    this.damageStrategy = damageStrategy;
  }

  springTrapOn(creature)
  {
    this.damageStrategy.damage(creature);
    return creature.alive;
  }
}

class DamageStrategy
{
  damage(creature)
  {
    if (creature.health <= 0)
    {
      creature.alive = false;
    }
  }
}

class ConstantDamageStrategy extends DamageStrategy
{
  damage(creature)
  {
    creature.health--;
    super.damage(creature);
  }
}

class GrowingDamageStrategy extends DamageStrategy
{
  damage(creature)
  {
    if (GrowingDamageStrategy.impact[creature.id])
    {
      let dmg = ++GrowingDamageStrategy.impact[creature.id];
      creature.health -= dmg;
    }
    else
    {
      creature.health--;
      GrowingDamageStrategy.impact[creature.id] = 1;
    }

    super.damage(creature);
  }
}
GrowingDamageStrategy.impact = {};

describe('strategy', function()
{
  it('creature with ordinary strategy', function()
  {
    let cg = new Game(new ConstantDamageStrategy());
    let c = new Creature(1, 3);

    expect(c.health).toEqual(3);
    expect(c.alive).toEqual(true);
    cg.springTrapOn(c);
    expect(c.health).toEqual(2);
    expect(c.alive).toEqual(true);
    cg.springTrapOn(c);
    expect(c.health).toEqual(1);
    expect(c.alive).toEqual(true);
    cg.springTrapOn(c);
    expect(c.health).toEqual(0);
    expect(c.alive).toEqual(false);
  });

  it('creature with growing strategy', function()
  {
    let cg = new Game(new GrowingDamageStrategy());
    let c = new Creature(1, 3);

    expect(c.health).toEqual(3);
    expect(c.alive).toBe(true);

    cg.springTrapOn(c);
    expect(c.health).toEqual(2);
    expect(c.alive).toBe(true);

    cg.springTrapOn(c);
    expect(c.health).toEqual(0);
    expect(c.alive).toBe(false);
  });

  it('two creatures with their own deprecation', function() {
    console.log('two creatures are used here...');
    let cg = new Game(new GrowingDamageStrategy());
    let c1 = new Creature(1, 3);
    let c2 = new Creature(1, 3);

    console.log('springing a trap on both creatures');
    console.log('expecting each creature to be damaged by 1');
    cg.springTrapOn(c1);
    cg.springTrapOn(c2);

    expect(c1.health).toEqual(2);
    expect(c1.alive).toBe(true);
    expect(c2.health).toEqual(2);
    expect(c2.alive).toBe(true);

    cg.springTrapOn(c2);
    expect(c2.health).toEqual(0);
    expect(c2.alive).toBe(false);
  });
});

/*
SUMMARY
Define an algorithm at a high level
Define the interface you expect each strtegy to follow
Provide for dynamic composition of strategies in the resulting object
*/