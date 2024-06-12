import React, { useEffect , useState} from 'react'

const Basic = () => {

    useEffect(() => {
      console.log("inside use effect 2");
    } )

    useEffect(() => {
      console.log("inside use effect 1");
    } )

    console.log("outside");    
    return (
      <>
        <h1>Anshul</h1>
      </>
    )
}

 
export default Basic