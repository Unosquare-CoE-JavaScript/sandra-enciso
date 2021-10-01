/*  Exports And Imports (Modules)  */
/*
In React projects (and actually in all modern JavaScript projects), you split your code across multiple JavaScript files - so-called modules. 
You do this, to keep each file/ module focused and manageable.

To still access functionality in another file, you need export  (to make it available) and import  (to get access) statements.

You got two different types of exports: default (unnamed) and named exports
*/
//person.js

const person = {
    name: 'Max'
  }
  
  export default person
  
  //utility.js
  
  export const clean = () => {}
  
  export const baseDate = 10;
  
  //app.js
  //Imports default and ONLY export of the file Name in the receiving file is up to you
  import person from './person.js' //default export
  import prs from './person.js' //default export, you can choose the name
  
  import { baseData } from './utility.js' //named export. You have to use the exact name defined in the file with the export keyword
  import { clean as cls } from './utility.js' //you can use an alias
  
  import * as bundled from  './utility.js' //you can import all (*) and then assign an alias and bundled
  //you must use bundled.baseDate for example to acces to the properties

  /*
  A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.
  */