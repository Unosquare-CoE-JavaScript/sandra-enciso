import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'; //custom hooks by redux
//connect is used by class-based components to Redux
/*
useSelector allows us to then automatically select a part of our state managed by the store
*/

import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch(); // this will dispatch an action against our Redux store
  /*
  When you use useSelector, react redux will automatically set up a subscription to the Redux store for this component
  So your component will be updated and will receive the latest counter automatically whenever that data changes in the Redux store.
  */
  const counter = useSelector(state => state.counter.counter); //detemines which piece of data we wanna extract from our store
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  //Attaching PayLoads to actions
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler(){

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = state => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'increment'}),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//executes the connect function and it returns a new function and we execute this returned passing Counter
