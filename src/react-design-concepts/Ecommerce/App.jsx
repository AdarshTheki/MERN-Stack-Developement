import React from "react";
import ProductLists from "./ProductLists";
import Cart from "./Cart.jsx";
import { store } from "./reducers/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <ProductLists />
      <hr />
      <Cart />
    </Provider>
  );
};

export default App;
