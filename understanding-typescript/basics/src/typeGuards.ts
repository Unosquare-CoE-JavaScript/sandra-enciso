/*
In TypeScript, checking against the value returned by typeof is a type guard. 
Because TypeScript encodes how typeof operates on different values, it knows about some of its quirks in JavaScript.
*/

type Admin = {
  name: string;
  privileges: string[];
};

type Emmployee = {
  name: string;
  startDate: Date;
};

type EvelatedEmployee = Admin & Emmployee; //Combine types to create a new type. This is called intersection types

const e1: EvelatedEmployee = {
  name: "Max",
  privileges: [""],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    //type guards
    //With type guards you avoid runtime errors by checking types before you try to do something with the values.
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Emmployee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("privileges", emp.name);
  if ("privileges" in emp) {
    // js sintax that checks if 'privilegies' exists as a property of emp
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Privileges: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird"; //this is an assignement
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

//const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement; // If using React, then is better to use this syntax. '!' Exclamation mark means that never yield a null value

// userInputElement.value = "Hi there!";

//Or if we're not sure if returns a null element we can use the next aproach:
const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}

interface ErrorContainer {
  [prop: string]: string; //index type. This means like 'I don't know property's name but is interpreted as string and the value of the property must to be a string
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character!",
};
