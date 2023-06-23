import { useState } from "react";

const Forms = () => {
  // Contact Forms:-
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
  };
  
  // Other input Forms
  const frameWorks = ["React", "Angular", "Vue", "Svelte"];
  
  const [shipping, setShipping] = useState(false);
  const [frameWork, setFrameWork] = useState("React");
  const handleShipping = (e) => {
    // console.log(e.target.checked)
    setShipping(e.target.checked);
  };
  const handleFrameWorks = (e) => {
    // console.log(e.target.value)
    setFrameWork(e.target.value);
  };
  console.log(shipping,frameWork);

  return (
    <div>
      <h2>Contact Form Submit</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Name: </label>
        <input
          type='text'
          value={users.name}
          onChange={changeHandler}
          name='name'
        />
        <br />
        <label htmlFor=''>Email: </label>
        <input
          type='email'
          value={users.email}
          onChange={changeHandler}
          name='email'
        />
        <br />
        <label htmlFor=''>Password: </label>
        <input
          type='password'
          value={users.password}
          onChange={changeHandler}
          name='password'
        />
        <br />
        <button>Submit</button>
      </form>
      <br />

      <h2>Other Inputs</h2>
      <form>
        <label htmlFor=''>Free Shipping: </label>
        <input
          id='shipping'
          type='checkbox'
          name='shipping'
          checked={shipping}
          onChange={handleShipping}
        />
        <br />
        <label>Frame Works: </label>
        <select name='frameWork' value={frameWork} onChange={handleFrameWorks}>
          {frameWorks.map((frame) => {
            return <option key={frame}>{frame}</option>;
          })}
        </select>
      </form>
    </div>
  );
};

export default Forms;
