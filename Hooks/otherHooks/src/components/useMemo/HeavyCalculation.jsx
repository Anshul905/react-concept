import React from 'react'
import { useState , useMemo } from 'react'

const HeavyCalculation = () => {

    const [counter, setCounter] = useState(0)

    const [number, setNumber] = useState()    
    // const sqNumber = doSquare(number) // calling even when countter is changing ( because useState rerenders the components ) 

    //using memo
    const sqNumber = useMemo( () => { 
        return doSquare(number) 
    }, [number]) 
    

    const inputHandle = (e) => {
        setNumber( e.target.value )
    }
    //heavy function here
    function doSquare(num) {
        console.log('heavy function : ' + new Date().getTime());
        return Math.pow(num,2);
    } 


    return (
        <>
            <div className="box">
                <div className="box">
                    <div className='text-center'>Counter is {counter}</div>
                    <button className='btn1 text-2xl'
                        onClick={ () => setCounter(counter+1) }
                    >Increment</button>        
                </div>

                <div className="box">
                    <input type="number" name="name" id="name" autoComplete='off' placeholder=' Enter a num to square'
                        value={number}
                        onChange={ inputHandle }    
                    />
                    <div className='text-center'>Ouptut is { sqNumber }</div>
                </div>
                
            </div>
            
        </>
)
}

export default HeavyCalculation