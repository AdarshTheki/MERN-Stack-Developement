import React, { useEffect } from "react";
import Modal from "./MobilesCarts/Modal";
import Navbar from "./MobilesCarts/NavBar";
import CartContainer from "./MobilesCarts/CartContainer";

import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./reducers/cartSlice";

const App = () => {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

  if(isLoading){
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal/>}
      <Navbar/>
      <CartContainer />
    </main>
  );
};

export default App;
