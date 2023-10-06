import React from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

export default function App() {
  return (
    <div className='mx-auto sm:w-1/2 sm:px-0 p-10'>
      <h1 className='text-2xl text-center my-4'>Todo App with Redux ToolKite</h1>
      {/* Inputs todo */}
      <AddTodo />
      {/* Listing todos */}
      <Todos/>
    </div>
  );
}
