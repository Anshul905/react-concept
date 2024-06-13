import React from 'react'
import { useContext } from 'react'
import { context } from './ComProvider'


const Com5 = ( ) => {  

  const name = useContext(context)
  
  return (
    <>
        <div className="">
            <div>Component 5 - Consumer </div>
            <h1> Hello {name}</h1>
        </div>
    </>
  )
}

export default Com5
