import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from './WeatherApp/App';
// import App from "./App";
// import App from "./Router/App";
// import Hooks from "./Projects/Hooks/Hooks";
// import App from "./Projects/Restaurant/App";
// import App from "./Projects/TodoList/App";
import App from "./Projects/WeatherApp/App";
// import App from "./Projects/PortFolio/App";

import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Redux Use
// import App from "./Component_6/App.js";
// import { createStore } from "redux";
// import reducer from "./Component_6/reducer";
// import { Provider } from "react-redux";
// const store = createStore(reducer);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
