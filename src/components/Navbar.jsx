import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='navbar-title'>Social Media App</Link>
    </nav>
  )
}

export default Navbar
