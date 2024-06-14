import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  
  const location = useLocation()
  console.log(location);

  return (
    <>
    <section className='text-center font-bold text-4xl mt-10 '>
      <h1 >About us Page</h1>
      <h2 > This is {location.pathname.replace('/',' ') } us page</h2>
    </section>
    </>
)
}

export default About