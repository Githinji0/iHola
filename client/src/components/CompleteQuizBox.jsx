
const CompleteQuizBox = ({ score, total, onRestart }) => {
  return (
    <div className="box">
        <h1>Quiz Complete!</h1>
        <p>Your Score: {score} out of {total}</p>
        <button 
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          onClick={onRestart}
        >
          Restart Quiz
        </button>
    </div>
  )
}

export default CompleteQuizBox