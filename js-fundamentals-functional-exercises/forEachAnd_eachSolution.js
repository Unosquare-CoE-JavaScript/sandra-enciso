/******** .forEach() Function ***********/

/*forEach and _.each Exercises*/

const _ = {};

_.each = function(list, callback) {
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

_.each(['sally', 'georgie', 'porgie'], (name, i, list) => {
  if(list[i+1]){
    console.log(name, 'is younger than ', list[i+1]);
  } else {
    console.log(name, 'is the oldest');
  }
})