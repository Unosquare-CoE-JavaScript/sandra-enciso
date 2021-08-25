/******** LIST TRANSFORMATIONS ***********/

/////List Transformations
/*
List Transformations. Which is to take a list or collection of data and extract specific portions of that data by looping or other logic.
Using this functional utility is useful when using APIs.
*/

const game = {};

game['suspects'] = []; //Declaring the property 'suspects' as an array

game.suspects.push({ //Using the property (array method) push to assign to the last element of the array 'suspects' 
  name:"Rusty",
  color: "orange"
});

game.suspects[1] = { //Using bracket notation to assign to the element [1] of an array
  name: "Miss Scarlet",
  color: "red"
}

///////////////////////////////////////////////////////////

//Using nested data to assign elements to an array
//This code works like the code above
const game = { //Nesting data
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

game['suspects'] //Print the suspects
