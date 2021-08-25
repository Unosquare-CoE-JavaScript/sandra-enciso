/******** OBJECTS ***********/

/////Game Characters Challenge
/* Exercise
Create an object using bracket and bot notation that represents the characters and related data you may find in a game of Clue.
*/

var game = {};

game.muerderer = "??";
//Remember, you can assing a property using bracket notation
//Assigning an array of objects to  property 'weapons'
game['weapons'] = [
  {type: 'lasers', location: 'lab'}, 
  {type: 'angry cats'}, 
  'dish soap'
];

game.name[0] = 'Miss Scarlet'; //Assingning a value to an array of property name
game.name.push('Mr. Green'); //Using property(array method) push, you can assign a value for the last element of an array 
