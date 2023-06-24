import "./App.css";
import { useState } from "react";
import {data} from './Data.js'

function UseState() {
  
  const [value, setValue] = useState(0);
  const handleChange = () => {
    setTimeout(() => {
      console.log("Clicked");
      setValue((curr) => {
        return curr + 1
      });
    },2000);
  };

  //// Second Example:
  // const [person, setPerson] = useState({
  //   name: "Adarsh",
  //   age: 24,
  //   hobby: "Summing a Pull of the Earth",
  // });
  // const displayPerson = () => {
  //   setPerson({ ...person, name: "Ayush Verma"});
  // };

  //// First Example:
  // const [people, setPeople] = useState(data);
  // const clearAllItems = () => {
  //   setPeople([]);
  // };
  // const removeItems = (id) => {
  //   setPeople(people.filter((person) => person.id !== id));
  // };
  return (
    <>
      <h1>{value}</h1>
      <button type='button' onClick={handleChange}>
        Increase
      </button>

      {/* Second Example: */}
      {/* <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoy: {person.hobby}</h3>
      <button type='button' onClick={displayPerson}>
        Show John
      </button> */}

      {/* First Example: */}
      {/* {people.map((ele) => {
        const { id, name } = ele;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button type='button' onClick={() => removeItems(id)}>
              Remove One
            </button>
          </div>
        );
      })}
      <button type='button' onClick={clearAllItems}>
        Remove All
      </button> */}
    </>
  );
}

export default UseState;
