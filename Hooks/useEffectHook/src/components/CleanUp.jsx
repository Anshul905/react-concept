import React from 'react'
import { useEffect , useState } from 'react';

const CleanUp = () => {

    const [size, setsize] = useState(window.innerWidth)

    const func = () => {
        setsize(window.innerWidth);
    }

    useEffect(() => {
        console.log("setup " , window.innerWidth);
        window.addEventListener( "resize" , func ) ;

        return () => {
            console.log("cleanup " , window.innerWidth);
            window.removeEventListener( "resize" , func ) ;
        }
    })
    

    return (
        <div className='font-bold text-4xl'> Window Inner width  : {size} </div>
  )
}

export default CleanUp