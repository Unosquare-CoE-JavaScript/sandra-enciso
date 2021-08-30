/* ES6 Modules Pattern */
/*
Modules promote encapsulation, which means the variables and functions are kept private inside the module body and can't be overwritten.
*/
var teacher = "Kyle";

export default function ask(question){
  console.log(teacher, question);
};

/* Import in another js Document */

import ask from "workshop.mjs";

ask("It's a default import, rigth?"); //"Kyle It's a default import, rigth?"

import * as workshop from "workshop.mjs";

workshop.ask("It's a namespace import, right?") //"Kyle It's a namespace import, rigth?"


/*TC39 is an ECMA comittee wich follows a process to devlop language features for JavaScript*/
