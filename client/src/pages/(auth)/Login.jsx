/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom"
import { FaSignInAlt } from "react-icons/fa"
import { useState } from "react"
import bannerImage from '../../assets/login-img.png'
import maracasImage from '../../assets/icons/maracas-icon.svg'

const Login = () => {
    const navigate = useNavigate();
    const handleSubmitForm = (e)=>{}
  return (
 <div className="h-screen flex flex-col  p-2 text-center">
    <img src={bannerImage} alt="Login Banner" className="mx-auto mb-2 w-[70%]  " />
    <h1 className="tracking-wide text-2xl text-[#111827] my-4 font-bold">Welcome back to <span className="text-[#388e76]">iHola!</span> <img src={maracasImage} alt="Maracas Icon" className="inline-block w-6 h-6" /></h1>
    <form action="" method="POST" className="flex flex-col gap-4 max-w-md mx-auto  w-full p-6 rounded-sm ">
        <input type="text" name="username" id="username" placeholder="Enter Your Username.."  className="w-full h-10 rounded-sm shadow-sm focus:outline-0 pl-2"/>
        <input type="password" name="password" id="password" placeholder="Enter Your Password.." className="w-full h-10 rounded-sm shadow-sm focus:outline-0 pl-2" />
        <button type="submit" className="bg-[#f3722cff] text-white px-6 py-2 rounded-md hover:bg-[#388e76] transition duration-300">Login
            <FaSignInAlt className="inline-block ml-2" size={20} />
        </button>
    </form>
    <p className="text-[#111827]">Don't have an account? <a href="/register" onClick={() => navigate('/register')} className="text-[#f3722cff]">Register here</a></p>
 </div>
  )
}

export default Login