/*
PROXY 
A class that functions as an interface to a particular resource.
That resource may be remote, expensive to construct, or may require loggin or some other added functionality
Motivation
You are calling foo.Bar()
This assumes that foo is in the same procces as Bar()
What if, later onm, you want to put all Foo-related operations into a separate process
    Can you avoid changing your code?
Proxy to the rescue!
    Same interface, entirely different behavior
This is called a communication proxy
    Other types: loggin, virtual, guarding
*/

/*
A value proxy is the simplest kind of proxy that you can build because it's a proxy over a simple value type
*/

class Percentage
{
  constructor(percent)
  {
    this.percent = percent; // 0 to 100
  }

  //string value
  toString()
  {
    return `${this.percent}%`;
  }

  //numeric value
  valueOf()
  {
    return this.percent/100;
  }
}

let fivePercent = new Percentage(5);
console.log(`${fivePercent} of 50 is ${50*fivePercent}`);