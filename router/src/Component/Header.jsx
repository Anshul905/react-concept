import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className=' bg-slate-200 h-12 flex justify-around items-center'>
    <a href="#"><b>Logo</b></a>
    <nav className='w-1/2'>
      <ul 
        className='flex justify-center gap-20
        '
        >
        <li>
          <NavLink to="/" > Home </NavLink> 
        </li>
        <li>
          <NavLink to="/about"> About </NavLink> 
        </li>
        <li>
          <NavLink to="/contact"> Contact </NavLink> 
        </li>
        <li>
          <NavLink to="/login"> Login </NavLink> 
        </li>
      </ul>
    </nav>
  </header>

  )
}

export default Header