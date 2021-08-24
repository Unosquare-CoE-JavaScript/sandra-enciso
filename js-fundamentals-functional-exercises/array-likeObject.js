/******** Functions in Depth***********/

/////Array-Like Object

/*
Converting an array-like object into an array by referencing the slice method of arrays.

The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end
where start and end represent the index of items in that array. The original array will not be modified.
*/
const constructArr = function() {
  const arr = Array.prototype.slice.call(arguments); //
  arr.push('the billiards room?');
  return arr.join(' ');//The join() method creates and returns a new string by concatenating all of the elements in an array, 
  //separated by a specified separator string
};
constructArr('was', 'it', 'in'); //returns  'was it in the billiards room?
