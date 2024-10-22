import React, { useState } from "react";
import './App.css';
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    question: "Who is the CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Warren Buffet"],
    correct: "Elon Musk",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    correct: "Jupiter",
  },
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  const [score, setScore] = useState(0); 
  const [isFinished, setIsFinished] = useState(false); 
  const [selectedOption, setSelectedOption] = useState(""); 
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const handleNextQuestion = () => {
    if (selectedOption === currentQuestion.correct) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption(""); 
    } else {
      setIsFinished(true); 
    }
  };
  const handleRestartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsFinished(false);
    setSelectedOption("");
  };

  return (
    <div className="quiz-app">
      {isFinished ? (
        <div className="result">
          <h2>Quiz Finished!</h2>
          <p>Your score: {score} / {quizQuestions.length}</p>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{currentQuestion.question}</p>
          <div className="options">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                className={`option ${selectedOption === option ? "selected" : ""}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button disabled={!selectedOption} onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;