/*Module Pattern*/
/*
Modules promote encapsulation, which means the variables and functions are kept private inside the module body and can't be overwritten.
*/
//Namespace pattern (NOT a module)

var workshop = {
    teacher: "Kyle",
    ask(question){
      console.log(this.teacher, question);
    },
  };
  
  workshop.ask("Is this a module?"); // 'Kyle' 'Is this a module?'
  
  //***********************************
  //A module requires the concept of ENCAPSULATE (hiding data and behavior)
  /*Modules encapsulate data and behavior (methods) together. The state (data) of a module is held by its methods via closure*/
  
  var workshop = (function Module(teacher){
    var publicAPI = { ask, };
    return publicAPI;
    
    //*********
    
    function ask(question){
      console.log(teacher, question);
    }  
  })("Kyle");
  
  workshop.ask("It's a module, right?"); //'Kyle' "It's a module, right?"
  
  ///*****************
  
  function WorkshopModule(teacher){
    var publicAPI = { ask, };
    return publicAPI;
    
    //*********
    
    function ask(question){
      console.log(teacher, question);
    }  
  };
  
  var workshop = WorkshopModule("Kyle");
  
  workshop.ask("It's a module, right?"); //'Kyle' "It's a module, right?"