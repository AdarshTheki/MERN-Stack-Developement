const initialState = {
  counter: 8,
  price:500,
  flag:1,
};
const rootReduce = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case "INC":
      newState = {
        ...state, 
        counter: state.counter + action.data
      }
      break;
    case "DEC":
      newState = {
        ...state, 
        counter: state.counter - action.data
      }
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
export default rootReduce;