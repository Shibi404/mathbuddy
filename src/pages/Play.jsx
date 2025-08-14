import React, { useState, useEffect } from "react";
import "../styles/Play.css";

const Play = () => {
  // State Management: Track fruits in basket, target, message, and hover state
  const [basket, setBasket] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [target, setTarget] = useState(0);
  const [message, setMessage] = useState("");

  const items = ["🍎", "🍌", "🍇", "🍓"];

  // Side Effects: Generate a new target on component mount
  useEffect(() => {
    generateNewTarget();
  }, []);

  // Event Management & State Management: Update state when generating new target
  const generateNewTarget = () => {
    const newTarget = Math.floor(Math.random() * 5) + 2;
    setTarget(newTarget);
    setBasket([]);
    setMessage("");
  };

  // Event Management: Drag start event
  const handleDragStart = (e, fruit) => {
    e.dataTransfer.setData("fruit", fruit);
  };

  // Event Management & State Management: Drop event
  const handleDrop = (e) => {
    const fruit = e.dataTransfer.getData("fruit");
    const newBasket = [...basket, fruit];
    setBasket(newBasket);
    setIsOver(false);

    // Conditional Rendering: Update message based on basket count
    if (newBasket.length === target) {
      setMessage("🎉 Great job! You hit the target!");
    } else if (newBasket.length > target) {
      setMessage("❌ Oops! You went over the target.");
    } else {
      setMessage("");
    }
  };

  // Event Management: Drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsOver(true);
  };

  // Event Management & State Management: Reset button
  const handleReset = () => {
    setBasket([]);
    setMessage("");
  };

  return (
    <div className="play-page">
      <h2>🧺 Target Challenge!</h2>
      <p className="target">
        🎯 Your target: Add exactly <strong>{target}</strong> fruits to the basket
      </p>

      {/* Event Management: Drag & Drop items */}
      <div className="items-area">
        {items.map((fruit, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, fruit)} // Drag event
            className="fruit"
          >
            {fruit}
          </div>
        ))}
      </div>

      <div
        className={`basket-area ${isOver ? "hovering" : ""}`}
        onDrop={handleDrop}       // Drop event
        onDragOver={handleDragOver} // Drag over event
      >
        🧺 {basket.length > 0 ? basket.join(" ") : "Drop fruits here"}
      </div>

      <p className="result">Total fruits: {basket.length}</p>

      {/* Conditional Rendering: Show feedback */}
      {message && <p className={`feedback ${message.includes("Great") ? "success" : "fail"}`}>{message}</p>}

      {/* Event Management: Buttons */}
      <div className="button-group">
        <button className="reset-btn" onClick={handleReset}>🔄 Reset Basket</button> {/* onClick event */}
        <button className="reset-btn" onClick={generateNewTarget}>🎯 New Challenge</button> {/* onClick event */}
      </div>
    </div>
  );
};

export default Play;
