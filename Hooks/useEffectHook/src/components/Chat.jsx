import React, { useEffect , useState} from 'react'

const Chat = () => {
    const [count,setcount ] = useState(0);

    useEffect(() => {
      console.log("inside use effect");
      if( count > 0  )
        document.title = `Chats (${count})`
      else
        document.title = `Chats `
    } )
  // }  , [ ])

    console.log("outside");    
    return (
      <>
        <h1 className='flex justify-center '>{count}</h1>
        <button className='bg-slate-600 text-white  rounded hover:bg-green-400 hover:text-black px-5 mt-2' onClick={ () => setcount(count+1) } >Click</button>
      </>
    )
}

 
export default Chat