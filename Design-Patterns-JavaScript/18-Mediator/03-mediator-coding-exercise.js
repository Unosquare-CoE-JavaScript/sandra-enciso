/*
Mediator Coding Exercise
Our system has any number of instances of Participant classes. Each Participant has a value integer attribute, initially zero.
A participant can say() a particular value, which is broadcast to all other participants. At this point in time, every other participant
is obliged to increase their value by the value being broadcast.
Example:
-Two participants start with values 0 and 0 respectively
-Participant 1 broadcast the value 3. We now have Participant1 value = 0, Participant2 value = 3.
-Participant 2 broadcast the value 2. We now have Participant1 value = 2, Participant2 value = 3
*/

class Event
{
    constructor()
    {
        this.handlers = new Map();
        this.count = 0;
    }

    subscribe(handler)
    {
        this.handlers.set(++this.count, handler);
        return this.count;
    }

    unsubscribe(idx)
    {
        this.handlers.delete(idx);
    }

    fire(sender, args)
    {
        this.handlers.forEach(function (v, k)
        {
            v(sender, args);
        });
    }
}

class Mediator
{
    constructor()
    {
        this.alert = new Event();
    }

    broadcast(sender, n)
    {
        this.alert.fire(sender, n);
    }
}

class Participant
{
    constructor(mediator)
    {
        this.mediator = mediator;
        this.value = 0;
        mediator.alert.subscribe(
            this.alert.bind(this)
        );
    }

    alert(sender, n)
    {
        if (sender !== this)
            this.value += n;
    }

    say(n)
    {
        this.mediator.broadcast(this, n);
    }
}

let mediator = new Mediator();
let p1 = new Participant(mediator);
let p2 = new Participant(mediator);

console.log(p1.value); //0
console.log(p2.value); //0

p1.say(2);

console.log(p1.value); //0
console.log(p2.value); //2

p2.say(4);

console.log(p1.value); //4
console.log(p2.value); //2

/*
SUMMARY
Create the mediator and have each object in the system refer to it
Mediator engages in bidirectional communication with its connected components
Mediator has functions the components can call
Components have functions the mediator can call
*/