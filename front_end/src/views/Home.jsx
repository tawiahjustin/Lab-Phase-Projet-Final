import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Topics from '../components/Topics'
import Question from '../components/Question'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/questions').then((response) => {
      response.json().then((questions) => {
        setQuestions(questions)
      })
    })
  }, [])

  return (
    <div>
      <Navbar />
      <div className='baroland__banner'>
        <h1>Questions</h1>
        <h4>
          Ce forum est ouvert a toutes les questions liees a la programmation.
        </h4>
        <h4>
          PHP, Javascript, Java, C++, Ruby, Firebase, C, React, Dart, Julia...
        </h4>
        <input type='text' placeholder='Rechercher des questions' />
      </div>
      <section className='container'>
        <div className='baroland__row'>
          <div className='baroland__left-section'>
            <ul className='baroland__topics'>
              <Topics />
              <Topics />
              <Topics />
              <Topics />
            </ul>
          </div>
          <div className='baroland__right-section'>
            <div className='baroland__right-section-top'>
              <p>10 questions</p>
              <Link to='/add-question'>
                <button>
                  Poser une question <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
            <div className='baroland__right-section-bottom'>
              {questions.map((question) => (
                <Question {...question} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
