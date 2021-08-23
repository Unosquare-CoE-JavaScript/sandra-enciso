/******** LIST TRANSFORMATIONS ***********/

/*Looping Exercise*/

const game = {
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

const firstColor = game.suspects[0].color;
const secondColor = game.suspects[1].color;

//var [color, color2] = [game.suspects[0].color, game.suspects[1].color];
//var [{color: firstColor, [color: secondColor]}] = game.suspects;


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

gameLoop(game);

function foo(){
  for (let i = 0; i < game.suspects.length; i++){
    console.log(game.suspects[i]);
  }
}

function foo2(){
  for(let key in obj){
    obj[key]
  }
}

foo()