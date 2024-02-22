import React from "react";
import Header from "./Header";
import Products from "./Products";
import { useSelector } from "react-redux";

const Layout = () => {
  const product = useSelector((state) => state.product);

  const total = product.reduce((acc, curr) => acc + curr?.price * curr?.quantity, 0 );

  return (
    <React.Fragment>
      <div className='layout'>
        <Header />
        <Products />
        <div className='total-price'>
          <h3>
            Total: $<span style={{ color: "red" }}>{total}</span>
          </h3>
          <button className='orderBtn'>Place Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
