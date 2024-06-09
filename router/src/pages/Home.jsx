import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Component/Header'

function Home() {
  return (
    <>
    <Header />
    
    {/* <section className='text-center font-bold text-4xl mt-10'>
      <h1>Home Page</h1>
    </section> */}

    <Outlet />
    </>
)
}

export default Home