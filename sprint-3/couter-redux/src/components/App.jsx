import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../redux/actions/counterActions";
import "./app.css";

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
      <button onClick={onDecrement}>
        <span className="material-symbols-outlined btn">remove</span>
      </button>
      <span>{counter}</span>
      <button onClick={onIncrement}>
        <span className="material-symbols-outlined btn">add</span>
      </button>
    </div>
  );
};

export default App;
