import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";

const Counter = () => {
  const { counter, isCounterVisible } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const onToggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const onIncrementCounter = () => {
    dispatch(counterActions.increment());
  };

  const onDecrementCounter = () => {
    dispatch(counterActions.decrement());
  };

  const onIncrease = () => {
    dispatch(counterActions.increase(10)); // {type: SOME_ID, payload: 10}
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{isCounterVisible && counter}</div>
      <div>
        <button onClick={onToggleCounterHandler}>Toggle Counter</button>
        <button onClick={onIncrementCounter}>increment Counter</button>
        <button onClick={onDecrementCounter}>decrement Counter</button>
        <button onClick={onIncrease}>increase by 10</button>
      </div>
    </main>
  );
};

// class Counter extends Component {
//   onToggleCounterHandler() {
//     this.props.toggleCounter();
//   }

//   onIncrementCounter() {
//     this.props.increment();
//   }

//   onDecrementCounter() {
//     this.props.decrement();
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>
//           {this.props.isCounterVisible && this.props.counter}
//         </div>
//         <div>
//           <button onClick={this.onToggleCounterHandler.bind(this)}>
//             Toggle Counter
//           </button>
//           <button onClick={this.onIncrementCounter.bind(this)}>
//             increment Counter
//           </button>
//           <button onClick={this.onDecrementCounter.bind(this)}>
//             decrement Counter
//           </button>
//         </div>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//     isCounterVisible: state.isCounterVisible,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//     toggleCounter: () => dispatch({ type: "TOGGLE_COUNTER" }),
//   };
// };

export default Counter;
