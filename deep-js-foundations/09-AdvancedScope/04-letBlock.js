/* Block Scoping: let + var */

function repeat(fn, n) {
    var result;
    for(let i = 0; i < n; i++){ //Use let for block scope
      result = fn( result, i );
    }
    return result;
  }
  
  //**************************
  /*Block Scoping: sometimes var > let*/
  
  function lookupRecord(searchStr) {
    try {
      var id = getRecord(searchStr);
    }
    catch(err){
      var id = -1;
    }
    return id;
  }
  
  lookupRecord(); // -1
  
  //***************************
  /* Block scoping: explicit let block */
  //If you look to use let, is better use block scope
  
  function formatStr(str) {
    { //Block scope: prefix and rest only exist here
      let prefix, rest;
      prefix = str.slice(0, 3);
      rest = str.slice(3);
      str = prefix.toUpperCase() + rest;
    }
    
    if(/^FOO:/.test(str)){
      return str;
    }
    return str.slice(4);
  }
  
  formatStr('FOO123'); //'23'
  
  //***************************