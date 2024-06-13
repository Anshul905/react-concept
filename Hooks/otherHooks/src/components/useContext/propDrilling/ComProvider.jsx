import React from 'react'
import Com2 from './ComNested'


const Com1 = () => {
  return (
    <>
        <div className="">
            <div>Component 1 - Provider</div>
            <Com2 name="Anshul" />
        </div>
    </>
)
}

export default Com1