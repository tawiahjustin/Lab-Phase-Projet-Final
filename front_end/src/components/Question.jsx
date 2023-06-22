import React from 'react'
import './components.css'
import { Link } from 'react-router-dom'
const Question = ({ title, description, category }) => {
  return (
    <div className='baroland__answers-container'>
      <div className='questions'>
        <div>
          <Link to='/comment'>
            <h2>{title}</h2>
          </Link>
          <p>12/08/2022</p>
        </div>
        <p className='answers-question'>{description}</p>
        <div className='baroland__answers-sub'>
          <h4>1 reponses</h4>
          <p>{category}</p>
        </div>
      </div>
    </div>
  )
}

export default Question
