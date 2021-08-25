/********* HIGHER-ORDER FUNCTIONS AND CALLBACKS ********/

/////_.reduce() Exercise

/*
_.reduce(list, iteratee, [memo], [context]) 
reduce boils down a list of values into a single value. 
Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. 
The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
*/

const _ = {};

_.reduce = function (list, cb, initial = list[0]) {
  //[1,2,3] //cb = sum;
  let memo = initial;
  for (var i = 0;  i < list.length; i++){
    memo = cb(list[i], memo)
  }
  
  return memo;
  
}

_.reduce([1,2,3], (v, sum) => v + sum, 0); /// 6 The function add all elements of the array [1,2,3]
