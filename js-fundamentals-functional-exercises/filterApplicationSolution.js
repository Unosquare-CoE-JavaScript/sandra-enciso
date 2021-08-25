/******** .filter() Function ***********/

//filter() Excercise

/*
filter() calls a provided callbackFn function once for each element in an array, 
and constructs a new array of all the values for which callbackFn returns a value that coerces to true
*/

const _ = {};

//Creating a new property 'each' which executes a callback function for each element of an array or an object
_.each = function(list, callback) { //Parameters array, callback function.
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

//Filter works similar to map, but filter returns a new array filtering 
_.filter = (array, cb) => {
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
  return storage;
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
_.filter(videoData, function(suspectObject){
  return suspectObject.present
})
