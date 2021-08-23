/********* HIGHER-ORDER FUNCTIONS AND CALLBACKS ********/

/****** _.reduce() Exercise ******/

const _ = {};

_.reduce = function (list, cb, initial = list[0]) {
  //[1,2,3] //cb = sum;
  let memo = initial;
  for (var i = 0;  i < list.length; i++){
    memo = cb(list[i], memo)
  }
  
  return memo;
  
}

_.reduce([1,2,3], (v, sum) => v + sum, 0);