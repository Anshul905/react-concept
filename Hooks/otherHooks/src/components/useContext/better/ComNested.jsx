import React from 'react'
import Com5 from './ComConsumer'

const Com2 = () => {
    return (
      <>
          <div>Component 2 - 1 to 2</div>
          <Com3 />
      </>  
  )
}
const Com3 = () => {
    return (
      <>
          <div>Component 3 - 2 to 3</div>
          <Com4 />
      </>  
  )
}
const Com4 = () => {
    return (
      <>
          <div>Component 4 - 3 to 4</div>
          <Com5 />
      </>  
  )
}
export default Com2
export  { Com4 , Com3 }