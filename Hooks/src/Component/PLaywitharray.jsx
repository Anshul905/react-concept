import React, { useState } from 'react'


function CustomButton({func,text}) {
  return (
    <button className='bg-slate-600 text-white p-2 rounded hover:bg-green-400 hover:text-black w-full ' onClick={func}> {text} </button>
    )
}

const PLaywitharray = () => {
    let bioData = [
        { id:0 , name:"Anshul" , age:23 },
        { id:1 , name:"Anshul" , age:25 },
        { id:2 , name:"Anshul" , age:22 },
        { id:3 , name:"Anshul" , age:27 },
        { id:4 , name:"Anshul" , age:21 }
    ]
    // console.log(bioData);

    let [ arrayData , setArrayData ] =  useState(bioData) 
    let [ showData , setshowData ] =  useState(false) 

    const clearAll = () =>{
        if( !showData ){
            console.log("Data is cleared");
            setArrayData([]);
            setshowData( true )
        }
    }
    const getData = () =>{
        if( showData ){
            console.log("Data is on the screen");
            setArrayData(bioData);
            setshowData( false )
        }
    }
    return (
        <>
            
            {
                showData 
                ? 
                <>
                    <h1 className='text-center px-5 pt-5'>No Data</h1> 
                    <h1 className='text-center px-5 pb-5'>Click on button to get the data</h1>
                </>
                : 
                    arrayData.map( (user) => {
                        // console.log(user);
                        return <h1 className='p-5' key={user.id}> Name : {user.name} , Age : {user.age}</h1>
                    })            
            }
            {
                showData ? <CustomButton func={getData} text={"SHOW DATA"} />  : <CustomButton func={clearAll} text={"CLEAR DATA"} />  

                // showData ? <button className='bg-slate-600 text-white p-2 rounded hover:bg-green-400 hover:text-black w-full ' onClick={getData}> GET </button>
                // :  <button className='bg-slate-600 text-white p-2 rounded hover:bg-green-400 hover:text-black w-full ' onClick={clearAll}> CLEAR </button>
            }
        </>
    )
}

export default PLaywitharray