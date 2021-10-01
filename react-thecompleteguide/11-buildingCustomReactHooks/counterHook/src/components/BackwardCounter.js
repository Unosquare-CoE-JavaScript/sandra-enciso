/* This component adds or substract 1 to the counter */
import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter';

const BackwardCounter = (forwads = true) => {
  useCounter(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(forwads){
        setCounter((prevCounter) => prevCounter + 1);
      }else{
        setCounter((prevCounter) => prevCounter - 1);
      }
      
    }, 1000); //every second executes the function forwaded

    return () => clearInterval(interval);
  }, []);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
