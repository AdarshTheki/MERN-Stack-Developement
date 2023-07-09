import { useSelector, useDispatch } from "react-redux";
import { actions } from "./index";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addBy = () => {
    dispatch(actions.addBy(100));
  };
  return (
    <>
      <h2>Counter App</h2>
      <h2>{counter}</h2>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <br />
      <button onClick={addBy}>Add by 10</button>
    </>
  );
};

export default App;
