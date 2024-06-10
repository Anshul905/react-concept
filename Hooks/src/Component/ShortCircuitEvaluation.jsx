import React from 'react'
import { useState } from 'react'

const ShortCircuitEvaluation = () => {
    const [demo, setdemo] = useState("abcdefgh")
  return (
    <>
        <h1>  or  - { demo || "Anshul" } </h1>

        <hr />

        <h1>  and - { demo && "Anshul" } </h1>

        <hr />

        <h1> { demo || 
                <>
                    {5+5}
                    <h1>Anshul</h1>
                    <p>Kumar</p>
                </>
            }
        </h1>

        <hr />

        <h1> { demo &&
                <>
                    {5+5}
                    <h1>Anshul</h1>
                    <p>Kumar</p>
                </>
            }
        </h1>


    </>
  )
}

export default ShortCircuitEvaluation