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
