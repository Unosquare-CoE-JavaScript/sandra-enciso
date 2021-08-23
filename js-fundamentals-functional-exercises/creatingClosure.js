/********* Advanced Scope: CLosure ********/

/****** Closure Advanced Scope ******/

const myAlert = () => {
    const x = "Help! I think I found a clue!";
    let count = 0;
    const alerter = () => {
      console.log(`${x} ${++count}`);
    };
    return alerter; 
  };
  
  const funcAlert = myAlert(); 
  const funcAlert2 = myAlert(); 
  funcAlert(); //1
  funcAlert(); //2
  funcAlert2(); //1
  