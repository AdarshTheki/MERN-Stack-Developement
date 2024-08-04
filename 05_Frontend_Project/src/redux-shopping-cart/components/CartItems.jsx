import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartItems = () => {
  const product = useSelector((state) => state.product);
  return (
    <div className='cart-container'>
      <h2>Your Cart</h2>
      <ul>
        {product.map((item) => {
          return(
          <li key={item.id}>
            <CartItem {...item} />
          </li>
        )})}
      </ul>
    </div>
  );
};

export default CartItems;
