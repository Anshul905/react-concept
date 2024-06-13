import React from 'react'
import useFetch from './useFetch';

const Jsonplaceholder = () => {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
    return (
        <>
            <div>Jsonplaceholder : 
                {" "} 
                { data ? data.length : 0 }
            </div>    
        </>
    )
}

export default Jsonplaceholder