/********* HIGHER-ORDER FUNCTIONS AND CALLBACKS ********/

/////Empty Room Exercise

/*
A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
*/

/*
In the example below: the function expression notInRoom returns the objects (of newDevelopment array) which rooms[] objects appear as false.
notInRoom uses each, map and reduce to filter
And then uses an intersecction to find the rooms which nobody was inside
*/

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const _ = {};

_.each = function(list, callback) {//this executes the callback for each element of the list
  if(Array.isArray(list)){
    //loop through array
    for(let i = 0; i < list.length; i++){
      //call the callback with a list item
      callback(list[i], i, list); //value, index, list
    }
  } else { //object
    //loop through object
    for ( let key in list ) {
      callback(list[key], key, list)
    }
    //call the callback with a list item
  }
  //celebrate
} 

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
_.reduce(list, iteratee, [memo], [context]) 
reduce boils down a list of values into a single value.
Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. 
The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.

If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. 
The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.
*/

_.reduce = function (list, cb, initial = list[0]) {//returns only a value
  //[1,2,3] //cb = sum;
  let memo = initial;
  for (var i = 0;  i < list.length; i++){
    memo = cb(list[i], memo)
  }
  
  return memo;
  
}

/*
Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.
*/
_.intersection = () => {
  
};

const notInRoom = (suspect, memo) => {
  //return an array of all the falses
  const emptyRooms = _.reduce(suspect.rooms, (room, memo) => {
    if (room === false) memo.push(room)
    return memo;
  }, []);
  
  return emptyRooms;
};

var notInRooms = _.map(newDevelopment, notInRoom);

_.intersection(...notInRooms); //The solution
