/******** .filter() Function ***********/

///// .filter() Excercise

const _ = {};

//Creating a new property 'each' which executes a callback function for each element of an array or an object
_.each = function(list, callback) {
  if(Array.isArray(list)){
    for(let i = 0; i < list.length; i++){
      callback(list[i], i, list);
    }
  } else {
    for ( let key in list ) {
      callback(list[key], key, list)
    }
  }
}

//Creating a new property 'map' which returns a new array, this array is created executing a callback function for each element of an array
_.map = function(list, callback) { //map returns an array
  //create an empty array to store
  var storage = [];
  //loopin'
  _.each(list, (v, i, list) => {
    storage.push(callback(v,i,list))
  })
  
  return storage;
}

/*
filter() calls a provided callbackFn function once for each element in an array, 
and constructs a new array of all the values for which callbackFn returns a value that coerces to true
*/
//Filter works similar to map, but filter returns a new array filtering 
_.filter = (array, cb) => { //Parameters array, callback function.
  const storage = [];
  _.each(array, (item, i, list) => { //loops an array using the .each method
    if(cb(item, i, array)){
      storage.push(item);
    }
  })// Using 'each' instead 'for' structure
  /*for(let i = 0; i < array.length; i++){
    if(cb(array[i], i, array)){
      storage.push(array[i])
    }
  }*/
  return storage; //returns a new array
}

//Object which contains the data of the clue characters
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

//Array which contains the characters which are present (true)
const suspects = _.filter(videoData, function(suspectObject){ ///Using filter to filtering the data
  return suspectObject.present
});
//Array which contains the names of the characters which are present (true)
const suspectsNames = _.map( suspects, suspect => {
  return suspect.name
})
//We can use 'arguments' to access to the parameters that we send
const createTuple = (a, b, c, d) => {
  //console.log(arguments); // [] the arguments that are passed 
  return [[a, c],[ b, d]]; //Desesctructuring the arguments
}

createTuple('It', 'be', 'could', 'anyone', 'no one'); 
// => Returns 'It could be anyone'

/*
Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
When we invoke the function, we pass it all the values in the array using the spread syntax (...) and the array name
*/
//SPREAD
const createTuple2 = (a, b, c, ...d) => {
  return [[a, c],[ b, d]];
}

createTuple2('It', 'be', 'could', 'anyone', 'no one'); // => Returns 'It could be anyone'
