/******** Functions in Depth***********/

/////Default parameters

/*Examples using default parameters*/
const add = function(a , b = 2) { //Default parameter: b = 2. If we don't send b, the default value will be 2
   console.log(this.arguments); //logs [3]
   return a + b; 
};
add(3); //5

//Write the function in ES5
const add = function(a , b) {
   b = b || 2; //If b doesn't contains any value, assign 2 as value for b
   console.log(this.arguments); //logs [3]
   return a + b; 
};
add(3); //5
