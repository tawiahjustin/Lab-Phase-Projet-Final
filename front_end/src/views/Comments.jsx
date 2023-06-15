import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faHeart,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
const Comments = () => {
  return (
    <div className='comment__container'>
      <div className='comment__left'>
        <p>wwqx</p>
        <div className='comment__title'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: '2rem',
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
            <span>10</span>
          </div>
          <h1>wwqx</h1>
        </div>

        <div className='baroland__form-container_title '>
          <p>qxxsx</p>
          <hr
            style={{
              marginTop: '20px',
              marginBottom: '20px',
              marginRight: '2rem',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <h4>2 reponses</h4>
            <p>
              <FontAwesomeIcon icon={faUserCircle} />
              Steph
            </p>
          </div>
        </div>
        <div>
          <div className='comment__comments'>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '2rem',
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
              <span>10</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserCircle} />
              <p>xqqxqx</p>
            </div>
          </div>
        </div>
        <textarea
          name=''
          id=''
          cols='10'
          rows='3'
          placeholder='Ajouter un commentaire'
        ></textarea>
        <button className='btn'>Commenter</button>
      </div>
      <Link to='/home'>
        <span>
          Retour <FontAwesomeIcon icon={faArrowLeft} />
        </span>
      </Link>
    </div>
  )
}

export default Comments
