/* eslint-disable no-unused-vars */
import { useState } from 'react'
import React from 'react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className='w-full bg-blue-300 flex justify-between items-center'>
      <h1 className='text-white text-2xl font-bold p-4'>iHola</h1>

      <div className="lg:flex justify-around text-red-400 text-sm font-semibold gap-2 p-1  hidden ">
        <ul>Home</ul>
        <ul>Motivation</ul>
        <ul>Flashcards</ul>
        <ul>Motivation</ul>

      </div>
      <ul className='mx-2'>Profile</ul>


    </nav>
  )
}

export default NavBar