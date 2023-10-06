import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: nanoid(), text: 'Hello world!' }],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // update
    // delete
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
