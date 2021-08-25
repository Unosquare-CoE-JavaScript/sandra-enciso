/******** .filter() Function ***********/

//////.filter() Excercise

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

/*
filter() calls a provided callbackFn function once for each element in an array, 
and constructs a new array of all the values for which callbackFn returns a value that coerces to true
*/
//Filter works similar to map, but filter returns a new array filtering 
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
