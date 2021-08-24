/******** Functions in Depth***********/

/////Array-Like Object

/*
ES6 Array.from() method creates a new array instance from an array-like object
*/

const constructArr = function() {
  const arr = Array.from(arguments); //All the arguments are converted to an array
  arr.push('the billiards room?');
  return arr.join(' ');
};
constructArr('was', 'it', 'in');
