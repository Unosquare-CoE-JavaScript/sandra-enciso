/******** .forEach() Function ***********/

/*Using Functions*/

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[2],
    speak: function () {
      console.log("My name is", name);
    }
  }
}

var suspects = ['Miss Scarlet', 'Coronel Mustard', 'Mr. White'];

var suspectsList = [];

for(let i = 0; i < suspects.length; i++){
  suspectsList.push(CreateSuspectObjects(suspects[i]));
}