/******** OBJECTS ***********/

/////Non-valid Characters

/*
You can access to properties of an object using bracket notation, but you would use strings to assing any property.
It's weird to use characters like numbers or special characters.
*/

var box = {};

box['material'] = "cardboard"; //Good name of property

box[0] = 'meow'; //You can assing property 0 to an object, but this is weird

box['&*'] = "testing 123"; // This isn't a good name, its weird too

var text = box['&*']; //Assingning using a weird name property

console.log(box); //'testing 123'

/*{
  '0': 'meow',
  material: 'cardboard',
  '&*': 'testing 123'
}*/

console.log(text); //'testing 123'
