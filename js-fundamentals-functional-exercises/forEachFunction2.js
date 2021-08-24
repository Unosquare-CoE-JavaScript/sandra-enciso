/******** .forEach() Function ***********/

/////forEach Function

/*
forEach() calls a provided callback function once for each element in an array in ascending index order.
It is not invoked for index properties that have been deleted or are uninitialized.
*/

// This function creates and returns an object
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[2],
    speak: function () {
      console.log("My name is", name);
    }
  }
}

// An array of names:
var suspects = ['Miss Scarlet', 'Coronel Mustard', 'Mr. White'];

var suspectsList = [];

/*
Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects.
*/

//Using the underscore to access to 'each' method
_.each(suspects, function(name){ //this uses underscore, is a library
  suspectList.push(CreateSuspectObjects(name)); //Here, the callback function uses 'push' method to assign a new last value of the array
  //and uses 'CreateSuspectObjects' to return a new object
})

['observatory', 'ballroom', 'library']
.forEach(function(value, index, list){}); //Invoking 'forEach' Method. Paramenters 'callbackFn', 'element', 'index', 'array'
