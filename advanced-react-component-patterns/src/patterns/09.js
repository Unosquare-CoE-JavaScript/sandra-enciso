/**
 * The state initialisers pattern
 * A simple pattern that allows for configurable initial state, and an optional state reset handler.
 * Passing props to state is generally frowned upon, which is why you have to make sure the value passed here is only an initialiser
 */
import React, {
  useState,
  useLayoutEffect,
  useCallback,
  useRef,
  useEffect,
} from "react";
import mojs from "mo-js";
import styles from "./index.css";
import userStyles from "./usage.css";

/* The initial state of MediumClap Component */
const INITIAL_STATE = {
  count: 0,
  countTotal: 267,
  isClicked: false,
};

/**
 * Custom Hook for animation
 */

const useClapAnimation = ({ clapEl, countEl, clapTotalEl }) => {
  const [animationTimeline, setAnimationTimeLine] = useState(
    () => new mojs.Timeline()
  ); //the initial state is an instance of Timeline

  /*
           The signature is identical to useEffect, but it fires synchronously after all DOM mutations.
           Use this to read layout from the DOM and synchronously re-render. 
           Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.
           */
  useLayoutEffect(() => {
    if (!clapEl || !countEl || !clapTotalEl) {
      return;
    }

    const tlDuration = 300; //the timelapse duration
    const scaleButton = new mojs.Html({
      //animation properties
      el: clapEl, //element(s) to target
      duration: tlDuration, //ms
      scale: { 1.3: 1 }, //the initial animation scale is 1.3 and the final is 1
      easing: mojs.easing.ease.out, //makes the animation look come alive
    });

    //its an essential element from which the bursts it comes out of
    const triangleBurst = new mojs.Burst({
      parent: clapEl,
      radius: { 50: 95 },
      count: 5, //total of elements which burts
      angle: 30,
      children: {
        //the particles that bursts
        shape: "polygon",
        radius: { 6: 0 },
        stroke: "rgba(211,54,0,0.5)",
        strokeWidth: 2,
        angle: 210,
        speed: 0.2,
        delay: 30,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        duration: tlDuration,
      },
    });

    const circleBurst = new mojs.Burst({
      parent: clapEl,
      radius: { 50: 75 },
      angle: 25,
      duration: tlDuration,
      children: {
        shape: "circle",
        fill: "rgba(149,165,166,0.5)",
        delay: 30,
        speed: 0.2,
        radius: { 3: 0 },
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
      },
    });

    /** Animation to ClapCount component */
    const countAnimation = new mojs.Html({
      el: countEl,
      opacity: { 0: 1 }, //opacity starts at 0 and then increases to 1
      y: { 0: -30 }, //y axis transformation
      duration: tlDuration,
    }).then({
      //then fades
      opacity: { 1: 0 },
      y: -80,
      delay: tlDuration / 2,
    });

    /* New animation to CountTotal component */
    const countTotalAnimation = new mojs.Html({
      el: clapTotalEl,
      opacity: { 0: 1 },
      delay: (3 * tlDuration) / 2, //the time period where nothing happens
      duration: tlDuration,
      y: { 0: -3 }, //y axis transformation. Starts at center, then to -3
    });

    //clapEl
    if (typeof clapEl === "string") {
      const clap = document.getElementById("clap");
      clap.style.transform = "scale(1,1)"; //initiales the scale 1,1
    } else {
      clapEl.style.transform = "scale(1,1)";
    }

    const newAnimationTimeline = animationTimeline.add([
      scaleButton,
      countTotalAnimation,
      countAnimation,
      triangleBurst,
      circleBurst,
    ]);
    setAnimationTimeLine(newAnimationTimeline);
  }, [clapEl, countEl, clapTotalEl]); //No dependecies, only run once

  return animationTimeline;
};

/**
 *  useDOMRef Hook
 */

const useDOMRef = () => {
  const [DOMRef, setRefState] = useState({}); //the initial state is an empty object

  const setRef = useCallback((node) => {
    //save the node
    setRefState((prevRefState) => ({
      ...prevRefState,
      [node.dataset.refkey]: node,
    }));
    /* The fact that we can save to state/setState here is a major reason we're using the callback ref as setting state re-renders the component
               and forces useClapAnimation to be reinvoked with the received refs */
  }, []);
  return [DOMRef, setRef];
};

