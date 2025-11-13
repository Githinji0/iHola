/* eslint-disable no-unused-vars */
import { FaFighterJet, FaGuitar } from 'react-icons/fa'
import { useState } from 'react';
import heroImage from '../assets/hero1.png'
import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import GetStarted from '../components/GetStarted';
import HeroComponent from '../components/HeroComponent';

const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const navigate = useNavigate();


    return (
        <div className="h-screen flex flex-col">
            {
                isAuthenticated ? (<HeroComponent />) : (<GetStarted />)}

        </div >
    )
}

export default Home