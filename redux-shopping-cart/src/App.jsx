import "./App.css";
import "./index.css";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import CartItems from "./components/CartItems";
import Layout from "./components/Layout";
import store from "./store/store.js";
import { Provider } from "react-redux";
import React from "react";

const Main = () => {
  const users = useSelector((state) => state.user);
  const { user, isAuthenticated } = users;
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Name: {user?.name} Email: {user?.email}</h2>
          <Layout />
          <CartItems />
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
};

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Main />
      </Provider>
    </React.StrictMode>
  );
}
export default App;
