/* eslint-disable no-unused-vars */
import QuixCard from '../components/QuixCard'
import { FaFighterJet, FaGuitar } from 'react-icons/fa'
import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import TodayProgress from '../components/ProgressBar';
import { quizQuestions } from '../data/vocabulary';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completeQuiz, setCompleteQuiz] = useState(false);

  const question = quizQuestions[currentQuestion];


  return (
    <div className="h-screen flex flex-col mt-20 gap-4 p-2 text-start">
      <h2 className='text-center mt-4'>Quiz Page</h2>
    </div>
  )
}

export default Quiz