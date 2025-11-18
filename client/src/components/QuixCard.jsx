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
                <p>Current Score: {score}</p>
            </div>
            <h3>Give your Translation for the word:</h3>
            <h1>{question.spanish
            }</h1>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-center place-items-center">
                {
                    question.options.map((option, index) => (
                        <button className=" w-3/4 flex gap-4 items-center justify-between h-10 border rounded-2xl p-4" key={index}>
                            <div className="div">{letters[index]}.</div>
                            <div className="w-3/4 text-start">{option}</div>

                        </button>))
                }

            </div>
            <button className="text-2xl border rounded-lg hover:bg-amber-500 cursor-pointer">Submit Answer</button>
        </div>
    )
}

export default QuixCard