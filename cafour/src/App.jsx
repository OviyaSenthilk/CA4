import React, { useState } from 'react';
import QuestionBox from './Components/QuestionBox';
import Result from './Components/Result';
import questions from './questions';
import './App.css';

const App = () => {
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore);
    setIsQuizComplete(true);
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <button onClick={toggleMode}>
        {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      {!isQuizComplete ? (
        <QuestionBox onQuizComplete={handleQuizComplete} />
      ) : (
        <Result score={score} totalQuestions={questions.length} />
      )}
    </div>
  );
};

export default App;
