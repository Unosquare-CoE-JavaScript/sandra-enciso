/******** PROPERTY ACCES ***********/

/*Non-valid Characters*/

var box = {};

box['material'] = "cardboard";

box[0] = 'meow'; //You can assing property 0 to an object, but this is weird

box['&*'] = "testing 123"; // This isn't a good name, its weird too

var text = box['&*'];

/*console.log(box); 
{
  '0': 'meow',
  material: 'cardboard',
  '&*': 'testing 123'
}*/

//console.log(text);//'testing 123'