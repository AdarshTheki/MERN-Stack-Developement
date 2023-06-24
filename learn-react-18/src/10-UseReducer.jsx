import React, { useReducer } from "react";
import { data } from "./Data.js";

// default / initial state
const defaultState = {
  people: data,
  isLoading: false,
};

// reducer function whatever state is returned the function is the new state
const reducer = (state, action) => {

  if (action.type === "CLEAR_LIST") {
    return { ...state, people: [] };
  }
  if (action.type === "RESET_LIST") {
    return { ...state, people: data };
  }
  if (action.type === "REMOVE_ITEM") {
    let newPeople = state.people.filter((person) => person.id !== action.payload.id);
    return { ...state, people: newPeople };
  }
  return state;
};

// dispatch ({type:"SOME_ACTION"}) an action handle it in reducer, return new state
const UseReducerApp = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const clearList = () => {
    dispatch({ type: "CLEAR_LIST" });
  };
  const resetList = () => {
    dispatch({ type: "RESET_LIST" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  console.log(state)
  
  return (
    <div>
      {state.people.map((ele) => {
        const { id, name } = ele;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button type='button' onClick={() => removeItem(id)}>
              Remove One
            </button>
          </div>
        );
      })}
      <button type='button' onClick={clearList}>
        ClearList
      </button>
      <button type='button' onClick={resetList}>
        ResetList
      </button>
    </div>
  );
};

export default UseReducerApp;
