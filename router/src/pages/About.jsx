import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <header>
      <a href="#"><b>Logo</b></a>
      <nav>
        <ul >
          <li>
            <Link to="/"> Home </Link> 
          </li>
          <li>
            <Link to="/about"> About </Link> 
          </li>
          <li>
            <Link to="/contact"> Contact </Link> 
          </li>
        </ul>
      </nav>
    </header>
    <section className='text-center font-bold text-3xl'>
      <h1>About Page</h1>
    </section>
    </>
)
}

export default About