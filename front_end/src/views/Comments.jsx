import React from 'react'
import { Link } from 'react-router-dom'

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
              textAlign: 'center',
              margin: '0 1rem 3rem 0 ',
              width: '30px',
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>

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
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <h4>2 reponses</h4>
            <div style={{ display: 'flex' }}>
              <div
                className='svg'
                style={{
                  color: 'white',
                  background: 'lightblue',
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6 '
                >
                  <path
                    fillRule='evenodd'
                    d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <p>Steph</p>
            </div>
          </div>
        </div>
        <div>
          <div className='comment__comments'>
            <div
              style={{
                marginRight: '2rem',
              }}
            >
              <div className='svg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </div>
              <span>10</span>
            </div>
            <div>
              <div style={{ display: 'flex' }}>
                <div
                  className='svg'
                  style={{
                    color: 'white',
                    background: 'lightblue',
                    marginRight: '10px',
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h4>Justin</h4>
                <div className='svg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <p>il y'a 1min </p>
              </div>
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
        <div style={{ display: 'flex' }}>
          <span> Retour</span>
          <div className='svg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-1 h-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Comments
