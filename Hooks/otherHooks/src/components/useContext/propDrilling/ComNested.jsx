import React from 'react'
import Com5 from './ComConsumer'

const Com2 = ({name}) => {
    return (
      <>
          <div>Component 2 - 1 to 2</div>
          <Com3 name={name} />
      </>  
  )
}
const Com3 = ({name}) => {
    return (
      <>
          <div>Component 3 - 2 to 3</div>
          <Com4 name={name} />
      </>  
  )
}
const Com4 = ({name}) => {
    return (
      <>
          <div>Component 4 - 3 to 4</div>
          <Com5 name={name} />
      </>  
  )
}
export default Com2
export  { Com4 , Com3 }