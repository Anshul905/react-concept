import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

const Counter = () => {

  const initialState = 0 ;
  const reducer = ( state , action ) => {
    // console.log(state,action);
    // console.log(action.type);
    
    if( action.type=="INC" ){
        // console.log(state+1,action);
        return state + 1;
    }
    if( action.type=="DEC" ){
        // console.log(state-1,action);
        return state - 1;
     }
        
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <div className="outerbox">
        <h1 className='text-white font-bold text-2xl'>{state}</h1>
        <div className="buttonbox flex gap-10" >
          <button className='btn1' onClick={ () => dispatch({type:"INC"}) } >Increment</button>
          <button className='btn1' onClick={ () => dispatch({type:"DEC"}) } >Decrement</button>
        </div>
      </div>
    </>

  )
}


// const Counter = () => {
//   const [count, setcount] = useState(0)
//   return (
//     <>
//       <div className="outerbox">
//         <h1 className='text-white font-bold text-2xl'>{count}</h1>
//         <div className="buttonbox flex gap-5" >
//           <button className='block btn1' onClick={() => setcount(count+1)}>Increment</button>
//           <button className='block btn1' onClick={() => setcount(count-1)}>Decrement</button>
//         </div>
//       </div>
//     </>

//   )
// }

export default Counter