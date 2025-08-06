import React, { useState, useEffect } from "react";
import "../styles/Play.css";

const Play = () => {
  const [basket, setBasket] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [target, setTarget] = useState(0);
  const [message, setMessage] = useState("");

  const items = ["🍎", "🍌", "🍇", "🍓"];

  useEffect(() => {
    generateNewTarget();
  }, []);

  const generateNewTarget = () => {
    const newTarget = Math.floor(Math.random() * 5) + 2;
    setTarget(newTarget);
    setBasket([]);
    setMessage("");
  };

  const handleDragStart = (e, fruit) => {
    e.dataTransfer.setData("fruit", fruit);
  };

  const handleDrop = (e) => {
    const fruit = e.dataTransfer.getData("fruit");
    const newBasket = [...basket, fruit];
    setBasket(newBasket);
    setIsOver(false);

    if (newBasket.length === target) {
      setMessage("🎉 Great job! You hit the target!");
    } else if (newBasket.length > target) {
      setMessage("❌ Oops! You went over the target.");
    } else {
      setMessage("");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleReset = () => {
    setBasket([]);
    setMessage("");
  };

  return (
    <div className="play-page">
      <h2>🧺 Target Challenge!</h2>
      <p className="target">🎯 Your target: Add exactly <strong>{target}</strong> fruits to the basket</p>

      <div className="items-area">
        {items.map((fruit, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, fruit)}
            className="fruit"
          >
            {fruit}
          </div>
        ))}
      </div>

      <div
        className={`basket-area ${isOver ? "hovering" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        🧺 {basket.length > 0 ? basket.join(" ") : "Drop fruits here"}
      </div>

      <p className="result">Total fruits: {basket.length}</p>

      {message && <p className={`feedback ${message.includes("Great") ? "success" : "fail"}`}>{message}</p>}

      <div className="button-group">
        <button className="reset-btn" onClick={handleReset}>🔄 Reset Basket</button>
        <button className="reset-btn" onClick={generateNewTarget}>🎯 New Challenge</button>
      </div>
    </div>
  );
};

export default Play;
