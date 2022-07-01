import React, { useState, useCallback } from 'react';

function AddTodo() {
  console.log('Rendu AddTodo');
  const [value, setValue] = useState(0);

  return (
    <>
      <input
        className="m-10"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Ajouter
      </button>
    </>
  );
}

export default function App() {
  console.log('Rendu App');
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(
    (value) => {
      setTodos([...todos, value]);
    },
    [todos]
  );

  return (
    <>
      <button
        className="m-10 btn btn-primary"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos.map((cl, i) => (
          <li key={i}>{cl}</li>
        ))}
      </ul>
    </>
  );
}
