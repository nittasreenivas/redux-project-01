import React from "react";
import { connect } from "react-redux";
const Counter = (props) => {
  console.log("counter-props", props);
  const handleDecrement = () => {
    console.log("decrement button clicked");
    props.dispatch({
      type: "HANDLE_DECREMENT",
      payload: props.counter.count - 1
    });
  };
  const handleIncrement = () => {
    console.log("increment button clicked");
    props.dispatch({
      type: "HANDLE_INCREMENT",
      payload: props.counter.count + 1
    });
  };
  const handleReset = () => {
    console.log("reset button clicked");
    props.dispatch({
      type: "HANDLE_DECREMENT",
      payload: props.counter.count * 0
    });
  };
  return (
    <div>
      <h4> Count: {props.counter.count} </h4>
      <button onClick={handleIncrement}> Increment</button>
      <button onClick={handleDecrement}>Decrement </button>
      <button onClick={handleReset}> Reset</button>
    </div>
  );
};

export default connect(function (store) {
  return store;
})(Counter);
