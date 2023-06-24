import { useState } from "react";
import {data} from './Data'

function LowerState() {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      <button>count : {count}</button>
      <List people={people} />
    </div>
  );
}
export default LowerState;

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};

const Person = ({ name }) => {
  // console.log("render");
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};