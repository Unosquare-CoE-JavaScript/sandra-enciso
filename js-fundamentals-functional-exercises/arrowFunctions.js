/******** Functions In-Depth ***********/

/*Arrow Functions*/
var nameImprover = (name, adj) => {
  return `Col ${name} Mc ${adj} pants`;
};

$('body').hide();

//val is parameter
//console.log is the body of the function
myArr.forEach(val => console.log(val));

$('button').on('click', () => { 
  console.log('Don\'t press my buttons!');
});