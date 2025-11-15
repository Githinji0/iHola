/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import { FaArrowAltCircleRight } from "react-icons/fa"
const HeroCard = ({ icon, word, description, linkText, link }) => {
    return (
        <div className="w-full rounded-lg bg-linear-to-br from-[#fc9764] to-orange-400 p-6 text-white flex flex-col items-start shadow-lg my-4">
            <h1>{icon}</h1>
            <h2>{word}</h2>
            <p>{description}</p>

            <Link to={link} className="mt-4 flex items-center text-[#43aa8b] font-semibold hover:underline">
                {linkText} <FaArrowAltCircleRight className="ml-2" />
            </Link>

        </div>
    )
}

export default HeroCard