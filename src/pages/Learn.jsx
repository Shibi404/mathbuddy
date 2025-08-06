import '../styles/Learn.css';
import { useState } from 'react';

export default function Learn() {
  const [addCount, setAddCount] = useState(0);
  const [subCount, setSubCount] = useState(5); // start from 5 for subtraction

  return (
    <div className="learn">
      <h1>📘 Let's Learn Math!</h1>

      <section className="learn-section">
        <h2>Addition ➕</h2>
        <p>Click the button to add more apples!</p>
        <div className="visual">{'🍎'.repeat(addCount)}</div>
        <button onClick={() => setAddCount(addCount + 1)}>Add 1</button>
        <button onClick={() => setAddCount(0)}>Reset</button>
      </section>

      <section className="learn-section">
        <h2>Subtraction ➖</h2>
        <p>Click to take away apples one by one!</p>
        <div className="visual">{'🍏'.repeat(subCount)}</div>
        <button onClick={() => subCount > 0 && setSubCount(subCount - 1)}>Subtract 1</button>
        <button onClick={() => setSubCount(5)}>Reset</button>
      </section>
    </div>
  );
}
