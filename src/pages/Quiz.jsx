import React, { useState } from "react";
import "../styles/quiz.css";

const questions = [
  { question: "🍎 + 🍎 = ?", options: ["🍎", "🍎🍎", "🍎🍎🍎"], correctAnswer: "🍎🍎" },
  { question: "🍌 + 🍌 = ?", options: ["🍌🍌", "🍌🍌🍌", "🍌"], correctAnswer: "🍌🍌" },
  { question: "🍓🍓 - 🍓 = ?", options: ["🍓", "🍓🍓", "0"], correctAnswer: "🍓" },
  { question: "🍇🍇🍇 - 🍇 = ?", options: ["🍇🍇", "🍇", "🍇🍇🍇"], correctAnswer: "🍇🍇" },
  { question: "🍉 + 🍉 = ?", options: ["🍉🍉🍉", "🍉", "🍉🍉"], correctAnswer: "🍉🍉" },
  { question: "🍒🍒 - 🍒 = ?", options: ["🍒", "🍒🍒", "0"], correctAnswer: "🍒" },
  { question: "🍍 + 🍍 = ?", options: ["🍍🍍", "🍍", "🍍🍍🍍"], correctAnswer: "🍍🍍" },
  { question: "🍑🍑 - 🍑 = ?", options: ["🍑", "🍑🍑", "0"], correctAnswer: "🍑" },
  { question: "🥭 + 🥭 = ?", options: ["🥭", "🥭🥭", "🥭🥭🥭"], correctAnswer: "🥭🥭" },
  { question: "🍏🍏 - 🍏 = ?", options: ["🍏", "🍏🍏", "0"], correctAnswer: "🍏" },
  { question: "🍈 + 🍈 = ?", options: ["🍈🍈", "🍈", "🍈🍈🍈"], correctAnswer: "🍈🍈" },
  { question: "🍋🍋 - 🍋 = ?", options: ["🍋", "🍋🍋", "0"], correctAnswer: "🍋" },
  { question: "🥝 + 🥝 = ?", options: ["🥝", "🥝🥝", "🥝🥝🥝"], correctAnswer: "🥝🥝" },
  { question: "🍐🍐 - 🍐 = ?", options: ["🍐", "🍐🍐", "0"], correctAnswer: "🍐" },
  { question: "🍊 + 🍊 = ?", options: ["🍊🍊", "🍊", "🍊🍊🍊"], correctAnswer: "🍊🍊" }
];

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFinal, setShowFinal] = useState(false);

  // Randomly choose 10 questions from the list
  const [quizQuestions] = useState(() =>
    [...questions].sort(() => 0.5 - Math.random()).slice(0, 10)
  );

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === quizQuestions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    } else {
      setShowFinal(true);
    }
  };

  const handleRetry = () => {
    window.location.reload();
  };

  const getMessage = () => {
    if (score <= 5) return "Don’t worry, you’re getting there! 🍀 Try again!";
    if (score <= 8) return "Good job! 🎉 A little more practice and you’ll be a pro!";
    return "Amazing! 🌟 You’re a math champion!";
  };

  return (
    <div className="quiz-page">
      {!showFinal ? (
        <>
          <h2>
            Question {currentIndex + 1} of {quizQuestions.length}
          </h2>
          <div className="question">{quizQuestions[currentIndex].question}</div>
          <div className="options">
            {quizQuestions[currentIndex].options.map((option, i) => (
              <button
                key={i}
                className={`option-btn ${selected === option ? "selected" : ""}`}
                onClick={() => handleOptionClick(option)}
                disabled={selected !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="next-btn" onClick={handleNext} disabled={selected === null}>
            {currentIndex + 1 === quizQuestions.length ? "Finish" : "Next"}
          </button>
        </>
      ) : (
        <div>
          <h2 className="final-score">Your Score: {score}/{quizQuestions.length}</h2>
          <p className="msg">{getMessage()}</p>
          <button className="next-btn" onClick={handleRetry}>Try Again 🔄</button>
        </div>
      )}
    </div>
  );
}
