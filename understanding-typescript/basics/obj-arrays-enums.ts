// const person: {
//   name: string; //add a key type
//   age: number;
// } = {
//   // {} and object are the same types
//   name: "Maximilian",
//   age: 30,
// };

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
} // enum is a custom type
// we can initialize the values, if we dont initialize it, automatically get the values: 1, 2, 3 and so on.

/* Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
Enums allow a developer to define a set of named constants. */

// this is a better sintax
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // this is a tuple type
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

//person.role.push('admin');
//person.role[1] = 10; this is bad, because the second element must to be a string

//person.role = [0, 'admin', 'user']; //this is bad, because in the tuple, we specified that the tuple must to have only two elements

/*let favoriteActivities: any[]; // if you want to store any type of data in your array, then use type 'any', this is a special type of TS
favoriteActivities = ["Sports", 1];*/
/* You can use 'any' type as a fallback if you have some value or some kind of data where you really can't know which kind of data will be stored in there 
but as recomendation, you must to do runtime check*/

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

const person2 = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

/* object types can also be created for nested objects for example if you have an object: */
const product: {
  // This would be the type of such an object:
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", " hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

if (person2.role === Role.AUTHOR) {
  console.log("is author");
}
