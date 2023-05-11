// // Setting up Redux and Store in React JS

const redux = require("redux");
const createStore = redux.createStore;

const initState = {
  counter: 0,
};

const rootReducer = (state = initState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  } else if (action.type === "DEC_COUNTER") {
    return {
      ...state,
      counter: state.counter - action.value,
    };
  } else if (action.type === "RESET") {
    return {
      ...state,
      counter: 0,
    };
  }
};
// const rootReducer = (state = initState, action) => {
//   let newState;
//   switch (action.type) {
//     case "INC_COUNTER":
//       newState = { ...state, counter: state.counter + action.value };
//       break;
//     case "DEC_COUNTER":
//       newState = { ...state, counter: state.counter - action.value };
//       break;
//     case "RESET":
//       newState = { ...state, counter: 0 };
//       break;
//     default:
//       newState = { state };
//       break;
//   }
// };

const store = createStore(rootReducer, initState);

store.subscribe(() => {
  console.log("Subscribe:", store.getState());
});

store.dispatch({
  type: "INC_COUNTER",
  value: 5,
});
store.dispatch({
  type: "DEC_COUNTER",
  value: 1,
});
store.dispatch({
  type: "RESET",
});

