/********* Advanced Scope: CLosure ********/

/****** Closure Advanced Scope ******/

const findSomeone = () => {

  const speak = () => {
    console.log(who);
  };

  let who = 'Why hello there, Prof Plum!';

  return speak;
};

const someoneSpeak = findSomeone()

someoneSpeak();
///////////

const makeTimer = () => {
  let elapsed = 0;

  const stopwatch = () => { return elapsed; };

  const increase = () => elapsed++;

  setInterval(increase, 1000);

  return stopwatch;

};

let timer = makeTimer();

timer();