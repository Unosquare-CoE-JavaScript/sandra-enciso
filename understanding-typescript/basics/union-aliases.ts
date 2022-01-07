// Type alias allows us to use the same type more than once and refer to it by a single name.
type Combinable = number | string; //This type allows us to use a type number or string
type ConversionDescriptor = "as-number" | "as-text"; // The variable that will use this type strictly must store the string "as-number" or "as-text"

/* this function should work with both numbers ans strings */
/* This function takes 2 values, depending on the types of values of parameters is the procedure */
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  // this is an union function
  // if we're using union function, then is appropiate to add runtime checkers
  let result: number | string;
  if ( // type guards
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;

  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }

  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
