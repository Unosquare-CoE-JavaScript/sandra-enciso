/******** LIST TRANSFORMATIONS ***********/

/////Looping Exercise

/*
Loop through all the properties of the suspect objects in the suspects array, mark them if you think they are guilty.
*/

const game = { ///The object to loop
  'suspects': [
    {
      name: "Rusty",
      color: "orange"
    },
    {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
};

const firstColor = game.suspects[0].color; // 'orange'
const secondColor = game.suspects[1].color; // 'red'

//Destructuring the object this code works like the code above
var [color, color2] = [game.suspects[0].color, game.suspects[1].color];
var [{color: firstColor, [color: secondColor]}] = game.suspects;

//Assigning a function to var gameLoop
/*This function loops the object game using two loops(nested).
The first, loops through the array and the second, loops through the keys inside the element in which its the first loop
*/
var gameLoop = function(game){
  for (let i = 0; i < game.suspects.length; i++){
    for(let key in game.suspects[i]){
      if(game.suspects[i][key] === "Rusty"){
        console.log("Found 'em !");
      }else{
        console.log('next time!');
      }
    }
  }
}

//Here we call the function expression gameLoop() and pass the object game as parameter
gameLoop(game);

//This function foo() loops through the array 'suspects'
function foo(){
  for (let i = 0; i < game.suspects.length; i++){
    console.log(game.suspects[i]);
  }
}

//This function foo2() loops through the keys
function foo2(){
  for(let key in obj){
    obj[key]
  }
}

foo()
