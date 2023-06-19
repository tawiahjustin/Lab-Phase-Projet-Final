import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  async function Inscription(e) {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, passwordConfirm }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.status === 200) {
      alert('resgistration successful')
    } else {
      alert('resgistration failed')
    }
  }
  return (
    <>
      <h1>Cree mon compte</h1>
      <form onSubmit={Inscription}>
        <div className='input-container'>
          <label htmlFor=''>Nom</label>
          <input
            type='text'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
        </div>
        <div className='input-container'>
          <label htmlFor=''>Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className='input-container'>
          <label htmlFor=''>Mot de passe</label>
          <input
            type='text'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <div className='password'>
          <label htmlFor=''>Mot de passe confirmation</label>
          <input
            type='text'
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value)
            }}
          />
        </div>
        <button className='btn'>Inscription</button>
      </form>
      <p>
        Si vous avez deja un compte, vous pouvez vous{' '}
        <Link to={'/'}>connecter</Link>
      </p>
    </>
  )
}

export default SignUp
