import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddQuestions = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  async function PostQuestion(e) {
    e.preventDefault()
    await fetch('http://localhost:5000/questions/add-question', {
      method: 'POST',
      body: JSON.stringify({ title, description, category }),
      headers: { 'Content-Type': 'application/json' },
    })
  }
  return (
    <div className='question-container'>
      <div className='row'>
        <div className='baroland__form-container_title'>
          <div style={{ marginRight: '50px' }}>
            <h1>Poser une question</h1>
            <p>
              Vous rencontrez des problemes? Notre communate de developpeurs est
              la pour vous aider!
            </p>
          </div>
          <Link to='/home'>
            <div>
              <p>
                Retour{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                  />
                </svg>
              </p>
            </div>
          </Link>
        </div>
        <form onSubmit={PostQuestion} className='form'>
          <div>
            <p>Titre de la question</p>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <p> Contenu de la question</p>
            <textarea
              name=''
              id=''
              rows='8'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <p>Technologies / Categories</p>
            <input
              type='text'
              placeholder='type something'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button className='btn btn-question'>
            Poser ma question
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddQuestions
