import './App.css'
import { useSelector , useDispatch  } from 'react-redux' ;
import {incNumber,decNumber, toDark, toLight, flipTheme} from "./actions/index"

function App() {
  
  const myState = useSelector( (state) => state.changeTheNumber )
  const mytheme = useSelector( (state) => state.themeChange )
  const dispatch = useDispatch() ;

  return (
    <>
      <div className="main-container" style={{ backgroundColor: mytheme.body }}>

        <div className="container " style={{ backgroundColor: mytheme.background , color:mytheme.text , borderColor:mytheme.border}} >

            <h1>React Redux - Increment & Decrement</h1>
          
            <div className="buttons flex gap-10">
                <button type="button"className='btn' 
                  onClick={ () => dispatch(decNumber(5)) }
                  style={{ backgroundColor: mytheme.buttonColor }}
                  >
                  -
                </button>
                <input type="text" value={myState}  readOnly
                  style={{ backgroundColor: mytheme.buttonColor }}
                />
                <button type="button"className='btn' 
                  onClick={ () => dispatch(incNumber()) }
                  style={{ backgroundColor: mytheme.buttonColor }}
                  >
                  +
                </button>
            </div>

            <h1>React Redux - Change Theme</h1>
            <div className="buttons flex gap-10">
              <button type="button"className='btn' 
                onClick={ () => dispatch(toDark()) }
                style={{ backgroundColor: mytheme.buttonColor }}
                >
                Dark Theme     
              </button>
              <button type="button"className='btn' 
                onClick={ () => dispatch(toLight()) }
                style={{ backgroundColor: mytheme.buttonColor }}
                >
                Light Theme     
              </button>
            </div>

            <h1>React Redux - Change Theme</h1>
            <button type="button"className='btn' 
              onClick={ () => dispatch(flipTheme()) }
              style={{ backgroundColor: mytheme.buttonColor }}
              >
              change Theme     
            </button>

        </div>


      </div>
    </>
  )
}

export default App
