import React from 'react'
import '../App.css'

const Inscription = () => {
  return (
    <div className='incription-container'>
      <div className='incription-dev-forum'>
        <h1>Dev Forum</h1>
      </div>
      <div className='connexion-container'>
        <div className='connexion'>
          <p>pi2q8r9</p>
          <h1>Se connecter</h1>
          <form action=''>
            <label htmlFor=''>Email</label>
            <br />
            <input type='text' />
            <br />
            <br />
            <label htmlFor=''>Mot de passe</label>
            <br />

            <input type='text' />
            <br />
            <br />
            <button className='btn'>Connexion</button>
          </form>
          <p>
            Si vous n'avez pas de compte, vous pouvez vous{' '}
            <a href=''>inscrire</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Inscription
