 /*
A combination lock is a lock that opens after the right digits have been entered.
A lock is preprogrammed with a combination (eg. 12345) and the user is expected to enter this combination to unlock the lock.

The lock has a Status field that indicates the state of the lock. The rules are:
-If the lock has just been locked (or at startup), the status is LOCKED.
-If a digit has been entered, that digit is shown on the screen. As the user enters more digits, they are added to Status.
-If the user has entered the correct sequence of digits, the lock status changes to OPEN
-If the user enters an incorrect sequence of digits, the lock status changes to ERROR
Please implement the CombinationLock class to enable this behavior. Be sure to test both correct and incorrect inputs.
Example:
let cl = new CombinationLock([1,2,3,4,5]);
console.log(cl.status) //LOCKED
cl.enterDigit(1);
console.log(cl.status) //1
cl.enterDigit(2);
console.log(cl.status) //12
cl.enterDigit(3);
console.log(cl.status) //123
cl.enterDigit(4);
console.log(cl.status) //124
cl.enterDigit(5);
console.log(cl.status) //OPEN
 */

class CombinationLock
{
  constructor(combination)
  {
    this.combination = combination;
    this.reset();
  }

  reset()
  {
    this.status = 'LOCKED';
    this.digitsEntered = 0;
    this.failed = false;
  }

  enterDigit(digit)
  {
    if (this.status === 'LOCKED')
      this.status = '';
    this.status += digit.toString();
    if (this.combination[this.digitsEntered] !== digit)
    {
      this.failed = true;
    }
    this.digitsEntered++;

    if (this.digitsEntered === this.combination.length)
      this.status = this.failed ? 'ERROR' : 'OPEN';
  }
}

let cl = new CombinationLock([1,2,3,4,5]);
console.log(cl.status) //LOCKED
cl.enterDigit(1);
console.log(cl.status) //1
cl.enterDigit(2);
console.log(cl.status) //12
cl.enterDigit(3);
console.log(cl.status) //123
cl.enterDigit(4);
console.log(cl.status) //124
cl.enterDigit(5);
console.log(cl.status) //OPEN

/////

let cl = new CombinationLock([1,2,3]);
console.log(cl.status) //LOCKED
cl.enterDigit(1);
console.log(cl.status) //1
cl.enterDigit(2);
console.log(cl.status) //12
cl.enterDigit(5);
console.log(cl.status) //ERROR

/*
Given sufficient complexity, it pays to formally define possible states and events/triggers
Can define
    State entry/exit behaviors
    Action when a particular event causes a transition
    Guard conditions enabling/disabling a transition
    Default action when no transitions are found for an event
*/