import React from 'react'
import './components.css'
import { Link } from 'react-router-dom'
const Question = () => {
  return (
    <div className='baroland__answers-container'>
      <div className='questions'>
        <div>
          <Link to='/comment'>
            <h2>wwqxs</h2>
          </Link>
          <p>12/08/2022</p>
        </div>
        <p className='answers-question'>qsxxxs</p>
        <div className='baroland__answers-sub'>
          <h4>1 reponses</h4>
          <p>React</p>
        </div>
      </div>
    </div>
  )
}

export default Question
