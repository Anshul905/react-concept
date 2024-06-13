import './App.css'
import Uncontrolled from './components/useRef/Uncontrolled'
import Counter from './components/useReducer/Counter'
import ChangeCourse from './components/useReducer/ChangeCourse'

function App() {

  return (
    <>
        <div className="h-screen flex items-center justify-center ">

            {/* useRef - uncontrolled form - input */}
            {/* <Uncontrolled /> */}

            {/* < Counter /> */}
            < ChangeCourse />
      

        </div>
    </>
  )
}

export default App
