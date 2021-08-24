/******** .map() Function ***********/

/////_.map Excercise

/*
map() calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results. 
*/

const _ = {}; //Declares '_' object

//Assigning a new property 'each'
_.each = function(list, callback) {//this executes the callback for each element of the list (array or object)
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

//Assigning a new property 'map' in which returns a new array created using the callback for each element of the list
_.map = function(list, callback) { //map returns an array
  //create an empty array to store
  var storage = [];
  //loopin'
  _.each(list, (v, i, list) => {
    storage.push(callback(v,i,list))
  })
  
  return storage;
}

_.map([1,2,3], (val) => val+1) //Invoking map to return a new array that contains [n+1,...,n+1] where n is each element of the array


const weapons = ['candlestick', 'lead pipe', 'revolver'];

//Function expression which returns a string
const makeBroken = function(item){
  return 'broken '+item;
}

const brokenWeapons = _.map(weapons, makeBroken); //Creating a new array using map (map returns an array).
//The parameters are the weapons array and the function expression makeBroken();

brokenWeapons;

_.map(weapons, makeBroken)

//This function returns an object
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak: 'my name is '+name
    //speak() {log('my bname is '+this.name);}
  };
};

var suspects = ['Miss Scarlet', 'Coronel Mustard'];

var suspectsList = _.map(suspects, function(name){ //Creating a new array using map (map returns an array).
  return CreateSuspectObjects(name);
})

_.each(suspects, function(suspect) {//Each method executes a function for each element of an array
  console.log(suspect.speak); //My name is 'name' (for each name of the list)
})
