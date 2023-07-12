import React from 'react'

const Navbar = ({ email }) => {
  return (
    <div className='baroland__navbar'>
      <span className='baroland__navbar-left'>Baroland</span>
      <div className='baroland__navbar-right'>
        <span>{email}</span>
        <span>Logout</span>
      </div>
    </div>
  )
}

export default Navbar
