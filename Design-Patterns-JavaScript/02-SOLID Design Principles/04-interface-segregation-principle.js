/*
SOLID.- 
Single responsability principle
Open / closed principles
Liskov Substitution principle
Interface segregation principle
Dependency inversion principle

//////

Interface Segregation Principle
The interface segregation principle states that “clients shouldn’t be forced to depend on interfaces that they don’t use.”

*/
/* This example uses machines to print, scan and fax some documents. These machines extends to the parent class Machine but we use ISP to use only the methods availables for each machine */

var aggregation = (baseClass, ...mixins) => { //Allows multiple inheritance
    class base extends baseClass {
      constructor (...args) {
        super(...args);
        mixins.forEach((mixin) => {
          copyProps(this,(new mixin));
        });
      }
    }
    let copyProps = (target, source) => {  // this function copies all properties and symbols, filtering out some special ones
      Object.getOwnPropertyNames(source)
        .concat(Object.getOwnPropertySymbols(source))
        .forEach((prop) => {
          if (!prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
        })
    };
    mixins.forEach((mixin) => {
      // outside constructor() to allow aggregation(A,B,C).staticFunction() to be called etc.
      copyProps(base.prototype, mixin.prototype);
      copyProps(base, mixin);
    });
    return base;
};

class Document{

}

/* This class can not be constructed, must be abastract */
class Machine{
    constructor(){
        if(this.constructor.name === 'Machine'){ //making a class abstract
            throw new Error('Machine is abstract!');
        }
    }

    /* machines which handle the doc */
    print(doc){}
    fax(doc){}
    scan(doc){}
}

//This class overrides the parent methods
//Multifucntion printer can print, fax and scan
class MultiFunctionPrinter extends Machine{
    print(doc){
        //
    }

    fax(doc){
        //
    }

    scan(doc){
        //
    }
}

//ISP = segregate (split up)

//print only can print
class Printer {
    constructor(){
        if(this.constructor.name === 'Printer'){
            throw new Error('Printer is abstract!');
        }
    }
    print(){}
}

class Scanner{
    constructor(){
        if(this.constructor.name === 'Scanner'){
            throw new Error('Scanner is abstract!');
        }
    }
    scan(){}
}

//
class Photocopier extends aggregation(Printer, Scanner){ //Multiple Inheritance -> extends to Printer and Scaner
    print(){}
    scan(){}
}

///Constructs new Errors
class NotImplementedError extends Error{
    constructor(name){
        let msg = `${name} is not implemented`;
        super(msg);
        if(Error.captureStackTrace){
            Error.captureStackTrace(this, NotImplementedError);
        }
    }
}

//this printer only can print
class OldFashionedPrinter extends Machine{
    print(doc){
        // ok
    }

    /* fax(doc){
        // do nothing
        // principle of least surprise
        // dont make a lack of behavior
    } */

    scan(doc){ //we can use throw error to make sure dont violate the principle of least surprise
        throw new NotImplementedError('OldFasionPrinter.scan');
    }
}

let printer = new OldFashionedPrinter();
printer.scan();



