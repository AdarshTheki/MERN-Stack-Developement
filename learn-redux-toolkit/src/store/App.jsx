import { useSelector, useDispatch } from "react-redux";
import { actions } from "./index";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementValue = () => {
    dispatch(actions.increment());
  };

  const decrementValue = () => {
    dispatch(actions.decrement());
  };

  const addByValue = () => {
    dispatch(actions.addBy(100));
  };
  return (
    <>
      <h2>Counter App</h2>
      <h2>{counter}</h2>
      <button onClick={incrementValue}>INCREMENT</button>
      <button onClick={decrementValue}>DECREMENT</button>
      <br />
      <button onClick={addByValue}>Add by 10</button>
    </>
  );
};

export default App;
