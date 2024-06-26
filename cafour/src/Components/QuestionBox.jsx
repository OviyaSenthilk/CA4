import React, { useState } from 'react';
import questions from '../questions';

const QuestionBox = ({ onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [highlight, setHighlight] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      onQuizComplete(score + (isCorrect ? 1 : 0));
    }
  };

  const handleHighlight = () => {
    setHighlight(true);
  };

  const handleRemoveHighlight = () => {
    setHighlight(false);
  };

  return (
    <div className="question-box">
      <h2>Question: {currentQuestion + 1} out of {questions.length}</h2>
      <h3 className={highlight ? 'highlight' : ''}>{questions[currentQuestion].text}</h3>
      <div className="options">
        {questions[currentQuestion].options.map((option) => (
          <button key={option.id} onClick={() => handleAnswerOptionClick(option.isCorrect)}>
            {option.text}
          </button>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handleHighlight}>Highlight</button>
        <button onClick={handleRemoveHighlight}>Remove Highlight</button>
      </div>
    </div>
  );
};

export default QuestionBox;
