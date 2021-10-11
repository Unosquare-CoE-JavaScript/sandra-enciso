/**
 * Extensible Styles
 * Refardless of the component you build, a common requirement is allowing the override and addition of new styles.
 * Allow users style your components like any other element/component in their app. This is a string yet rewarding philosophy to work by.
 */
import React, {
  useState,
  useLayoutEffect,
  useCallback,
  createContext,
  useMemo,
  useContext,
  useRef,
  useEffect,
} from "react";
import mojs from "mo-js";
import styles from "./index.css";
import userCustomStyles from "./usage.css";

/* The initial state of MediumClap Component */
const initialState = {
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

/*
  Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
  */

const MediumClapContext = createContext();
const { Provider } = MediumClapContext;

/*Clap Component */
/* Provide a contect object for which is going to hold all the state values and all the values required by the child components  */
const MediumClap = ({
  children,
  onClap,
  style: userStyles = {},
  className,
}) => {
  const MAXIMUM_USER_CLAP = 50;
  const [clapState, setClapState] = useState(initialState);
  const { count } = clapState;

  const [{ clapRef, clapCountRef, clapTotalRef }, setRefState] = useState({}); //the initial state is an empty object

  const setRef = useCallback((node) => {
    //save the node
    setRefState((prevRefState) => ({
      ...prevRefState,
      [node.dataset.refkey]: node,
    }));
    /* The fact that we can save to state/setState here is a major reason we're using the callback ref as setting state re-renders the component
        and forces useClapAnimation to be reinvoked with the received refs */
  }, []);

  const animationTimeline = useClapAnimation({
    clapEl: clapRef,
    countEl: clapCountRef,
    clapTotalEl: clapTotalRef,
  });

  /* This allows us to dont execute useEffect when mount */
  const componentJustoMounted = useRef(true); //the first time when runs, its true

  /* Count changes when the user clicks */
  useEffect(() => {
    if (!componentJustoMounted.current) {
      //if isnt the first time, then execute it
      onClap && onClap(clapState); //onClap passing, then execute it
    } else {
      componentJustoMounted.current = false;
    }
  }, [count]);

  const handleClapClick = () => {
    animationTimeline.replay(); //animates the component
    //set state
    setClapState((prevState) => ({
      isClicked: true,
      count: Math.min(prevState.count + 1, MAXIMUM_USER_CLAP),
      countTotal:
        count < MAXIMUM_USER_CLAP
          ? prevState.countTotal + 1
          : prevState.countTotal,
    }));
    //count + 1
    //countTotal + 1
  };

  const memoizedValue = useMemo(
    () => ({ ...clapState, setRef }),
    [clapState, setRef]
  );

  const classNames = [styles.clap, className].join(" ").trim();

  return (
    <Provider value={memoizedValue}>
      {" "}
      {/* Provides value to all its childs */}
      <button
        ref={setRef}
        data-refkey="clapRef"
        //className={styles.clap} /* this is an internal class */
        className={classNames}
        onClick={handleClapClick}
        style={userStyles}
      >
        {children}
      </button>
    </Provider>
  );
};

/**
 * subcomponents
 */

/* This ClapIcon component is only the icon of the hands clapping */
const ClapIcon = ({ style: userStyles = {}, className }) => {
  const { isClicked } = useContext(MediumClapContext);
  const classNames = [styles.icon, isClicked ? styles.checked : "", className]
    .join(" ")
    .trim();
  return (
    <span>
      <svg
        id="clapIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-549 338 100.1 125"
        //className={`${styles.icon} ${isClicked && styles.checked}`}
        className={classNames}
        style={userStyles}
      >
        <path d="M-471.2 366.8c1.2 1.1 1.9 2.6 2.3 4.1.4-.3.8-.5 1.2-.7 1-1.9.7-4.3-1-5.9-2-1.9-5.2-1.9-7.2.1l-.2.2c1.8.1 3.6.9 4.9 2.2zm-28.8 14c.4.9.7 1.9.8 3.1l16.5-16.9c.6-.6 1.4-1.1 2.1-1.5 1-1.9.7-4.4-.9-6-2-1.9-5.2-1.9-7.2.1l-15.5 15.9c2.3 2.2 3.1 3 4.2 5.3zm-38.9 39.7c-.1-8.9 3.2-17.2 9.4-23.6l18.6-19c.7-2 .5-4.1-.1-5.3-.8-1.8-1.3-2.3-3.6-4.5l-20.9 21.4c-10.6 10.8-11.2 27.6-2.3 39.3-.6-2.6-1-5.4-1.1-8.3z" />
        <path d="M-527.2 399.1l20.9-21.4c2.2 2.2 2.7 2.6 3.5 4.5.8 1.8 1 5.4-1.6 8l-11.8 12.2c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l34-35c1.9-2 5.2-2.1 7.2-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l28.5-29.3c2-2 5.2-2 7.1-.1 2 1.9 2 5.1.1 7.1l-28.5 29.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.4 1.7 0l24.7-25.3c1.9-2 5.1-2.1 7.1-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l14.6-15c2-2 5.2-2 7.2-.1 2 2 2.1 5.2.1 7.2l-27.6 28.4c-11.6 11.9-30.6 12.2-42.5.6-12-11.7-12.2-30.8-.6-42.7m18.1-48.4l-.7 4.9-2.2-4.4m7.6.9l-3.7 3.4 1.2-4.8m5.5 4.7l-4.8 1.6 3.1-3.9" />
      </svg>
    </span>
  );
};

/* This component is the green circle that appears showing the total claps that the user did and this appear when the user claps */
const ClapCount = ({ style: userStyles = {}, className }) => {
  const { count, setRef } = useContext(MediumClapContext);
  const classNames = [styles.count, className].join(" ").trim();
  return (
    <span
      ref={setRef}
      data-refkey="clapCountRef"
      //className={styles.count}
      className={classNames}
      style={userStyles}
    >
      +{count}
    </span>
  );
};

/* This component shows the total of claps */
const CountTotal = ({ style: userStyles = {}, className }) => {
  const { countTotal, setRef } = useContext(MediumClapContext);
  const classNames = [styles.total, className].join(" ").trim();
  return (
    <span
      ref={setRef}
      data-refkey="clapTotalRef"
      //className={styles.total}
      className={classNames}
      style={userStyles}
    >
      {countTotal}
    </span>
  );
};

//export default MediumClap;

MediumClap.Icon = ClapIcon;
MediumClap.Count = ClapCount;
MediumClap.Total = CountTotal;

/**
 * Usage
 */
const Usage = () => {
  const [count, setCount] = useState(0);
  //Obtain the state of MediumClap
  const handleClap = (clapState) => {
    setCount(clapState.count);
  };
  return (
    //Using inlineStyles
    // <div style={{ width: "100%" }}>
    //   <MediumClap onClap={handleClap} style={{ border: "1px solid red" }}>
    //     <MediumClap.Icon />
    //     <MediumClap.Count style={{ background: "#8cacea" }} />
    //     <MediumClap.Total style={{ background: "#8cacea", color: "black" }} />
    //   </MediumClap>
    //   {!!count && ( //if count exists
    //     <div className={styles.info}>{`You have clapped ${count} times`}</div>
    //   )}
    // </div>
    //using className
    <div style={{ width: "100%" }}>
      <MediumClap onClap={handleClap} className={userCustomStyles.clap}>
        <MediumClap.Icon className={userCustomStyles.icon} />
        <MediumClap.Count className={userCustomStyles.count} />
        <MediumClap.Total className={userCustomStyles.total} />
      </MediumClap>
      {!!count && ( //if count exists
        <div className={styles.info}>{`You have clapped ${count} times`}</div>
      )}
    </div>
  );
};

export default Usage;
