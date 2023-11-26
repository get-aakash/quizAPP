import React, { useState } from 'react'
import  "../design/home.css";
import questions from './Questions'
const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [quizFinished, setQuizFinished] = useState(false)
    const [score, setScore] = useState(0)

    const handleButtonClick = (value)=>{
        value === true ? (setScore(score+1)):(console.log("error"))
        currentIndex === questions.length-1 ? setQuizFinished(true): console.log("error")
        setCurrentIndex(currentIndex+1)

    }
    
  return (
    <div className='app'>
        {quizFinished?(
            <div className="score-section">
                You scored {score} out of {questions.length}
            </div>
        ):(
            <>
            <div className="question-section">
            <div className="question-count">
                <span>Question1</span>/{questions.length}
            </div>
            <div className="question-text">
                {questions[currentIndex].questionText}
            </div>
        </div>
        
            <div className="answer-section">
           {questions[currentIndex].answerOptions.map((answer,index)=>{
            return (
                <button onClick={()=>handleButtonClick(answer.isCorrect)} key={index}>{answer.answerText}</button>
            )
           })}
        </div>
            </>
        )}
        
    </div>
  )
}

export default Home