/**
 * custom hook for getting previous prop/state
 */
/**The fist time you pass a value here, we create an object.
 * useEffect is never called ultil the return statement of the functional component is reached
 */
const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current; // the first time is undefined. This is undefined because the ref object is created without an initial value passes in.
};

/**
 * Function which returns an array of functions
 */
const callFnsInSequence =
  (...fns) =>
  (...args) => {
    //get the functions (parameters) as an array
    fns.forEach((fn) => fn && fn(...args)); //goes trough the functions and then execute them
  };

/**
 * custom hook for useClapState
 */
//This custom hook manages the state of the clap: isClicked, count, countTotal and the event that fire the change of state: onclick
const useClapState = (initialState = INITIAL_STATE) => {
  const MAXIMUM_USER_CLAP = 50;
  const userInitialState = useRef(initialState);
  const [clapState, setClapState] = useState(initialState);
  const { count, countTotal } = clapState;
  const updateClapState = useCallback(() => {
    setClapState(({ count, countTotal }) => ({
      isClicked: true,
      count: Math.min(count + 1, MAXIMUM_USER_CLAP),
      countTotal: count < MAXIMUM_USER_CLAP ? countTotal + 1 : countTotal,
    }));
  }, [count, countTotal]);

  //every single time the user calls  the reset function, we increase this glorified counter
  const resetRef = useRef(0);

  const prevCount = usePrevious(count);

  //reset the state
  const reset = useCallback(() => {
    //check if a previous value change
    if (prevCount !== count) {
      setClapState(userInitialState.current);
      resetRef.current++;
    }
  }, [setClapState, userInitialState, resetRef, prevCount, count]);

  //accesibility
  //prop collection for 'click'
  const getTogglerProps = ({ onClick, ...otherProps } = {}) => ({
    onClick: callFnsInSequence(updateClapState, onClick), //If I want to execute my internal function and the user function
    //onClick: updateClapState, //refs to updateClapState
    "aria-pressed": clapState.isClicked,
    ...otherProps,
  });

  //props collection for 'count'
  /**Every single user who uses the counterProps collection, is going to have this  */
  const getCounterProps = ({ ...otherProps } = {}) => ({
    count,
    "aria-valuemax": MAXIMUM_USER_CLAP,
    "aria-valuemin": 0,
    "aria-valuenow": count,
    ...otherProps,
  });

  return {
    clapState,
    updateClapState,
    getTogglerProps,
    getCounterProps,
    reset,
    resetDep: resetRef.current,
  }; //returns an object of properties
};

/**
 * custom useEffectAfterMount hook
 */
//Takes in a callback and it takes in an array dependency
const useEffectAfterMount = (cb, deps) => {
  /* This allows us to dont execute useEffect when mount */
  const componentJustoMounted = useRef(true); //the first time when runs, its true

  /* Count changes when the user clicks */
  useEffect(() => {
    if (!componentJustoMounted.current) {
      //if isnt the first time, then execute it
      return cb();
    } else {
      componentJustoMounted.current = false;
    }
  }, deps);
};

/**
 * subcomponents
 */

