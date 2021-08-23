/******** .filter() Function ***********/

/*.filter() Excercise*/

const _ = {};

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

_.filter = (array, cb) => {
  const storage = [];
  _.each(array, (item, i, list) => {
    if(cb(item, i, array)){
      storage.push(item);
    }
  })
  /*for(let i = 0; i < array.length; i++){
    if(cb(array[i], i, array)){
      storage.push(array[i])
    }
  }*/
  return storage;
}


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

_.filter(videoData, function(suspectObject){
  return suspectObject.present
})