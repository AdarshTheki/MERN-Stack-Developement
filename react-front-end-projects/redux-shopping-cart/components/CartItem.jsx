import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../reducers/cartSlice";

const CartItem = ({ name, quantity, price, id }) => {
  const total = price * quantity;

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeFromCart({ id }));
  };

  const increaseQtyHandler = () => {
    dispatch(increaseQuantity(id));
  };
  const decreaseQtyHandler = () => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className='cartItem'>
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <div className='buttons'>
        <button className='cart-actions' onClick={increaseQtyHandler}>
          Qty +
        </button>
        <button className='cart-actions' onClick={decreaseQtyHandler}>
          Qty -
        </button>
        <button className='cart-actions' onClick={removeHandler}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
