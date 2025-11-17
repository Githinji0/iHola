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

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completeQuiz, setCompleteQuiz] = useState(false);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion) / quizQuestions.length) * 100;
  const handleSelectAnswer = (answer) => {
    if (selectedAnswer) return; // Prevent changing answer
    setSelectedAnswer(answer);
  }
  const handleSubmit = () => {
    if (!selectedAnswer) {
      toast.error("Please select an answer before proceeding.");
      return;
    }
  }

  setShowResult(true);

  // Check if the selected answer is correct
  if (selectedAnswer === question.correctAnswer) {
    setScore(score + 1);
  }
  else {
    toast.error(`The correct answer was: ${question.correctAnswer}`);
  }

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleteQuiz(true);
    }
  }
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleteQuiz(false);
  }

  if (completeQuiz) {
    const percentageScore = (score / quizQuestions.length) * 100;
  } else {
    return (<CompleteQuizBox />)
  }


  return (
    <div className="h-screen flex flex-col mt-20 gap-4 p-2 text-start">
      <h2 className='text-center mt-4'>Quiz Page</h2>
    </div>
  )
}

export default Quiz