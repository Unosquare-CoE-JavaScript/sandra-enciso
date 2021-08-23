/******** PROPERTY ACCES ***********/

/*Game Characters Challenge*/
/* Exercise
Create an object using bracket and bot notation that represents the characters and related data you may find in a game of Clue.
*/

var game = {};

game.muerderer = "??";
game['weapons'] = [
  {type: 'lasers', location: 'lab'}, 
  {type: 'angry cats'}, 
  'dish soap'
];

game.name[0] = 'Miss Scarlet';
game.name.push('Mr. Green')