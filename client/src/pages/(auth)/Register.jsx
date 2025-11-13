/* eslint-disable no-unused-vars */
import { FaSmile } from "react-icons/fa"
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import image1 from '../../assets/maracas.png'
import maracasImage from '../../assets/icons/maracas-icon.svg'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const handleSubmitForm = ()=>{}
    const navigate = useNavigate()
    ;
  return (
    <div className="h-screen flex flex-col  p-2 text-center">
        <img src={image1} alt="Maracas" className="mx-auto mb-2 w-[70%]  " />
        <h1 className="tracking-wide text-2xl text-[#111827] my-4 font-bold flex items-center justify-center gap-2">Welcome to <span className="text-[#388e76]">iHola!</span> <img src={maracasImage} alt="Maracas Icon" className="inline-block w-6 h-6" /></h1>
        <form action="" method="POST" className="flex flex-col gap-4 max-w-md mx-auto  w-full p-4 rounded-sm ">
            <input type="text" name="name" id="name" placeholder="Enter Your Name.."  className="w-full h-10 rounded-sm shadow-sm focus:outline-0 pl-2" />
            <input type="text" name="username" id="username" placeholder="Choose a Username.." className="w-full h-10 rounded-sm shadow-sm focus:outline-0 pl-2" />
            <input type="email" name="email" id="email" placeholder="Enter Your Email.." className="w-full h-10 rounded-sm shadow-sm focus:outline-0 pl-2" />
            <input type="password" name="password" id="password" placeholder="Enter Your Password.." className="w-full h-10 rounded-sm shadow-sm focus:outline-0 pl-2" />
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Your Password.." className="w-full h-10 rounded-sm shadow-sm focus:outline-0 pl-2" />
            <button type="submit" onClick={handleSubmitForm} className="bg-[#f3722cff] text-white px-6 py-2 rounded-md hover:bg-[#388e76] transition duration-300">Register</button>
        </form>
        <p className="text-[#111827] my-2">Have an account? <a href="/login" onClick={() => navigate('/login')} className="text-[#f3722cff]">Login here</a></p>
    </div>
  )
}

export default Register