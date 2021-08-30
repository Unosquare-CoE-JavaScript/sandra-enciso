/*Arrow functions and lexical this*/
/*
Arrow functions do not have their own value of this. The value of this in an arrow function is inherited from the enclosing (lexical) scope.
*/
/*
Only use arrow functions when you need lexical this.
*/
var workshop = {
    teacher: "Kyle",
    ask(question) {
        setTimeout(() => {
        console.log(this.teacher, question); //this is at the ask scope
        }, 100);
    },
};

workshop.ask("Is this lexical 'this'?"); //'Kyle' "Is this lexical 'this'?"

//****************************
//Objects doesn't have scope. So this takes global scope
var workshop = {
    teacher: "Kyle",
    ask: (question) => { //scope of this arrow function? Global scope
        console.log(this.teacher, question);
    },
};

workshop.ask("What happened to 'this'?");
//undefined "What happened to 'this'?"

workshop.ask.call(workshop, "Still no 'this'?" );
//undefined "Still no 'this'?"