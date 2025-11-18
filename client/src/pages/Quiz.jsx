/* eslint-disable no-unused-vars */
import QuixCard from '../components/QuixCard'
import { FaFighterJet, FaGuitar } from 'react-icons/fa'
import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import TodayProgress from '../components/ProgressBar';
import { quizQuestions } from '../data/vocabulary';
import CompleteQuizBox from '../components/CompleteQuizBox';
import quizImg from '../assets/icons/quiz.svg'

const Quiz = () => {
  console.log('Quiz Questions:', quizQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completeQuiz, setCompleteQuiz] = useState(false);

  const question = quizQuestions[currentQuestion];
  console.log('Current Question:', question);
  const progress = (currentQuestion / quizQuestions.length) * 100;

  const handleSelectAnswer = (answer) => {
    if (selectedAnswer) return; // Prevent changing answer
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) {
      toast.error("Please select an answer before proceeding.");
      return;
    }

    // Show result box
    setShowResult(true);

    // Check correctness
    if (selectedAnswer === question.correctAnswer) {
      setScore((prev) => prev + 1);
    } else {
      toast.error(`The correct answer was: ${question.correctAnswer}`);
    }
  };
  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleteQuiz(true);
    }
  };
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleteQuiz(false);
  };
  if (completeQuiz) {
    return <CompleteQuizBox score={score} total={quizQuestions.length} onRestart={handleRestartQuiz} />;
  }


  return (
    <div className=" min-h-screen mt-20 bg-[radial-gradient(circle,rgba(255,0,128,0.1),#f9844a52)] flex justify-center items-center flex-col gap-2">
      <h1 className='font-bold tracking-wide text-3xl'>Welcome to quiz!</h1>
  
      <QuixCard
        question={question}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleSelectAnswer}
        showResult={showResult}
        onSubmitAnswer={handleSubmitAnswer}
        onNextQuestion={handleNextQuestion}
        score={score}
      />
    </div>
  )
}

export default Quiz