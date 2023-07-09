import React from "react";
import WithLoading from "./WithLoading";

function MyComponents({rand}) {
  return (
    <div>
      {rand}
      <h2>This Is MyComponents:</h2>
      <h3>
        Higher-Order Component (HOC) pattern in React.: Is pattern mein hum ek
        component ko lete hai aur use ek aur component se wrap karke uski
        functionality ko enhance karte hai. HOCs ek function hai jo ek component
        ko parameter ke roop mein leti hai aur ek naya component return karti
        hai. HOCs ko common functionality ko share karne, code reusability ko
        badhane aur cross-cutting concerns ko handle karne ke liye istemal kiya
        jata hai.
      </h3>
      <h4>
        The Higher-Order Component pattern is a way to reuse component logic in
        React. It involves taking an existing component and wrapping it with
        another component to enhance its functionality.
      </h4>
      <h4>
        To create an HOC, you'll typically write a function that accepts a
        component as its parameter and returns a new component that wraps the
        original one. Here's an example to illustrate the concept:
      </h4>
    </div>
  );
}
export default WithLoading(MyComponents);
