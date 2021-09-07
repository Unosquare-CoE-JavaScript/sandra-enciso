/*
SOLID.- 
Single responsability principle
Open / closed principles
Liskov Substitution principle
Interface segregation principle
Dependency inversion principle

//////

Dependency Inversion Principle
This principle states that high-level modules shouldn’t depend on low-level modules and they both should depend on abstractions, and abstractions shouldn't depend upon details.
Details should depend upon abstractions.
This means that we shouldn’t have to know any implementation details of our dependencies. If we do, then we violated this principle.
*/

/* This example creates persons and you can add relationships between persons and find their childrens */
let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2
});
  
//class Person only have name property
class Person
{
  constructor(name)
  {
    this.name = name;
  }
}
  
// LOW-LEVEL (STORAGE)

class RelationshipBrowser
{
  constructor()
  {
    if (this.constructor.name === 'RelationshipBrowser')
      throw new Error('RelationshipBrowser is abstract!');
  }

  findAllChildrenOf(name) {}
}

//class Relationships creates relationships between persons
class Relationships extends RelationshipBrowser
{ //This must be abstract
  constructor()
  {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child) //Creates the parent and child relationship
  {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child
    });
    this.data.push({
      from: child,
      type: Relationship.child,
      to: parent
    });
  }


  findAllChildrenOf(name) { //find all the childrens of a parent (name)
    return this.data.filter(r =>
      r.from.name === name &&
      r.type === Relationship.parent
    ).map(r => r.to);
  }
}
  
// HIGH-LEVEL (RESEARCH)

class Research
{
  // constructor(relationships)
  // {
  //   // problem: direct dependence ↓↓↓↓ on storage mechanic
  //   let relations = relationships.data;
  //   for (let rel of relations.filter(r =>
  //     r.from.name === 'John' &&
  //     r.type === Relationship.parent
  //   ))
  //   {
  //     console.log(`John has a child named ${rel.to.name}`);
  //   }
  // }

  constructor(browser)
  {
    for (let p of browser.findAllChildrenOf('John'))
    {
      console.log(`John has a child named ${p.name}`);
    }
  }
}
  
let parent = new Person('John');
let child1 = new Person('Chris');
let child2 = new Person('Matt');

// low-level module
let rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);