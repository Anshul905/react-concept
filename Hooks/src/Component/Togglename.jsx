import React from 'react'
import { useState } from 'react'

const Togglename = ( {initial} ) => {

  const [name, setname] = useState(initial)
  const names = [ initial , "Ravi Gupta" ]

    const doToggleName = () => {
      const ind = ( name == names[0] ) ? 1 : 0 ; 
      setname( names[ind] )
      console.log(name);
    }  
    return (
    <>
        <div className="flex gap-5 m-10">
            <h1> {name}  </h1>
            <button className="bg-slate-600 text-white p-2 rounded hover:bg-green-400 hover:text-black" onClick={doToggleName}> Click me</button>
        </div>
    </>
  )
}

export default Togglename