/* This component wraps the ClapIcon, ClapCount and CountTotal components */
const ClapContainer = ({ children, setRef, handleClick, ...restProps }) => {
  //in restProps is the data-refkey and is sended by the parent component Usage
  return (
    <button
      ref={setRef}
      className={styles.clap}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

/* This ClapIcon component is only the icon of the hands clapping */
const ClapIcon = ({ isClicked }) => {
  return (
    <span>
      <svg
        id="clapIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-549 338 100.1 125"
        className={`${styles.icon} ${isClicked && styles.checked}`}
      >
        <path d="M-471.2 366.8c1.2 1.1 1.9 2.6 2.3 4.1.4-.3.8-.5 1.2-.7 1-1.9.7-4.3-1-5.9-2-1.9-5.2-1.9-7.2.1l-.2.2c1.8.1 3.6.9 4.9 2.2zm-28.8 14c.4.9.7 1.9.8 3.1l16.5-16.9c.6-.6 1.4-1.1 2.1-1.5 1-1.9.7-4.4-.9-6-2-1.9-5.2-1.9-7.2.1l-15.5 15.9c2.3 2.2 3.1 3 4.2 5.3zm-38.9 39.7c-.1-8.9 3.2-17.2 9.4-23.6l18.6-19c.7-2 .5-4.1-.1-5.3-.8-1.8-1.3-2.3-3.6-4.5l-20.9 21.4c-10.6 10.8-11.2 27.6-2.3 39.3-.6-2.6-1-5.4-1.1-8.3z" />
        <path d="M-527.2 399.1l20.9-21.4c2.2 2.2 2.7 2.6 3.5 4.5.8 1.8 1 5.4-1.6 8l-11.8 12.2c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l34-35c1.9-2 5.2-2.1 7.2-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l28.5-29.3c2-2 5.2-2 7.1-.1 2 1.9 2 5.1.1 7.1l-28.5 29.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.4 1.7 0l24.7-25.3c1.9-2 5.1-2.1 7.1-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l14.6-15c2-2 5.2-2 7.2-.1 2 2 2.1 5.2.1 7.2l-27.6 28.4c-11.6 11.9-30.6 12.2-42.5.6-12-11.7-12.2-30.8-.6-42.7m18.1-48.4l-.7 4.9-2.2-4.4m7.6.9l-3.7 3.4 1.2-4.8m5.5 4.7l-4.8 1.6 3.1-3.9" />
      </svg>
    </span>
  );
};

/* This component is the green circle that appears showing the total claps that the user did and this appear when the user claps */
const ClapCount = ({ count, setRef, ...restProps }) => {
  return (
    <span ref={setRef} className={styles.count} {...restProps}>
      +{count}
    </span>
  );
};

/* This component shows the total of claps */
const CountTotal = ({ countTotal, setRef, ...restProps }) => {
  //
  return (
    <span ref={setRef} className={styles.total} {...restProps}>
      {countTotal}
    </span>
  );
};

//export default MediumClap;

/**
 * Usage
 */
//An alternative export estrategy
// - custom hooks
// - UI components
const userInitialState = {
  //the initial state of the user
  count: 0,
  countTotal: 1000,
  isClicked: false,
};
const Usage = () => {
  const {
    clapState,
    updateClapState,
    getTogglerProps,
    getCounterProps,
    reset,
    resetDep,
  } = useClapState(userInitialState); //when the state has been called, the user can pass an initial state
  const { count, countTotal, isClicked } = clapState;

  const [{ clapRef, clapCountRef, clapTotalRef }, setRef] = useDOMRef();
  const animationTimeline = useClapAnimation({
    clapEl: clapRef,
    countEl: clapCountRef,
    clapTotalEl: clapTotalRef,
  });

  useEffectAfterMount(() => {
    animationTimeline.replay();
  }, [count]); //every time that count is updated (when the user claps), after that, executes the animation

  const [uploadingReset, setUpload] = useState(false);

  //handle side effects after user reset
  useEffectAfterMount(() => {
    //side effects
    setUpload(true);

    const id = setTimeout(() => {
      setUpload(false);
    }, 3000);

    return () => clearTimeout(id);
  }, [resetDep]);

  const handleClick = () => {
    console.log("CLICKED!!!");
  };

  return (
    /** Every single user who uses ClapContainer is going to have to pass onClick
     * ClapCount shows or displays a count
     */
    <div>
      <ClapContainer
        setRef={setRef}
        data-refkey="clapRef"
        {...getTogglerProps({
          onClick: handleClick,
          "aria-pressed": false,
        })}
      >
        {/* invoke getTooglerProps function to return a props collection */}
        <ClapIcon isClicked={isClicked} />
        {/* The advantage of having done this is the user can go ahead and render another completely different component */}
        <ClapCount
          setRef={setRef}
          data-refkey="clapCountRef"
          {...getCounterProps()}
        />
        <CountTotal
          countTotal={countTotal}
          setRef={setRef}
          data-refkey="clapTotalRef"
        />
      </ClapContainer>
      <section>
        <button onClick={reset} className={userStyles.resetBtn}>
          reset
        </button>
        <pre className={userStyles.resetMsg}>
          {JSON.stringify({ count, countTotal, isClicked })}{" "}
          {/*Print the current user state*/}
        </pre>
        <pre className={userStyles.resetMsg}>
          {uploadingReset ? `uploading reset ${resetDep} ...` : ""}
        </pre>
      </section>
    </div>
  );
};

export default Usage;
