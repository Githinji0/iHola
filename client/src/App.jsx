import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  NavBar  from './components/NavBar.jsx'

function App() {


  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<h2 className='text-center mt-4'>Welcome to iHola</h2>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
