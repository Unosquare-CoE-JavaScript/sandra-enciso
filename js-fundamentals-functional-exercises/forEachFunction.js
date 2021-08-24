/******** .forEach() Function ***********/

/////Using Functions

/*
Converting data into a Class
*/

//This function return an object
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[2],
    speak: function () {
      console.log("My name is", name);
    }
  }
}

//Array of names
var suspects = ['Miss Scarlet', 'Coronel Mustard', 'Mr. White'];

var suspectsList = []; //Empty array

/*
Looping the 'susptects' array to make 'push' to 'sustectList' using the function 'CreateSuspectObjects' which returns an object, 
using the elements of 'suspects' array
*/
for(let i = 0; i < suspects.length; i++){ 
  suspectsList.push(CreateSuspectObjects(suspects[i]));
}
