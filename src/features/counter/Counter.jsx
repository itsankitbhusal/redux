import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          fontSize: "10rem",
        }}
      >
        <button
          style={{
            fontSize: "10rem",
            padding: "0rem 5rem 0rem 5rem",
            margin: "5rem",
          }}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span
          style={{
            padding: "5rem",
          }}
        >
          {count}
        </span>
        <button
          style={{
            fontSize: "10rem",
            padding: "0rem 5rem 0rem 5rem",
            margin: "5rem",
          }}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
