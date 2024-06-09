import React from 'react'
import { NavLink } from 'react-router-dom'
function Contact() {
  return (
    <>
    <header>
      <a href="#"><b>Logo</b></a>
      <nav>
        <ul >
          <li>
            <NavLink to="/"> Home </NavLink> 
          </li>
          <li>
            <NavLink to="/about"> About </NavLink> 
          </li>
          <li>
            <NavLink to="/contact"> Contact </NavLink> 
          </li>
        </ul>
      </nav>
    </header>
    <section className='text-center font-bold text-3xl'>
      <h1>Contact Page</h1>
    </section>
    </>
)}

export default Contact