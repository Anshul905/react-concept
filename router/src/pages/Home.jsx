import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const goToContactPage = () => {
    navigate("/contact")
  }
  const goToContactAboutUsPage = () => {
    navigate("/about")
  }
  
  const goToPreviouspage = () => {
    navigate(-1)
  }

  return (
    <>    
    <section className='text-center font-bold text-4xl mt-10'>
      <h1>Home Page</h1>
    </section>
    <div className="flex justify-center mt-5 gap-5">
      <button onClick={ goToContactAboutUsPage }>Go to About Us Page</button>
      <button onClick={ () => navigate("/contact") }>Go to contact Page</button>
      <button onClick={ () => goToPreviouspage() }>Go to Previous Page</button>
    </div>
    </>
)
}

export default Home