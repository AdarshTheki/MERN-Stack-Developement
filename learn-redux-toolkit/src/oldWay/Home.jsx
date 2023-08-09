import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({
      type: "INC",
    });
  };
  const decrement = () => {
    dispatch({
      type: "DEC",
    });
  };
  const addBy = () => {
    dispatch({
      type: "ADD",
      payload: 10,
    });
  };
  return (
    <>
      <h2>Counter Home</h2>
      <h2>{counter}</h2>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <br />
      <button onClick={addBy}>Add by 10</button>
    </>
  );
};

export default Home;
