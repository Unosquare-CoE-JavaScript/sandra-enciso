/* This custom hook use useState to storage the counter
then use useEffect to execute a function which forward or backward the counter  */
import { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCounter(counterUpdateFn());
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter;