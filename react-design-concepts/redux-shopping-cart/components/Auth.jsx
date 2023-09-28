import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/userSlice";

const Auth = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(values));
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor='name'>Enter Name</label>
        <input
          value={values.name}
          onChange={onChangeHandler}
          type='text'
          name='name'
          id='name'
        />
        <label htmlFor='email'>Enter Email</label>
        <input
          value={values.email}
          onChange={onChangeHandler}
          type='text'
          name='email'
          id='email'
        />
        <button className='login-btn' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
