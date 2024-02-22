import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Navbar from "./NavBar";
import CartContainer from "./CartContainer";
import { calculateTotals, getCartItems } from "./reducers/cartSlice";
import { store } from "./reducers/store";
import "./App.css";

const Main = () => {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cartItems]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
export default App;
