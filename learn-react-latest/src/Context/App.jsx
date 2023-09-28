import { useContext, useState } from "react";
import ContextAPI, { UserContext } from "./ContextAPI";

const App = () => {
  return (
    <div>
      <ContextAPI>
        <h1>Hello</h1>
        <LogIn />
        <Display />
      </ContextAPI>
    </div>
  );
};

export default App;

const LogIn = () => {
  const { setUser } = useContext(UserContext);

  const [person, setPerson] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    setUser(person);
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={SubmitHandler}>
        <input
          value={person.email}
          onChange={changeHandler}
          type='email'
          name='email'
        />
        <input
          value={person.password}
          onChange={changeHandler}
          type='password'
          name='password'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

const Display = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <h2>Display</h2>
      <h3>
        {user?.email} <br /> {user?.password}
      </h3>
    </div>
  );
};
