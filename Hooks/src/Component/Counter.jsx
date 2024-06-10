import { useState } from "react"

function Counter( {initial}) {
  // console.log(useState);
  // console.log( useState() );
  // console.log( useState(100) );
  
  
  // const [count, setCount] = useState(initial)
  const [count, setCount] = React.useState(initial)

  const increaseCounter = () => {
     setCount(count+1);
     console.log(count+1);
  }
    const decreaseCounter = () => {
      setCount(count-1);
      console.log(count-1);
    }
  return (
    <>
      <div className="flex gap-5 m-10">
        <h1> {count}  </h1>
        <button className="bg-slate-600 text-white p-2 rounded hover:bg-green-400 hover:text-black" onClick={increaseCounter}> Increase</button>
        <button className="bg-slate-600 text-white p-2 rounded hover:bg-green-400 hover:text-black" onClick={decreaseCounter}> Decrease</button>
      </div>
    </>
  )
}

export default Counter
