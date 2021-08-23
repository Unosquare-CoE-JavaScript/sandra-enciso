/******** Functions In-Depth ***********/

/*Function Scavenger Solution*/
//nameImprover Is the name of the function
var nameImprover = function (name, adj) { //Definition what is inside curly braces
  //name and adj are arguments/parameters
  return 'Col ' + name + ' Mc' + adj + ' pants';//Body of a function
};
//invocation/call-time
$('body').hide(); //Hide is a name for a function
//body is arguments/parameters
//invocation/call-time
myArr.forEach(function(val){ console.log(val);}); //forEach (name)
//function inside the forEach is an argument

$('button').on('click', function(){  //on (name)
  //invocation/call-time
  console.log('Don\'t press my buttons!');//log (name)
});