/* ES6 class */

class Workshop {
    constructor(teacher){
      this.teacher = teacher;
    }
    ask(question){
      console.log(this.teacher, question);
    }
  }
   
  var deepJS = new Workshop("Kyle");
  var reactJS = new Workshop("Susy");
  
  deepJS.ask("Is 'class' a class?");
  
  reactJS.ask("Is this class OK?");