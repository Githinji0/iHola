/* eslint-disable no-unused-vars */
import { FaBookmark, FaFire, FaBookOpen, FaArrowsAltH, FaAngleUp, FaTrophy } from "react-icons/fa";
import cactiImage from "../assets/skull.png";
import StreakGraph from "./StreakGraph";
import TodayProgress from "./ProgressBar";
import HeroCard from "./HeroCard";
import { Link } from "react-router-dom";

const HeroComponent = () => {
    const exampleUser = {
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@example.com",
        accuracy: 92,
    };
    const exampleCardData = [
        {
            title: "Daily Words Challenge",
            description: "Explore new words every day to enhance your vocabulary.",
            icon: <FaTrophy size={40} className="text-white" />,
            linkText: "Take the Challenge",
            link: "/flashcards"
        },
        {
            title: "Take a Quiz",
            description: "Challenge yourself with quizzes on various topics.",
            icon: <FaBookOpen size={40} className="text-white" />,
            linkText: "Start Quiz",
            link: "/quiz"
        },
        {
            title: "Get inspired",
            description: "Read success stories from our community.",
            icon: <FaArrowsAltH size={40} className="text-white" />,
            linkText: "View Quotes",
            link: "/motivation"
        }
    ]

    return (
        <div className="h-full flex flex-col gap-4 p-2 text-start">

            <div className=" w-full flex items-center justify-between mb-1"> <div className="w-[50%]"> <h1 className="tracking-wide font-bold text-4xl text-[#111827]">!Hola, {exampleUser.name} </h1> <p className="text-lg text-[#43aa8b] mt-1 font-light tracking-normal">Welcome back. Continue your Spanish learning journey!</p> </div> <div className="w-[45%] "> <img src={cactiImage} alt="Cacti" className="w-full h-full mx-auto" /> </div> </div>

            {/* Words of the Day */}
            <div className="w-full p-3 rounded-lg shadow-lg bg-[#fc9764]">
                <h2 className="text-2xl font-semibold text-white tracking-wide mb-2">
                    Words of the Day
                </h2>
                <div className="w-full px-2">
                    <ul className="list-inside text-[#111827] w-full">
                        <li className="mb-1 w-full p-2 rounded-xl flex justify-between items-center shadow-md ">
                            <span className="font-mono text-white tracking-wide">
                                Amigo - Friend
                            </span>
                            <FaBookmark className="ml-2 text-white" size={20} />
                        </li>
                        <li className="mb-1 w-full p-2 rounded-xl flex justify-between items-center shadow-md bg-[#f9844a]/70">
                            <span className="font-mono text-white tracking-wide">
                                Familia - Family
                            </span>
                            <FaBookmark className="ml-2 text-white" size={20} />
                        </li>
                        <li className="mb-1 w-full p-2 rounded-xl flex justify-between items-center shadow-md ">
                            <span className="font-mono text-white tracking-wide">
                                Comida - Food
                            </span>
                            <FaBookmark className="ml-2 text-white" size={20} />
                        </li>
                    </ul>
                </div>
            </div>

            {/* My Progress Section */}
            <div className="w-full p-2 rounded-lg shadow-lg flex flex-col ">
                <h2 className="text-2xl font-semibold text-[#111827] tracking-wide mb-3">
                    My Progress
                </h2>

                <div className="grid grid-cols-1 w-full gap-4  p-2 rounded-lg">

                    <div className="w-full flex flex-col mb-2  rounded-2xl p-2">
                        <div className="w-full flex justify-between items-center mb-1">
                            <h2 className="tracking-wide ">Current Streak</h2>
                            <FaFire className="inline-block mr-1 text-yellow-300" size={20} />
                        </div>
                        <div className="w-full">
                            <StreakGraph />
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="w-full grid grid-cols-2 shadow-3xl justify-between items-center mt-  gap-2">
                        <div className="text-start  h-24 shadow-[0_4px_20px_rgba(67,170,139,0.4)]  place-content-center px-2">
                            <h2 className=" font-bold w-full flex justify-between">Words Learnt
                                <FaBookOpen className="inline-block ml-1 text-[#f3722c]" size={20} />
                            </h2>
                            <p className="text-3xl font-bold text-[#43aa8b]">150</p>
                        </div>
                        <div className="text-start shadow-[0_4px_20px_rgba(67,170,139,0.4)]    h-24 rounded-lg place-content-center px-2">
                            <h2 className=" font-bold flex justify-between  w-full">Total XP
                                <FaAngleUp className="inline-block ml-1 text-[#f3722c]" size={20} />
                            </h2>
                            <p className="text-3xl font-bold text-[#f9c74f]">2,340</p>
                        </div>
                    </div>
                    <div className="w-full text-start shadow-[0_4px_20px_rgba(67,170,139,0.4)]    h-24 rounded-lg place-content-center px-2">
                        <h2 className="w-full flex justify-between font-bold">Quiz score

                            <FaTrophy className="inline-block ml-1 text-[#f3722c]" size={20} />
                        </h2>
                        <h1 className="font-extrabold text-2xl text-[#f9c74f]">{exampleUser.accuracy} %</h1>
                        <p className="text-gray-800">Average score</p>
                    </div>
                    <div className="w-full  text-start shadow-[0_4px_20px_rgba(67,170,139,0.4)] rounded-lg place-content-center h-24">
                        <TodayProgress />
                    </div>

                    <div className="w-full grid-cols-1 lg:grid-cols-3 place-content-center gap-2">
                        {
                            exampleCardData.map((card, index) => (
                                <HeroCard
                                    key={index}
                                    icon={card.icon}
                                    word={card.title}
                                    description={card.description}
                                    linkText={card.linkText}
                                    link={card.link}
                                />
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;
