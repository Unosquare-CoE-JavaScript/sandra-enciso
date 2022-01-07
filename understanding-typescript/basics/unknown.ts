// unknown is a type provided by TS
/* 'unknown' is the type-safe counterpart of 'any'. 
Anything is assignable to 'unknown', but unknown isn’t assignable to anything but itself and 'any' without a type assertion or a control flow based narrowing. 
Likewise, no operations are permitted on an 'unknown' without first asserting or narrowing to a more specific type. */
let userInput: unknown; // we don't know what the user will entry
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  //'never' is a new type that means that this function never returns something
  throw { message: message, errorCode: code }; // For example, when we thrown an error, then our app 'crashes' and can't return something
}

generateError("An error ocurred!", 500);
