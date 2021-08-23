/******** Functions in Depth***********/

/*Array-Like Object*/

const constructArr = function() {
  const arr = Array.from(arguments);
  arr.push('the billiards room?');
  return arr.join(' ');
};
constructArr('was', 'it', 'in');