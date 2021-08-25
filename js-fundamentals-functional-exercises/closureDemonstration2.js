/********* Advanced Scope: CLosure ********/

/////Closure Advanced Scope

/*
In the calls to the function expression, we are accessing to the variable 'n' and this changes every time we call the function
This is Closure
*/
const countClues = () => {
  let n = 0;

  return {
    count: () => n++,
    reset: () => n = 0
  };
};

const c = countClues(), d = countClues();

c.count(); //0 Returns 0 because n++ returns the old value of n (its 0)
d.count(); //0
c.reset(); //0
c.count(); //0
d.count(); //1
