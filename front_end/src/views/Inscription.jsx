import React from 'react'
import '../App.css'
import { Link, Outlet } from 'react-router-dom'
import Login from '../components/Login'

const Inscription = () => {
  return (
    <div className='incription-container'>
      <div className='incription-dev-forum'>
        <h1>Dev Forum</h1>
      </div>
      <div className='inscription-container-right'>
        <div className='inscription'>
          <p>pi2q8r9</p>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Inscription
