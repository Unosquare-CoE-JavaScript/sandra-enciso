/******** .forEach() Function ***********/

/////forEach and _.each Exercises

const _ = {}; //Declaring the object '_' (underscore) to assign new properties

//Creating a new property 'each' in which uses a function to loop an array and for each element of the array executes the callback(parameter)
_.each = function(list, callback) {//Parameters: an array or object, callback function
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
}

//Invoking the new property 'each' of the object '_' (underscore)
_.each(['sally', 'georgie', 'porgie'], (name, i, list) => {
  if(list[i+1]){
    console.log(name, 'is younger than ', list[i+1]);
  } else {
    console.log(name, 'is the oldest');
  }
}); //sally is younger than georgie, georgie is younger than porgie, porgie is the oldest
