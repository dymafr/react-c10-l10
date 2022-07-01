import React, { useState, useCallback } from 'react';

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

  const complexList = useMemo(() => complexCalculation(list), [list]);

  return (
    <>
      <input
        className="m-10"
        type="number"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        onClick={() => {
          setList([...list, value]);
          setValue(0);
        }}
      >
        Ajouter
      </button>
      <ul>
        {complexList.map((cl, i) => (
          <li key={i}>{cl}</li>
        ))}
      </ul>
    </>
  );
}
