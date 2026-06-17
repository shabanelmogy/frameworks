import React, { useState, useMemo } from 'react';
import './CounterPage.css';

export const CounterPage: React.FC = () => {
  // 1. Defining State
  const [count, setCount] = useState<number>(0);

  // 2. Memoized Value (useMemo)
  const isEven = useMemo(() => count % 2 === 0, [count]);

  // 3. Methods to update state
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-card">
      <h2>Counter Example (State & Memoization)</h2>

      {/* 
        We render the state variable directly in JSX.
        React will re-render the component and update the DOM when the state changes.
      */}
      <div className="display">
        <p className="count-text">Current Count: <strong>{count}</strong></p>
      </div>

      <div className="actions">
        {/* We bind events using camelCase event props like onClick */}
        <button onClick={decrement}>- Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+ Increment</button>
      </div>

      {/* Conditional rendering using JSX ternary operators */}
      <div className="status">
        {count === 0 ? (
          <p className="info">The counter is at zero.</p>
        ) : count > 10 ? (
          <p className="warning">Wow, that's a high number!</p>
        ) : (
          <p className="info">The number is {isEven ? 'Even' : 'Odd'}.</p>
        )}
      </div>
    </div>
  );
};

export default CounterPage;
