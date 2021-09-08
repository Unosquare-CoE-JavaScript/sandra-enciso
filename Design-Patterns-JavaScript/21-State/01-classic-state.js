/*
STATE
A pattern in which the object's behavior is determined by its state. An object transitions from one state to another (something needs to trigger a transition).
A formalized construct which manages state and transitions is called a state machine.
Consider an ordinary telephone
What you do with it depends on the state of the phone/line
    If it's ringing or you want to make a call, you can pick it up
    Phone must be off the hook to talk/make a call
    If you try callig someone, and it's busy, you put the handset down
Changes in state can be explicit or in response to event (Observer patter)
*/

//Monitor for the state changes
class Switch
{
  constructor()
  {
    this.state = new OffState();
  }

  on()
  {
    this.state.on(this);
  }

  off()
  {
    this.state.off(this);
  }
}

class State
{
  constructor()
  {
    if (this.constructor === State)
      throw new Error('abstract!');
  }

  on(sw)
  {
    console.log('Light is already on.');
  }

  off(sw)
  {
    console.log('Light is already off.')
  }
}

class OnState extends State
{
  constructor()
  {
    super();
    console.log('Light turned on.')
  }

  off(sw) { // changing to off
    console.log('Turning light off...');
    sw.state = new OffState();
  }
}

class OffState extends State
{
  constructor()
  {
    super();
    console.log('Light turned off.');
  }

  on(sw) { // If is off, then when changes is on
    console.log('Turning light on...');
    sw.state = new OnState();
  }
}

let sw = new Switch();
sw.on();
sw.off();
sw.off();