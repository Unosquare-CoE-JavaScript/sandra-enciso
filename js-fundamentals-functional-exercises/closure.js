/********* Advanced Scope: CLosure ********/

/****** Closure Advanced Scope ******/

const myAlert = () => {
  const x = "Help! I think I found a clue!";
  const alerter = () => {
    console.log(x);
  };
  setTimeout(alerter, 1000);
  console.log('what happens first? this log or the aler?'); //This first
};

myAlert();

////////////
