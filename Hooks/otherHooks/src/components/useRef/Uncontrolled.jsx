import React from 'react'
import { useRef , useState } from 'react'

const Uncontrolled = () => {

    const yourName = useRef(null)
    const [show, setshow] = useState(false)

    const submitForm = (e) => {
        e.preventDefault();

        // console.log(yourName);
        // console.log(yourName.current);
        console.log(yourName.current.value);
        const name = yourName.current.value 
        name === ""  ?  alert("Enter your name ") : setshow(true)
    }

  return (
    <>
        <div className="flex justify-center items-center h-screen bg-red-400 ">
            <form action="" onSubmit={submitForm} className='bg-slate-400 p-10 '>
                <div className="mb-5">
                    <label htmlFor="name"> You Name - </label>
                    <input type="text"  id='name' ref={yourName} autoComplete='on'
                        className='outline-none rounded'
                    />
                </div>
                <div className="bg-green-600 text-center  w-1/3 py-2 m-auto rounded-lg cursor-pointer hover:text-white hover:bg-black">
                   <button type="submit" >Submit</button>
                </div>
                <p className='text-center mt-5 font-bold text-lg'> 
                    { show && yourName.current.value != "" ? `Your name is ${yourName.current.value}` : "" }
                </p>
            </form>
        </div>
    </>
  )
}

export default Uncontrolled