//Generics
// Generic type is a type which is kind of connected with some other type and is really flexible
// Generics and Constraints give us flexibility combined with type safety
const names: Array<string> = []; // this is the same as string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  //this promise yield a string
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

// function merge<T, U>(objA: T, objB: U) { //generic types
//   return Object.assign(objA, objB);
// }

// Constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  //returns a tuple
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 elements.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  // Ensures that 'key' arg is a key of 'obj' arg
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>(); // for objects are not allowed
// const maxObj = { name: "Max" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Manu" });
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

// Generic Utility Types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function creteCourseGoals(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; //Partial turns all the properties of CourseGoal optional
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal; //we need to cast, because initially is Partial
}

const names2: Readonly<string[]> = ["Max", "Sports"];
//names2.push('Manu'); // names2 is Readonly, so we can't add or delete an item. We can use Readonly in other types, not only in []
