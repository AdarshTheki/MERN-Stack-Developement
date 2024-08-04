import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const product = useSelector(state => state.product)

  return (
    <div className='cartIcon'>
      <h3>Cart: {product?.length} Items</h3>
    </div>
  );
};

export default Cart;
