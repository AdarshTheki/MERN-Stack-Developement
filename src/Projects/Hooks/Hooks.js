import React, { useState, useEffect, useReducer } from "react";

const Hooks = () => {

  //! UseState How Works
  const initialData = 0;
  const [myNum, setMyNum] = useState(initialData);

  //! UseEffect How Works
  useEffect(() => {
    document.title = `CHAT(${myNum})`;
  });

  //! Reducer How Works
  const Reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      state = state + 1;
    }
    if (state > 0 && action.type === "DECREMENT") {
      state = state - 1;
    }
    return state;
  };
  const InitialData = 10;
  const [state, dispatch] = useReducer(Reducer, InitialData);

  return (
    <>
      <div className='center_div'>
        <p>{myNum}</p>
        <button onClick={() => setMyNum(myNum + 1)}>INCREMENT</button>
        <br />
        <button onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
          DECREMENT
        </button>
      </div>
      <br />
      <br />
      <div className='center_div'>
        <p>{state}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <br />
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </button>
      </div>
    </>
  );
}
export default Hooks;