import '../styles/Learn.css';
import { useState, useEffect } from 'react'; // React Hooks for State Management and Side Effects

export default function Learn() {
  // State Management: Track number of apples for addition and subtraction
  const [addCount, setAddCount] = useState(0);
  const [subCount, setSubCount] = useState(5); // start from 5 for subtraction

  // Event Management: Keyboard input handling using useEffect
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "a") setAddCount(addCount + 1); // Event Handler for 'a' key
      if (e.key === "s" && subCount > 0) setSubCount(subCount - 1); // Event Handler for 's' key
    };
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [addCount, subCount]);

  return (
    <div className="learn">
      <h1>📘 Let's Learn Math!</h1>

      {/* Addition Section - Event Management, State Management */}
      <section className="learn-section">
        <h2>Addition ➕</h2>
        <p>Click the button to add more apples!</p>
        <div className="visual">{'🍎'.repeat(addCount)}</div>
        <button onClick={() => setAddCount(addCount + 1)}>Add 1</button> {/* onClick event */}
        <button onClick={() => setAddCount(0)}>Reset</button> {/* onClick event */}
      </section>

      {/* Subtraction Section - Event Management, State Management */}
      <section className="learn-section">
        <h2>Subtraction ➖</h2>
        <p>Click to take away apples one by one!</p>
        <div className="visual">{'🍏'.repeat(subCount)}</div>
        <button onClick={() => subCount > 0 && setSubCount(subCount - 1)}>Subtract 1</button> {/* onClick event */}
        <button onClick={() => setSubCount(5)}>Reset</button> {/* onClick event */}
      </section>
    </div>
  );
}
