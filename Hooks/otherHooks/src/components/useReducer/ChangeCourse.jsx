import React from 'react'
import { useReducer } from "react";

const ChangeCourse = () => {

  const initialValue = { react : false , dsa : false , cp : false  }
  const reducer = (state , action) =>{
    console.log(state,action);
      switch (action.type) {
        case "REACT":
          return { react : true }
          // return { react : true , ...state }
        case "DSA":
          return { dsa : true }
        case "CP":
          return { cp : true }
        default:
          throw new Error() ;
      }
  }
  const [state, dispatch] = useReducer(reducer, initialValue )

  return (
    <>
        <div className="outerbox">
            <h1 className='text-white font-bold text-2xl'> Learning {" "}
              { state.react ? "react" : state.dsa ? "dsa" : state.cp ? "cp" : "not started yet" }
            </h1>
            <div className="buttonbox flex gap-10" >
              <button className='btn1' onClick={ () => dispatch({type:"REACT"}) } >React</button>
              <button className='btn1' onClick={ () => dispatch({type:"DSA"}) } >DSA</button>
              <button className='btn1' onClick={ () => dispatch({type:"CP"}) } >CP</button>
              {/* <button className='btn1' onClick={ () => dispatch({type:"Nothing"}) } >Nothing</button> */}
            </div>
        </div>
    </>
  )
}

export default ChangeCourse