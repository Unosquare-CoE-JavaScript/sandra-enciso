class Memento
{
  constructor(balance)
  {
    this.balance = balance;
  }
}
/* Stores every change we do to the Bank Account */
class BankAccount
{
  constructor(balance = 0) {
    this.balance = balance;
    this.changes = [new Memento(balance)]; //Array of changes which contain the initial state of the constructor
    this.current = 0; //current memento inital(0)
  }

  deposit(amount)
  {
    this.balance += amount;
    let m = new Memento(this.balance);
    this.changes.push(m); //push to the changes array
    this.current++;
    return m;
  }

  restore(m)
  {
    if (m)
    { //saves the restore (memento) to the array of mementos
      this.balance = m.balance;
      this.changes.push(m);
      this.current = this.changes.count - 1;
    }
  }

  //Changing to the previous memento
  undo()
  {
    if (this.current > 0) //the pointer must be 0 because if pointer is 0, doesn't exist any memento
    {
      let m = this.changes[--this.current]; 
      this.balance = m.balance;
      return m;
    }
    return null;
  }

  //Changing to the next memento
  redo()
  {
    if (this.current+1 < this.changes.length) //if has a point to the right side to restore
    {
      let m = this.changes[++this.current];
      this.balance = m.balance;
      return m;
    }
    return null;
  }

  toString()
  {
    return `Balance: $${this.balance}`;
  }
}

let ba = new BankAccount(100);
ba.deposit(50);
ba.deposit(25);
console.log(ba.toString());

ba.undo();
console.log(`Undo 1: ${ba.toString()}`);
ba.undo();
console.log(`Undo 2: ${ba.toString()}`);
ba.redo();
console.log(`Redo 2: ${ba.toString()}`);