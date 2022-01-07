// An interface declaration is another way to name an object type

//type AddFn = (a:number, b:number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string; //this value is only written when instantiate, then we cannot change its value
  outputName?: string; // the '?' means that this property is optional
}

// interfaces describe the structure of an object. This is a feature of TS, not for JS. They are used to share functionality among different classes
interface Greetable extends Named /*, AnotherInterface */ {
  //We can use inheritance in interfaces. And we can extend multiple interfaces, unlike of classes
  greet(phrase: string): void;
}

class Person implements Greetable /*, AnotherInterface */ {
  // A class can implement more than one interface
  name?: string;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;

// user1 = {
//   name: "Max",
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

user1 = new Person("Max");

user1.greet("Hi there - I am");
