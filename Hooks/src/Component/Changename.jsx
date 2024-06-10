import React from 'react'
import { useState } from 'react'

const Changename = ( {initial} ) => {

  const [name, setname] = useState(initial)
    const doChangeName = () => {
      setname("Ravi Gupta")
      console.log(name);
    }  
    return (
    <>
        <div className="flex gap-5 m-10">
            <h1> {name}  </h1>
            <button className="bg-slate-600 text-white  rounded hover:bg-green-400 hover:text-black " onClick={doChangeName}> Click me</button>
        </div>
    </>
  )
}

export default Changename