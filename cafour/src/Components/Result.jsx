import React from 'react';

const Result = ({ score, totalQuestions }) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="result">
      <h1>Quiz Complete!</h1>
      <p>Your score: {score} out of {totalQuestions}</p>
      <p>Percentage: {percentage.toFixed(2)}%</p>
    </div>
  );
};

export default Result;
