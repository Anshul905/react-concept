import React, { createContext } from 'react'
import Com2 from './ComNested'

const context =  createContext();

const ComProvider = () => {
  return (
    <>
        {/* <div className="">
            <div>Component 1 - Provider</div>
        </div> */}

        <context.Provider value={"Anshul"}>
            <div className="">
                <div>Component 1 - Provider</div>
                <Com2 />
            </div>
        </context.Provider>


    </>
)
}

export default ComProvider
export {context}


// create contex 
// provide 