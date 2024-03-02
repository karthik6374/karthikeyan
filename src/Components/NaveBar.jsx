import React from 'react'
import { Link } from 'react-router-dom'
const NaveBar = () => {
  return (
    <>
    <nav className=' NAV d-flex justify-content-align-center align-item-center'>
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
    </nav>
    </>
  )
}

export default NaveBar