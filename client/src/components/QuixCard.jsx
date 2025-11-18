/* eslint-disable no-unused-vars */
import TodayProgress from "./ProgressBar"
const QuixCard = ({ question, selectedAnswer, onSelectAnswer, showResult, onSubmitAnswer, onNextQuestion, score }) => {
    const letters = ['A', 'B', 'C', 'D'];
    return (
        <div className="w-full p-4 flex flex-col gap-2 items-center">
            {console.log('Question in QuixCard:', question)}
            <h3>Question {question.id} out of five</h3>
            <div className="w-full p-4 bg-white rounded-xl shadow-md flex flex-col gap-4">
                <TodayProgress progress={20} />
            </div>
            <div className="w-full items-center flex justify-center ">
                <p className="font-bold tracking-wide text-gray-800">Current Score: {score}</p>
            </div>
            <h3 className="font-bold text-gray-800">Give your Translation for the word:</h3>
            <h1 className="font-extrabold text-[#43aa8b] text-3xl">{question.spanish
            }</h1>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-center place-items-center">
                {
                    question.options.map((option, index) => (
                        <button className=" w-3/4 flex gap-4 items-center justify-between h-12 shadow-[#f9844a52] rounded-2xl pl-1 p-4 bg-[#f9844aff] shadow-lg" key={index}>
                            <div className="bg-[#43aa8b] rounded-2xl flex justify-center mr-auto w-10 h-10 items-center text-center text-white font-bold">{letters[index]}.</div>
                            <div className="w-3/4 text-start font-bold text-white tracking-wide">{option}</div>

                        </button>))
                }

            </div>
            <button className="text-md p-2 bg-[#43aa8b] text-white rounded-lg hover:bg-amber-500 cursor-pointer">Submit Answer</button>
        </div>
    )
}

export default QuixCard