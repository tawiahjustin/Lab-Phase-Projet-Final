import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function Login(e) {
    e.preventDefault()
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
            type='text'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className='password'>
          <label htmlFor=''>Mot de passe</label>
          <input
            type='text'
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
