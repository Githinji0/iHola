import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Motivation from './pages/Motivation.jsx'
import Flashcards from './pages/Flashcards.jsx'
import Quiz from './pages/Quiz.jsx'
import Profile from './pages/Profile.jsx'
import Login from './pages/(auth)/Login.jsx'
import Register from './pages/(auth)/Register.jsx'

function App() {


  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/motivation' element={<Motivation />} />
          <Route path='/flashcards' element={<Flashcards />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
