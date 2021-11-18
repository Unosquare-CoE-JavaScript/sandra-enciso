/* From https://www.codewars.com/kata/53005a7b26d12be55c000243 */

/**
 * You will create an interpreter which takes inputs described below and produces outputs, storing state in between each input.
 * 
 * example
 * >x = 7
 *  7
 * >x + 6
 *  13   
 */



//Based in my solution of the kata Evaluate Mathematical Expression https://www.codewars.com/kata/52a78825cdfc2cfc87000005

var simbolos = ["+", "-", "*", "/", "(", ")", "%", "?"];

var pdp = function (char) {
  // precedence within the stack
  //priority within the stack
  if (char == "+" || char == "-") {
    //the lower precedence
    return 1;
  } else if (char == "/" || char == "*" || char == "%") {
    return 2;
  } else if (char == "?") {
    // negative (-) unary operator, its diferent from substract
    return 3;
  } else {
    return 0;
  }
};

var pfp = function (char) {
  //precedence off the stack
  if (char == "+" || char == "-") {
    return 1;
  } else if (char == "/" || char == "*" || char == "%") {
    return 2;
  } else {
    return 4;
  }
};

function Interpreter() {
  this.vars = {};
  this.functions = {};
}

Interpreter.prototype.tokenize = function (program) {
  if (program === "") return [];

  var regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
  return program.split(regex).filter(function (s) {
    return !s.match(/^\s*$/);
  });
};

Interpreter.prototype.optimizingExpression = function (expression) {
  var newExpression = expression;
  for (let i = 0; i < expression.length; i++) {
    let prevChar = expression[i - 1];
    let char = expression[i];
    let nextChar = expression[i + 1];
    if (
      char === "-" &&
      ((simbolos.includes(prevChar) && prevChar != ")") || i == 0) &&
      (nextChar === "(" || !simbolos.includes(nextChar))
    ) {
      newExpression.splice(i, 1, "?"); //replace - to ? in a negative operator
    }
  }
  return newExpression;
};

Interpreter.prototype.postfix = function (expression) {
  var isNumber = /[0-9]+(\.?[0-9]+)?/,
    isVar = /[a-z]/,
    isOperator = /[\+|\-|\*|\/|\(|\%|\?]/; //operator different of )
  var expression = this.optimizingExpression(expression);
  var operadores = [],
    resultado = [];

  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];
    switch (true) {
      case isNumber.test(char): //its a number
        resultado.push(parseFloat(char));
        break;

      case isVar.test(char): //its a variable
        if (this.vars[char]) {
          resultado.push(parseFloat(this.vars[char]));
        } else {
          //if variable doesnt exist, thrown an error
          throw new Error(
            "Invalid identifier. No variable with name " + char + " was found."
          );
        }
        break;

      case isOperator.test(char):
        //precedence
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
        break;

      case /\)/.test(char):
        if (operadores.length > 0) {
          let dato = operadores.pop();
          while (operadores.length > 0 && dato != "(") {
            resultado.push(dato);
            dato = operadores.pop();
          }
        }
        break;
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
        case "%":
          x = pile.pop();
          y = pile.pop();
          pile.push(y % x);
          break;
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

Interpreter.prototype.input = function (expr) {
  var tokens = this.tokenize(expr);
  if(tokens.length == 0){
    return '';
  }
  if (tokens.includes("=")) {
    if(tokens.length > 3){ //if the variable is assigned to a function
      let variableName = tokens[0];
      tokens.splice(0,2);
      this.vars[variableName] = eval(this.postfix(tokens));
      return this.vars[variableName];
    }else{
      this.vars[tokens[0]] = tokens[2];
      return parseFloat(this.vars[tokens[0]]);
    }
  } else {
    return eval(this.postfix(tokens));
  }
};