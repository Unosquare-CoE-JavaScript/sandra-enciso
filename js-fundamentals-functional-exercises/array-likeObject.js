/******** Functions in Depth***********/

/*Array-Like Object*/

const constructArr = function() {
  const arr = Array.prototype.slice.call(arguments);
  arr.push('the billiards room?');
  return arr.join(' ');
};
constructArr('was', 'it', 'in');
