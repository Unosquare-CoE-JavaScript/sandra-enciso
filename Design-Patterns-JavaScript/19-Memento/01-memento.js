/*
MEMENTO
A token/handle representing the system state.
Lets us roll back to the state when the token was generated. May or may not directly expose state information.

Motivation. An object or system goes through changes
There are different ways of navigating those changes
One way is to record every change (Command) and teach a command to 'undo' itself
Another is to simply save snapshots of the system (Memento).
*/
/* Memento is a snapshot of the system. The idea to have a snapshot system is that you can subsequently roll back to that state*/
class Memento //Back account snapshot
{
  constructor(balance) //Is going to store all the state of the banck account at a particular point in time
  {
    this.balance = balance; //Once a memento is constructed, you don't want to modify the state of the memento itself
  }
}

class BankAccount
{
  constructor(balance=0) //Initial balance
  {
    this.balance = balance;
  }

  deposit(amount)
  {
    this.balance += amount;
    return new Memento(this.balance); //Create a memento after modify the balance
  }

  restore(m) //takes a memento and restore it
  {
    this.balance = m.balance;
  }

  toString()
  {
    return `Balance: ${this.balance}`;
  }
}
/*
Whe can not return a memento from a constructor
*/
let ba = new BankAccount(100);
let m1 = ba.deposit(50);
let m2 = ba.deposit(25);
console.log(ba.toString());

// restore to m1
ba.restore(m1);
console.log(ba.toString());

// restore to m2
ba.restore(m2);
console.log(ba.toString());