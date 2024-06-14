import React from 'react'
import { useLocation } from 'react-router-dom'


function Contact() {

  const location = useLocation()
  console.log(location);

  return (
    <>
    <section className='text-center font-bold text-4xl mt-10'>
      <h1>Contact Page</h1>
      <h2 > This is { location.pathname.replace('/',' ') } page</h2>
    </section>
    </>
)}

export default Contact