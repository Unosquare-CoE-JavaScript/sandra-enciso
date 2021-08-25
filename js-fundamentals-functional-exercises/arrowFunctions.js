/******** Functions In-Depth ***********/

/////Arrow Functions

/*
An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
*/

var nameImprover = (name, adj) => { //name and adj are the parameters of the arrow function
  return `Col ${name} Mc ${adj} pants`;
};

$('body').hide();

//val is parameter
//console.log is the body of the function
myArr.forEach(val => console.log(val));

$('button').on('click', () => {  ///We use arrow functions for example in JQuery
  console.log('Don\'t press my buttons!');
});
