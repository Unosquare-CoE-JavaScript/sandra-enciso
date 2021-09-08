/*
SOLID.- 
Single responsability principle
Open / closed principles
Liskov Substitution principle
Interface segregation principle
Dependency inversion principle

//////

A Single Responsibility Principle
The single responsibility principle says that each of our classes has to be only used for one purpose.

*/
/*
This class Journal add entries and remove entries
*/

const fs = require('fs'); //node file system to create, read, etc a file

class Journal{
    constructor(){
        this.entries = {} //object that stores the entries of the journal
    }

    addEntry(text){ //add an entry to the journal
        let c = ++Journal.count;
        let entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }

    /*
    The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
    */
    removeEntry(index){
        delete this.entries[index];
    }

    /*
    The Object.values() method returns an array of a given object's own enumerable property values
    */
    toString(){
        return Object.values(this.entries).join('\n');
    }

}
Journal.count = 0; //

class PersistenceManager{

    saveToFile(journal, filename){
        fs.writeFileSync(filename, journal.toString());
    }
}

let j = new Journal();
j.addEntry('I cried today');
j.addEntry('I ate a bug');
console.log(j.toString());