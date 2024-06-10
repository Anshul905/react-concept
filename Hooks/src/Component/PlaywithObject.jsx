import React, { useState } from 'react'


function CustomButton({func,text}) {
  return (
    <button className='bg-slate-600 text-white p-2 rounded hover:bg-green-400 hover:text-black w-full ' onClick={func}> {text} </button>
    )
}

const PLaywithobject = () => {
    let bioData = { id:0 , name:"Anshul" , age:23 , degree:"CSE B.Tech" }
    // console.log(bioData);

    let [ objData , setObjData ] =  useState(bioData) 

    const update = () =>{
        setObjData({ ...objData , name:"Ravi" });
    }
    return (
        <>
                <h1 className='p-5'> Name : {objData.name} , Age : {objData.age} , Degree : {objData.degree}</h1>
                <button className='bg-slate-600 text-white p-2 rounded hover:bg-green-400 hover:text-black w-full ' onClick={update}> UPDATE </button>        
        </>
    )
}

export default PLaywithobject