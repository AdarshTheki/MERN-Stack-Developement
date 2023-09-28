import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        const user = authUser.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div>
      {error && (
        <h2 style={{ color: "red" }}>{error}, Somethings was wrongs</h2>
      )}
      <h2>Create User Page</h2>
      <form onSubmit={createUser}>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            placeholder='Email Enter'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            name='email'
            id='email'
          />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            type='text'
            placeholder='password Enter'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name='password'
            id='password'
          />
        </div>
        <button type='submit'>Create Account</button>
      </form>
      <br />
      <Link to='/login'>You have an Account? please Login. </Link>
    </div>
  );
};

export default CreateAccountPage;
