/******** Functions in Depth***********/

/////Default parameters

const add = function(a , b = 2) { ///We can use default parameters values, in this case b = 2
   console.log(this.arguments); //logs [3]
   return a + b; 
};
add(3); //5... How this call sends only one parameter, the default parameter is 2
