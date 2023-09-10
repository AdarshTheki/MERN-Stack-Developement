import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const provider = new GoogleAuthProvider();

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const logIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        const user = authUser.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  const Popup = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(token, user);
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const Redirect = async () => {
    try {
      await signInWithRedirect(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        navigate("/");
      });
    } catch (err) {
      console.log("redirect error", err.message);
    }
  };

  return (
    <div>
      {error && (
        <h2 style={{ color: "red" }}>{error}, Somethings was wrongs</h2>
      )}
      <h2>Login Page</h2>
      <form onSubmit={logIn}>
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
          <label htmlFor='password'>Password:{" "}</label>
          <input
            type='text'
            placeholder='password Enter'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name='password'
            id='password'
          />
        </div>
        <button type='submit'>Login Account</button>
      </form>
      <br />
      <button onClick={Popup}>SignIn with Popup</button>
      <br />
      <button onClick={Redirect}>SignIn with Redirect</button>
      <br />
      <Link to='/signup'>Do not have an Account? Create one Here. </Link>
    </div>
  );
};

export default LogInPage;
