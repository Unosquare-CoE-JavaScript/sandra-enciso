/*
You are given two clasess, Bird and Lizar, that both take the creature's age and allow the creature to fly/crawl (or not) depending on its age.
Please crete a decorator called Dragon that acts as both a bird and a lizard, ie. it has an age value and can both fly() and crawl(),
reusing the original classes functionality.
*/

class Bird
{
  constructor(age=0) //the age is 0 by default
  {
    this.age = age;
  }

  fly() //a bird can fly
  {
    return this.age < 10 ? 'flying' : 'too old';
  }
}

class Lizard
{
  constructor(age=0)
  {
    this.age = age;
  }

  crawl() //a lizard can crawl
  {
    return this.age > 1 ? 'crawling' : 'too young';
  }
}

class Dragon {
    constructor(age = 0) {
        this._age = age; // if I modify the age of the dragon, it is not modifying bird's and lizard's ones.
        this.birdObj = new Bird(this._age);
        this.lizardObj = new Lizard(this._age);
    }

    set age(value) {
        this._age = value;
        this.birdObj.age = value;
        this.lizardObj.age = value;
    }

    fly() {
        return this.birdObj.fly();
    }

    crawl() {
        return this.lizardObj.crawl()
    }
}

let dragon = new Dragon(8);

console.log(dragon.fly());
console.log(dragon.crawl());

/*
SUMMARY
A decorator keeps the reference to the decorated object(s)
Adds utility fields and methods to augment the object's features
May or may not forward calls to the underlying object
*/