import React, { useState, useMemo } from 'react';

export default function App() {
  console.log('Rendu App');
  const [value, setValue] = useState(0);
  const [list, setList] = useState([]);

  function complexCalculation(list) {
    console.log('Invocation');
    return list.map((l) => {
      for (let i = 0; i < 1000000; i++) {
        l = i;
      }
      return l;
    });
  }

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
