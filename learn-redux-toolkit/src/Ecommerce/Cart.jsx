import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "./reducers/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleIncreaseQty = (item) => {
    dispatch(increaseQty(item));
  };
  const handleDecreaseQty = (item) => {
    dispatch(decreaseQty(item));
  };

  // const TotalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  var TotalPrice = 0

  return (
    <div>
      <h2>shopping Cart</h2>
      <div>
        {cartItems.map((product) => {
          TotalPrice += product?.qty * product?.price
          return(
          <div key={product.id}>
            <p>
              {product.name}, ${product.price} , qty:{product?.qty}
            </p>
            <p>Total: ${product?.qty * product?.price}</p>
            <button onClick={() => handleIncreaseQty(product)}>+</button>{" "}
            <button onClick={() => handleDecreaseQty(product)}>-</button>{" "}
            <button onClick={() => handleRemoveFromCart(product)}>
              remove to cart
            </button>
          </div>
        )})}
      </div>
        <h1>{TotalPrice=== 0 ? "Don't have any Product in your Cart" : `Totals: ${TotalPrice}`}</h1>
    </div>
  );
};

export default Cart;
