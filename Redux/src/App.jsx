import './App.css'
import { useSelector , useDispatch  } from 'react-redux' ;
import {incNumber,decNumber, toDark, toLight, flipTheme} from "./actions/index"

function App() {
  
  const myState = useSelector( (state) => state.changeTheNumber )
  const mytheme = useSelector( (state) => state.themeChange )
  const dispatch = useDispatch() ;

  return (
    <>
      <div className="main-container" style={{ backgroundColor: mytheme }}>

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

            <h1>React Redux - Increment & Decrement</h1>
            <div className="buttons flex gap-10">
              <button type="button"className='btn' onClick={ () => dispatch(toDark()) }>
                  Dark Theme     
              </button>
              <button type="button"className='btn' onClick={ () => dispatch(toLight()) }>
                  Light Theme     
              </button>
            </div>

            <h1>React Redux - Increment & Decrement</h1>
            <button type="button"className='btn' onClick={ () => dispatch(flipTheme()) }>
                  change Color     
              </button>

        </div>


      </div>
    </>
  )
}

export default App
