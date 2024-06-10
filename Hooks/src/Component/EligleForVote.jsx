

import React, { useState } from 'react'


function CustomButton({func,text}) {
  return (
    <button className='bg-slate-600 text-white p-2 rounded hover:bg-green-400 hover:text-black w-full ' onClick={func}> {text} </button>
    )
}

const EligleForVote = () => {
    let bioData = [
        { id:0 , name:"Anshul" , age:23 },
        { id:1 , name:"Anshul" , age:15 },
        { id:2 , name:"Anshul" , age:13 },
        { id:3 , name:"Anshul" , age:18 },
        { id:4 , name:"Anshul" , age:21 },
        { id:5 , name:"Anshul" , age:0 },
        { id:6 , name:"Anshul" , age:25 },
        { id:7 , name:"Anshul" , age:29 },
        { id:8 , name:"Anshul" , age:2 },
        { id:9 , name:"Anshul" , age:99 }
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
            
    const removeCurData = (id) =>{
        const curVoter = arrayData.filter( (user) => user.id == id )[0]
        
        if( curVoter.age < 18 ){
            console.log("Voter is removed from the list");
            if( arrayData.length == 1 ) setshowData( true )
            
            const newArrayData = arrayData.filter( (user) => user.id != id ) 
            setArrayData(newArrayData);
        }else{
            console.log("Voter is eligle to vote : " , `${curVoter.age}` , ", hence can't be removed");
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
                        return(
                            <div className="flex justify-center m-4 p-2 gap-x-12 bg-slate-300 rounded">
                                    <h1 className='my-2' key={user.id}> Name : {user.name} , Age : {user.age}</h1>
                                    <button className='bg-slate-600 text-white  rounded hover:bg-green-400 hover:text-black px-5' onClick={ () => removeCurData(user.id)}>  { user.age < 18 && "Not"  } Eligble   </button>
                                    {/* <button className='bg-slate-600 text-white  rounded hover:bg-green-400 hover:text-black px-5' onClick={ () => removeCurData(user.id)}>Remove</button> */}
                                </div>
                            )
                    })            
            }
            {
                showData ? <CustomButton func={getData} text={"Show All Voters"} />  : <CustomButton func={clearAll} text={"Remove All Voters"} />  

                // showData ? <button className='bg-slate-600 text-white p-2 rounded hover:bg-green-400 hover:text-black w-full ' onClick={getData}> GET </button>
                // :  <button className='bg-slate-600 text-white p-2 rounded hover:bg-green-400 hover:text-black w-full ' onClick={clearAll}> CLEAR </button>
            }
            </>
    )
}

export default EligleForVote