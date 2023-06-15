import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
const AddQuestions = () => {
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
        <form action='' className='form'>
          <div>
            <p>Titre de la question</p>
            <input type='text' />
          </div>
          <div>
            <p> Contenu de la question</p>
            <textarea name='' id='' rows='8'>
              something here
            </textarea>
          </div>
          <div>
            <p>Technologies / Categories</p>
            <input type='text' placeholder='type something' />
          </div>
        </form>
        <button className='btn btn-question'>
          Poser ma question
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  )
}

export default AddQuestions
