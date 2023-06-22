import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
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
                Retour <FontAwesomeIcon icon={faArrowLeft} />
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
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddQuestions
