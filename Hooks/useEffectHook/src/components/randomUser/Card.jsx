import React from 'react'
import { MdVerified } from "react-icons/md";

const Card = ( {name,email,gender,phone,age,profilePic,city,country}  ) => {
  return (
    <>
      <div className=" bg-blue-300 rounded-lg text-center overflow-hidden Shadow 
      hover:shadow-2xl hover:outline-2 ">

        <div className="grid grid-cols-12 ">
        
            <div className="col-span-5  ">
                <img src={profilePic} alt="Not Found" className='rounded-xl p-1.5 h-full object-cover'   />
            </div>
        
            <div className="col-span-7  flex flex-col justify-center ">
              <div className=""> <span className='font-bold text-xl'>{name} <span><MdVerified className='inline'/></span>  </span> <span className='text-sm font-medium'>{age} </span ><span className='font-medium capitalize'>  {gender[0]} </span></div>
              {/* <div className=""> <span className='font-bold text-xl'>{name} ,  </span> <span className='text-sm'>{age} </span><span> { {gender} =="male" ? "M" : "F"} </span></div> */}
              <div className=""> <span className='text-sm'>{email}</span></div>
              <div className="font-thin"> <span className='text-sm'>{phone}</span></div>
              <div className="font-medium text-sm"> <span className=''>{city}</span> , <span className=''>{country}</span></div>
            </div>
        
        </div>

        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi velit eveniet voluptatum a? Dolor, minus soluta. Consequatur unde eius ex nesciunt ipsum ratione. Officiis ab facilis delectus distinctio consectetur.</p> */}
      </div>
    </>

  )
}

export default Card