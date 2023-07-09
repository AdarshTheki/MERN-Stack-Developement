import React, { useState } from "react";

// Input Components
const Inputs = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  return (
    <div>
      <input type='text' value={value} onChange={handleChange} />
      {props.renderValue(value)}
    </div>
  );
};

// Return MyComponents
const MyComponents = () => {
  const showValue = (value) => <h2>The Value is : {value}</h2>;
  const MultiplyValue = (value) => (
    <h2>The Multiply value is : {value * 10}</h2>
  );
  return (
    <>
      <p>
        Yeh pattern tab istemal hota hai jab hum ek component ko ek function ke
        roop mein pass karte hai, jise hum "render" prop kehte hai. Yeh function
        ko hum component ke andar render karne ke liye use karte hai. Is pattern
        ka istemal karte hue, hum components ko dynamic bana sakte hai aur code
        reusability ko badha sakte hai.
      </p>
      <Inputs renderValue={showValue} />
      <Inputs renderValue={MultiplyValue} />
    </>
  );
};
export default MyComponents;
