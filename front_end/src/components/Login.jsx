import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  function Login(e) {
    e.preventDefault()
    fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
    setRedirect(true)
  }
  if (redirect) {
    return <Navigate to={'/home'} />
  }
  return (
    <>
      <h1>Se connecter</h1>
      <form onSubmit={Login}>
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
            type='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className='password'>
          <label htmlFor=''>Mot de passe</label>
          <input
            type='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>

        <button className='btn'>Connexion</button>
      </form>
      <p>
        Si vous n'avez pas de compte, vous pouvez vous{' '}
        <Link to={'/register'}>inscrire</Link>
      </p>
    </>
  )
}

export default Login
