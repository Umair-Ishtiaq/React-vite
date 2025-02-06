import { useRef } from "react";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";
import { useDispatch } from "react-redux";

const controls = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const handleInc = () => {
    console.log("clicked");
    dispatch(counterActions.increment());
  };
  const handledec = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.Add({ num: inputRef.current.value }));
    inputRef.current.value = "";
  };
  const handleSub = () => {
    dispatch(counterActions.Subtract({ num: inputRef.current.value }));
    inputRef.current.value = ""; // inputRef.current.value = "";
  };
  const handleToggle = () => {
    dispatch(privacyActions.toggle());
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary px-4 gap-3"
          onClick={handleInc}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success px-4"
          onClick={handledec}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning px-4"
          onClick={handleToggle}
        >
          Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input
          type="text"
          className="number-input"
          placeholder="Enter Number"
          ref={inputRef}
        />
        <button type="button" className="btn btn-info px-4" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger px-4"
          onClick={handleSub}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
export default controls;
