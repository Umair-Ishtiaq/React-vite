import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reSet,
  add,
  subtract,
} from "../store/slices/counterSlice";
import { useRef } from "react";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const Reset = () => {
    dispatch(reSet());
    inputRef.current.value = 0;
  };
  return (
    <>
      <section>
        <p>{count}</p>
        <input type="number" placeholder="Enter number" ref={inputRef} />
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={Reset}>reset</button>
        <button onClick={() => dispatch(add(Number(inputRef.current.value)))}>
          add
        </button>
        <button
          onClick={() => dispatch(subtract(Number(inputRef.current.value)))}
        >
          subtract
        </button>
      </section>
    </>
  );
};

export default Counter;
