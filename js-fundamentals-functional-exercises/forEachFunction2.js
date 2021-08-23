/******** .forEach() Function ***********/

/*forEach Function*/

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

_.each(suspects, function(name){ //this uses underscore which is a library
  suspectList.push(CreateSuspectObjects(name));
})

['observatory', 'ballroom', 'library']
.forEach(function(value, index, list){});