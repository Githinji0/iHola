/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#fff1e6] flex justify-between items-center shadow-md px-4 py-3 fixed top-0 z-10">

      {/* Logo */}
      <h1 className="text-[#43aa8b] text-2xl font-bold">iHola</h1>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 text-red-400 text-sm font-semibold">
        <Link to="/">Home</Link>
        <Link to="/motivation">Motivation</Link>
        <Link to="/flashcards">Flashcards</Link>
        <Link to="/quiz">Quiz</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-[#43aa8b]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#fff1e6] shadow-md flex flex-col gap-4 p-4 text-red-400 font-semibold lg:hidden animate-fade">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/motivation" onClick={() => setIsMenuOpen(false)}>Motivation</Link>
          <Link to="/flashcards" onClick={() => setIsMenuOpen(false)}>Flashcards</Link>
          <Link to="/quiz" onClick={() => setIsMenuOpen(false)}>Quiz</Link>
        </div>
      )}

    </nav>
  );
};

export default NavBar;
