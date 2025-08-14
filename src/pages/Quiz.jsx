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
  // State Management: Track current question, score, selected option, and final result
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFinal, setShowFinal] = useState(false);

  // State Management: Randomly pick 10 questions for quiz
  const [quizQuestions] = useState(() =>
    [...questions].sort(() => 0.5 - Math.random()).slice(0, 10)
  );

  // Event Management: Handle option selection and update score
  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === quizQuestions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  // Event Management & State Update: Move to next question or finish quiz
  const handleNext = () => {
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    } else {
      setShowFinal(true);
    }
  };

  // Event Management: Retry quiz by reloading page
  const handleRetry = () => {
    window.location.reload();
  };

  // Conditional Rendering: Feedback message based on score
  const getMessage = () => {
    if (score <= 5) return "Don’t worry, you’re getting there! 🍀 Try again!";
    if (score <= 8) return "Good job! 🎉 A little more practice and you’ll be a pro!";
    return "Amazing! 🌟 You’re a math champion!";
  };

  return (
    <div className="quiz-page">
      {!showFinal ? ( // Conditional Rendering: Show question page or final result
        <>
          <h2>
            Question {currentIndex + 1} of {quizQuestions.length}
          </h2>
          <div className="question">{quizQuestions[currentIndex].question}</div>

          {/* Event Management: Option buttons */}
          <div className="options">
            {quizQuestions[currentIndex].options.map((option, i) => (
              <button
                key={i}
                className={`option-btn ${selected === option ? "selected" : ""}`} // Conditional Rendering: Highlight selected option
                onClick={() => handleOptionClick(option)} // Event Management
                disabled={selected !== null} // Conditional Rendering: Disable after selection
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
