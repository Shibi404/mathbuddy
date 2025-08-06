import React, { useState } from "react";
import "../styles/Quiz.css";

const questions = [
  {
    question: "🍎 + 🍎 = ?",
    options: ["🍎", "🍎🍎", "🍎🍎🍎"],
    correctAnswer: "🍎🍎"
  },
  {
    question: "🍌 + 🍌 = ?",
    options: ["🍌🍌", "🍌🍌🍌", "🍌"],
    correctAnswer: "🍌🍌"
  },
  {
    question: "🍓🍓 - 🍓 = ?",
    options: ["🍓", "🍓🍓", "0"],
    correctAnswer: "🍓"
  },
  {
    question: "🍇🍇🍇 - 🍇 = ?",
    options: ["🍇🍇", "🍇", "🍇🍇🍇"],
    correctAnswer: "🍇🍇"
  }
];

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    const correct = option === questions[currentQ].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(prev => prev + 1);
    setShowResult(true);
  };

  const handleNext = () => {
    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
      setSelected("");
      setShowResult(false);
      setIsCorrect(null);
    } else {
      setShowFinal(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected("");
    setShowResult(false);
    setIsCorrect(null);
    setScore(0);
    setShowFinal(false);
  };

  return (
    <div className="quiz-page">
      <h2>🧠 Quiz Time!</h2>

      {!showFinal ? (
        <>
          <p className="question">{questions[currentQ].question}</p>

          <div className="options">
            {questions[currentQ].options.map((opt, index) => (
              <button
                key={index}
                className={`option-btn ${selected === opt ? "selected" : ""}`}
                onClick={() => handleOptionClick(opt)}
                disabled={showResult}
              >
                {opt}
              </button>
            ))}
          </div>

          {showResult && (
            <p className={`result ${isCorrect ? "correct" : "wrong"}`}>
              {isCorrect ? "✅ Correct!" : "❌ Try again!"}
            </p>
          )}

          {showResult && (
            <button className="next-btn" onClick={handleNext}>
              👉 Next
            </button>
          )}

          <p className="score">Score: {score} / {questions.length}</p>
        </>
      ) : (
        <>
        <h3 className="final-score">🎉 Quiz Completed!</h3>
        <p className="score">Your Final Score: {score} / {questions.length}</p>

        <p className="cheer-msg">
            {score <= 1
            ? "Don't worry, keep practicing! 💪✨"
            : score < questions.length
            ? "Good job! You're getting there! 🎯💫"
            : "Amazing! You're a math star! 🌟🎉"}
        </p>

        <button className="next-btn" onClick={handleRestart}>🔁 Try Again</button>
        </>

      )}
    </div>
  );
};

export default Quiz;
