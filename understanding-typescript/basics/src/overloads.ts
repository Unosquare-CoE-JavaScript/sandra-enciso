// FUNCTION OVERLOADS. Allows us to define multiple functions signatures

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: string, b: string): string; //Overload
function add(a: number, b: number): number; //when args are numbers, then the return is a number too
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    //type guards
    return a.toString() + b.toString();
  }
  return a + b;
}

// const result = add(1, 5) as string; // cast to string
const result = add("hola", "adios");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own Company" },
};

console.log(fetchedUserData?.job?.title); // using '?' ensure that if we want to acces to job property, first check if the property exists, the same for title

const userInput = null;

//const storedData = userInput || 'DEFAULT';
const storedData = userInput ?? "DEFAULT"; // '??' is called coalescing operator and means that if this is null or undefined and really just that, not an empty string, not a zero, use the fallback
