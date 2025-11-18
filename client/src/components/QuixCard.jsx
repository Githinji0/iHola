/* eslint-disable no-unused-vars */
import TodayProgress from "./ProgressBar"
const QuixCard = ({ question, selectedAnswer, onSelectAnswer, showResult, onSubmitAnswer, onNextQuestion, score }) => {

    return (
        <div className="w-full p-4 flex flex-col gap-2 items-center">
            <h3>Question {question.number} out of five</h3>
            <div className="w-full p-4 bg-white rounded-xl shadow-md flex flex-col gap-4">
                <TodayProgress progress={20} />
            </div>
            <div className="w-full">
                <p>Current Score: {score}</p>
            </div>
            <h3>Give your Translation for the word:</h3>
            <h1>{question.word
        }</h1>
            <div className="w-full grid grid-cols-2 gap-4">
                <button className="text-2xl border rounded-lg hover:bg-amber-500 cursor-pointer">Choice</button>
                <button className="text-2xl border rounded-lg hover:bg-amber-500 cursor-pointer">Choice</button>
                <button className="text-2xl border rounded-lg hover:bg-amber-500 cursor-pointer">Choice</button>
                <button className="text-2xl border rounded-lg hover:bg-amber-500 cursor-pointer">Choice</button>

            </div>
            <button className="text-2xl border rounded-lg hover:bg-amber-500 cursor-pointer">Submit Answer</button>
        </div>
    )
}

export default QuixCard