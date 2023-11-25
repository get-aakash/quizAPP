import React from 'react'
import questions from './Questions'
const Home = () => {
    
  return (
    <div className='container'>
        <div className="question-section">
            <div className="question-count">
                <span>Question1</span>
            </div>
            <div className="question-text">
                {questions[0].questionText}
            </div>
        </div>
        <div className="answer-section">
            <button>Answer 1</button>
            <button>Answer 2</button>
            <button>Answer 3</button>
            <button>Answer 4</button>
        </div>
      
    </div>
  )
}

export default Home
