/*
Implement the Account.process() method to process different account commands.
The rules are obvious:
-success indicates whether the operation was successful
-You can only withdraw money if you have enough in your account
*/

let Action = Object.freeze({
    deposit: 0,
    withdraw: 1
  });
  
  class Command
  {
    constructor(action, amount)
    {
      this.action = action;
      this.amount = amount;
      this.success = false;
    }
  }
  
  class Account
  {
    constructor(amount = 0)
    {
      this.balance = amount;
    }
  
    process(cmd)
    {
      switch (cmd.action)
      {
        case Action.deposit:
          this.balance += cmd.amount;
          cmd.success = true;
          break;
        case Action.withdraw:
          cmd.success = this.balance >= cmd.amount;
          if (cmd.success) this.balance -= cmd.amount;
          break;
      }
    }
  }

let na = new Account(100);
let nc = new Command(Action.withdraw, 50);
na.process(nc);
console.log(na.balance); //50
/*
SUMMARY
Encapsulate all details of an operation in a separate object
Define instruction for applying the command (either in the command itself, or elsewhere)
Optionally difine instructions for undoing the command
Can create composite commands (aka macros)
*/