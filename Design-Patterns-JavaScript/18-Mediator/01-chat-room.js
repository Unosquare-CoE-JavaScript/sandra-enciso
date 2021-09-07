/*
MEDIATOR
A component that facilitates communication between other components without them necessarily being aware of each other
or having direct (reference) access to each other.
Motivation. Components may go in and out of a system at any time
It makes no sense for them to have direct references to one another
solution: Have them all refer to some central component that facilitates communication
*/

/*
Example simulating a chatroom
*/

class Person
{
    constructor(name) {
        this.name = name;
        this.chatLog = []; //a log of all the messages that this particular participant has actually seen
    }

    //receive messages
    receive(sender, message) //Sender -> Who is sending this person the message and the message itself 
    {
        let s = `${sender}: '${message}'`;
        console.log(`[${this.name}'s chat session] ${s}`);
        this.chatLog.push(s);
    }

    //say something to the room
    say(message) {
        this.room.broadcast(this.name, message);
    }

    //say something private to somebody
    pm(who, message)
    {
        this.room.message(this.name, who, message);
    }
}

//Central component
class ChatRoom
{
    constructor()
    {
        this.people = []; //Al the people inside the chat room
    }

    /*
    Broadcast a joining message so that everybody can see that a paricular person has joined the chat
    */
    broadcast(source, message) // Source -> is who is breadcasting the message. Message -> the message
    {
        for (let p of this.people)
        if (p.name !== source) //If the person is not the source, then receive the message
            p.receive(source, message);
    }

    //specify the peson that actually is joining
    join(p)
    {
        let joinMsg = `${p.name} joins the chat`;
        this.broadcast('room', joinMsg);
        p.room = this;
        this.people.push(p);
    }

    //Specify the source, the destination and the message to send
    message(source, destination, message)
    {
        for (let p of this.people)
        if (p.name === destination)
            p.receive(source, message);
    }
}

let room = new ChatRoom();

let john = new Person('John');
let jane = new Person('Jane');

room.join(john);
room.join(jane);

john.say('hi room');
jane.say('oh, hey john');

let simon = new Person('Simon');
room.join(simon);
simon.say('hi everyone!');

jane.pm('Simon', 'glad you could join us!');