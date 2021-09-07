/*
COMMAND
An object which represents an instruction to perform a particular action.
Contains all the information necessary for the action to be taken.

COMMAND MOTIVATION
Ordinary statements are perishale
    Cannot undo member assignmet
    Cannot directly serialize a sequence of actions (calls)
Want an object that represents an operation
Uses: GUI commands, multi-level undo/redo, macro recording and more!
*/

/*
This example simulates a Bank Account which allows deposit and withdraw
*/
class BankAccount
{
  constructor(balance=0) //by default 0
  {
    this.balance = balance;
  }

  deposit(amount) //deposit money and now you balance is different
  {
    this.balance += amount; //increases
    console.log(
      `Deposited ${amount}, balance is now ${this.balance}`
    );
  }

  withdraw(amount) //withdraw money and now you balance is different
  {
    if (this.balance - amount >= BankAccount.overdraftLimit)
    {
      this.balance -= amount; //the balance changes
      console.log(
        `Withdrew ${amount}, balance is now ${this.balance}`
      );
      return true;
    } //If want to withdraw more money than overdraftLimit, then return false
    return false;
  }

  toString()
  {
    return `Balance: ${this.balance}`; //return the actual balance
  }
}
BankAccount.overdraftLimit = -500;

let Action = Object.freeze({ //Actions to do
  'deposit': 1,
  'withdraw': 2
});

class BankAccountCommand //This class is which commands all the bank account movements
{
  constructor(account, action, amount)
  {
    this.account = account;
    this.action = action;
    this.amount = amount;
    this.succeeded = false;
  }

  call() //calls the action we want to do
  {
    switch (this.action)
    {
      case Action.deposit:
        this.account.deposit(this.amount);
        this.succeeded = true;
        break;
      case Action.withdraw:
        this.succeeded = this.account.withdraw(this.amount);
        break;
    }
  }

  undo() //undo the call
  {
    if (!this.succeeded) return;
    switch (this.action)
    {
      case Action.deposit:
        this.account.withdraw(this.amount);
        break;
      case Action.withdraw:
        this.account.deposit(this.amount);
        break;
    }
  }
}

let ba = new BankAccount(100);

let cmd = new BankAccountCommand(ba, Action.deposit, 50);
cmd.call();
console.log(ba.toString());

console.log('Performing undo:');
cmd.undo();
console.log(ba.toString());