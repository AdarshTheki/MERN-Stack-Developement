import React from 'react';
import { useSelector } from 'react-redux';

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <h1 className='text-2xl text-blue-700 font-semibold my-4'>Todos Lists</h1>
      <ul className='flex flex-col card'>
        {todos.map((item) => (
          <li className='border my-2 rounded-lg shadow-md p-2 list-decimal capitalize' key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}