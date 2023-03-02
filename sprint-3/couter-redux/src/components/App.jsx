import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../redux/actions/counterActions";

const App = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((store) => store.counterReducer);

  const onIncrement = () => {
    if (counter >= 0) {
      dispatch(incrementAction());
    }
  };
  const onDecrement = () => {
    if (counter > 0) {
      dispatch(decrementAction());
    }
  };
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      <span>{counter}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default App;
