/******** .map() Function ***********/

/*_.map Excercise*/

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

_.map([1,2,3], (val) => val+1)



const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function(item){
  return 'broken '+item;
}

const brokenWeapons = _.map(weapons, makeBroken);

brokenWeapons;

_.map(weapons, makeBroken)

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak: 'my name is '+name
    //speak() {log('my bname is '+this.name);}
  };
};

var suspects = ['Miss Scarlet', 'Coronel Mustard'];

var suspectsList = _.map(suspects, function(name){
  return CreateSuspectObjects(name);
})

_.each(suspects, function(suspect) {
  console.log(suspect.speak);
})