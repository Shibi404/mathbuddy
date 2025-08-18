import React from "react";
import "../styles/Info.css";

export default function InfoPage() {
  return (
    <div className="info-page">
      <h1>ℹ️ About This Project</h1>
      <p>
        Welcome to the <strong>Math Learning App for Kids</strong>! 🎉  
        This project is designed to help children learn the basics of math in a
        fun, engaging, and interactive way.
      </p>

      <section className="info-section">
        <h2>📘 Learn</h2>
        <p>
          Kids can explore <strong>Addition</strong> and <strong>Subtraction</strong>
          with the help of colorful apples 🍎🍏. They can click buttons or even use
          keyboard shortcuts to interact with the numbers.
        </p>
      </section>

      <section className="info-section">
        <h2>🎮 Play</h2>
        <p>
          The Play section introduces a <strong>drag-and-drop fruit basket game</strong>.
          Children are given a random target and must drop the exact number of fruits
          into the basket 🎯. This builds counting and problem-solving skills.
        </p>
      </section>

      <section className="info-section">
        <h2>🎥 Videos</h2>
        <p>
          To make learning even more exciting, the app includes a collection of
          <strong>educational math videos</strong>. These help kids visualize
          concepts and reinforce what they’ve learned.
        </p>
      </section>

      <section className="info-section">
        <h2>🚀 Why This App?</h2>
        <p>
          ✅ Simple & Interactive  
          ✅ Visual learning with fruits & animations  
          ✅ Child-friendly design  
          ✅ Helps develop strong math basics  
        </p>
      </section>
    </div>
  );
}
