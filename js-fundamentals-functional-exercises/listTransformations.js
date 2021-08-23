/******** LIST TRANSFORMATIONS ***********/

/*List Transformations*/

/*

const game = {};

game['suspects'] = [];

game.suspects.push({
  name:"Rusty",
  color: "orange"
});

game.suspects[1] = {
  name: "Miss Scarlet",
  color: "red"
}

*/

/// Is the same

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

game['suspects']