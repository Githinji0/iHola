import TodayProgress from "./ProgressBar"
const QuixCard = () => {

    return (
        <div className="w-full p-4 flex flex-col gap-2 items-center">
            <h1 className="font-bold text-3xl tracking-wide">Your Daily Quiz</h1>
            <h3>Question 1 out of five</h3>
            <div className="box">
                <TodayProgress progress={20} />
            </div>
            <div className="box">
                <p>Current Score: 0</p>
            </div>
            <h3>Give your Translation for the word:</h3>
            <h1>Hola</h1>
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