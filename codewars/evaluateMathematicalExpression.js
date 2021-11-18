/* From https://www.codewars.com/kata/52a78825cdfc2cfc87000005 */

/**
 * Given a mathematical expression as a string you must return the result as a number.
 * 
 * Examples
 * 1-1    // 0
 * 1 -1   // 0
 * 1- 1   // 0
 * 1 - 1  // 0
 * 1- -1  // 2
 * 1 - -1 // 2
 * 1--1   // 2
 *
 * 6 + -(4)   // 2
 * 6 + -( -4) // 10
 */


/* changes a infix expression (normal expression) to a postfix expression and then evaluate */
var simbolos = ['+', '-', '*', '/', '(', ')', '?']; //

var calc = function (expression) {
  // evaluate `expression` and return result
  var pdp = function (char) { // precedence within the stack
    //priority within the stack
    if (char == '+' || char == '-') { //the lower precedence
      return 1;
    } else if (char == '/' || char == '*') {
      return 2;
    }else if ( char == '?' ){ // negative (-) unary operator, its diferent from substract
      return 3
    }else {
      return 0
    }
  };

  var pfp = function (char) { //precedence off the stack
    if (char == '+' || char == '-') {
      return 1;
    } else if (char == '/' || char == '*') {
      return 2;
    } else {
      return 4;
    }
  };
  
  /*This function takes an expression, remove whitespaces and changes - (negative unary operator) to ? to not to be confused with substract */
  var cleaningExpression = function (expression){
    var newExpression = [];
    var expression = expression.replace(/\s+/g, ''); //remove whitespaces
    expression = Array.from(expression);
    newExpression = expression;
    
    for(let i=0; i<expression.length; i++){
      let prevChar = expression[i-1];
      let char = expression[i];
      let nextChar = expression[i+1];
      if(char === '-' && ( ( (simbolos.includes(prevChar) && prevChar != ')' ) || i == 0) && ( nextChar==='(' || !simbolos.includes(nextChar) ) ) ){
        newExpression.splice(i, 1, '?'); //replace - to ? in a negative operator
      }
    }
    return newExpression.join('');
  }

  var postfijo = function (expression) { //changes infix expression to postfix expression
    expression = cleaningExpression(expression);
    var operadores = [],
      resultado = [],
      numAux = ''; //
    //Goes through the expression character by character
    for (let i = 0; i < expression.length; i++) {
      let prevChar = expression.charAt(i - 1);
      let char = expression.charAt(i);
      let nextChar = expression.charAt(i + 1);
      if (char && !simbolos.includes(char) && char != ' ') {
        //if its a number
        numAux = `${numAux}${char}`;
        if (simbolos.includes(nextChar) || i + 1 == expression.length) {
          resultado.push(parseFloat(numAux));
          numAux = '';
        }
      } 

      if (simbolos.includes(char) && char !== ')') {
        // its an operator
        //Evaluate precedence
          let cont = operadores.length;
          if (cont > 0) {
            let dato = operadores.pop();
            while (cont > 0 && pdp(dato) >= pfp(char)) {
              resultado.push(dato);
              cont = operadores.length;
              dato = operadores.pop();
            }
            if (dato) {
              operadores.push(dato);
            }
            operadores.push(char);
          } else {
            operadores.push(char);
          }
      }

      if (char === ')') {
        if (operadores.length > 0) {
          let dato = operadores.pop();
          while (operadores.length > 0 && dato != '(') {
            resultado.push(dato);
            dato = operadores.pop();
          }
        }
      }
    }

    while (operadores.length > 0) {
      resultado.push(operadores.pop());
    }
    
    return resultado;
  };
  
  var eval = function (expression){
    var pile = [],
    x = 0,
    y = 0;
    for (let i = 0; i < expression.length; i++) {
      let element = expression[i];
      if (simbolos.includes(element)) {
        switch (element) {
          case "*":
            x = pile.pop();
            y = pile.pop();
            pile.push(y * x);
            break;
          case "/":
            x = pile.pop();
            y = pile.pop();
            pile.push(y / x);
            break;
          case "+":
            x = pile.pop();
            y = pile.pop();
            pile.push(y + x);
            break;
          case "-":
            x = pile.pop();
            y = pile.pop();
            pile.push(y - x);
            break;
          case "?":
            x = pile.pop();
            pile.push(-1 * x);
            break;
        }
      } else { //its a number
        pile.push(element);
      }
    }
    return pile.pop()
  }

 return eval(postfijo(expression));
};