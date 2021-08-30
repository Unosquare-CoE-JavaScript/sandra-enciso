/*
Sometimes, the code doesn't works as we spected...
but this happens because sometimes we don't know how JavaScript works...
Whenever there's a divergence between what your brain thinks is happening, and what the computer does,
that's where bugs enter the code...
*/

//Here x++ returns the old value of x
var x = 40;
x++; //40
x; //41

++x; //42
x; //42

////
x = '5';
x = x + 1; //"51"

var y = "5";
y++; //5
y; //6 

//////////
///This is how increment (++) works
function plusPlus(orig_x) { 
  var orig_x_coerced = Number(orig_x);
  x = orig_x_coerced + 1;
  return orig_x_coerced; //Returns the old value
}

var x = "5";
plusPlus(x); //5
x; //6