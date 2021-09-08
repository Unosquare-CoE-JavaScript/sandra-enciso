/*
Simulates the states of a phone
*/
const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//States of the phone
let State = Object.freeze({
  offHook: 'off hook',
  connecting: 'connecting',
  connected: 'connected',
  onHold: 'on hold',
  onHook: 'on hook'
});

/* Trigger is the action that changes the state */
let Trigger = Object.freeze({
  callDialed: 'dial a number',
  hungUp: 'hang up',
  callConnected: 'call is connected',
  placedOnHold: 'placed on hold',
  takenOffHold: 'taken off hold',
  leftMessage: 'leave a message'
});

/* Rules of the transitions. Defines the relationship between the states */
let rules = {};
rules[State.offHook] = [
  {
    trigger: Trigger.callDialed, //The trigger of the new state
    state: State.connecting //The new state
  }
];
rules[State.connecting] = [
  {
    trigger: Trigger.hungUp,
    state: State.onHook
  },
  {
    trigger: Trigger.callConnected,
    state: State.connected
  }
];
rules[State.connected] = [
  {
    trigger: Trigger.leftMessage,
    state: State.onHook
  },
  {
    trigger: Trigger.hungUp,
    state: State.onHook
  },
  {
    trigger: Trigger.placedOnHold,
    state: State.onHold
  }
];
rules[State.onHold] = [
  {
    trigger: Trigger.takenOffHold,
    state: State.connected
  },
  {
    trigger: Trigger.hungUp,
    state: State.onHook
  }
];

let state = State.offHook;
let exitState = State.onHook;

let getInput = function() {
  let prompt = [  //print the current state
    `The phone is currently ${state}`,
    'What\'s next:'
  ];

  /* List of all the transtitions */
  for (let i = 0; i < rules[state].length; ++i)
  {
    let t = rules[state][i].trigger;
    prompt.push(`${i}. ${t}`);
  }

  // force an extra line break
  prompt.push('');

  rl.question(prompt.join('\n'), function(answer) //Question for the user
  {
    let input = parseInt(answer);
    state = rules[state][input].state; // The next state -> answer

    if (state !== exitState) // if doesn't choose the exit state, then call this functio again
      getInput();
    else { //finishing
      console.log('We are done using the phone.');
      rl.close();
    }
  });
};

getInput();