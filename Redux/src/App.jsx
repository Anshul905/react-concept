import './App.css'
import { useSelector , useDispatch  } from 'react-redux' ;
import {incNumber,decNumber} from "./actions/index"

function App() {
  
  const myState = useSelector( (state) => state.changeTheNumber )
  const dispatch = useDispatch() ;

  return (
    <>
      <div className="main-container">

        <div className="container ">
            <h1>React Redux - Increment & Decrement</h1>
            <div className="buttons flex gap-10">
                <button type="button"className='btn' onClick={ () => dispatch(decNumber(5)) }>
                  -
                </button>
                <input type="text" value={myState}  />
                <button type="button"className='btn' onClick={ () => dispatch(incNumber()) }>
                  +
                </button>
            </div>
        </div>


      </div>
    </>
  )
}

export default App
