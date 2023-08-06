import React from "react";
import { fakeUserData } from "./API";
// used and change to state used this to useDispatch and action
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, deleteAllUser, clearAllTheUser } from "./store/index";

const App = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };
  const removeNewUser = (payload) => {
    dispatch(removeUser(payload));
  };
  const deleteAllNewUser = (payload) => {
    dispatch(deleteAllUser(payload));
  };
  return (
    <div>
      <button onClick={() => addNewUser(fakeUserData())}>
        add New User click!
      </button>
      <button onClick={() => removeNewUser(fakeUserData())}>
        remove New User click!
      </button>
      <button onClick={() => deleteAllNewUser(fakeUserData())}>
        delete All New User click!
      </button>
      <br />
      <DisplayUsers />
    </div>
  );
};

export default App;

const DisplayUsers = () => {
  const dispatch = useDispatch();
  // use this is the store data in users
  const data = useSelector((state) => state.users);

  const deleteUsers = (payload) => {
    dispatch(removeUser(payload));
  };

  const deleteAll = () => {
    dispatch(clearAllTheUser())
  }
  const multiply = () => {
    dispatch(MultiplyTheUser())
  }
  return (
    <div>
      {data.map((user, id) => (
        <div key={id}>
          <p>{user}</p>
          <button onClick={() => deleteUsers(id)}>delete</button>
        </div>
      ))}
      <br />
      <button onClick={() => deleteAll()}>delete All</button>
    </div>
  );
};
