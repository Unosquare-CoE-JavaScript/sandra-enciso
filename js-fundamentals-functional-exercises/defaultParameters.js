/******** Functions in Depth***********/

/*Default parameters*/

const add = function(a , b = 2) {
   console.log(this.arguments); //logs [3]
   return a + b; 
};
add(3); //5??