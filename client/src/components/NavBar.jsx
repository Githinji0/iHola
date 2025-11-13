/* eslint-disable no-unused-vars */
import { useState } from 'react'
import React from 'react'

import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import Motivation from '../pages/Motivation'
import Flashcards from '../pages/Flashcards'
import Quiz from '../pages/Quiz'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className='w-full bg-[#fff1e6] flex justify-between items-center  shadow-md m-2 rounded-sm'>
      <h1 className='text-[#43aa8b] text-2xl font-bold p-4'>iHola</h1>

      <div className="lg:flex justify-around text-red-400 text-sm font-semibold gap-2 p-1  hidden ">
        <ul>Home</ul>
        <ul>Motivation</ul>
        <ul>Flashcards</ul>
        <ul>Quiz</ul>

      </div>
      <div className="lg:hidden" id
        ="menu-button">
       <button>
        <FaBars size={30} className="text-[#43aa8b] m-4"/>
       </button>
      </div>


    </nav>
  )
}

export default NavBar