/********* Advanced Scope: CLosure ********/

/****** Closure Advanced Scope ******/

const countClues = () => {
  let n = 0;

  return {
    count: () => n++,
    reset: () => n = 0
  };
};

const c = countClues(), d = countClues();

c.count(); //0
d.count(); //0
c.reset(); //0
c.count(); //0
d.count(); //1