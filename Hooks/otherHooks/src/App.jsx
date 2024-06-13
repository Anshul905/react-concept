import './App.css'
import Uncontrolled from './components/useRef/Uncontrolled'
import Counter from './components/useReducer/Counter'
import ChangeCourse from './components/useReducer/ChangeCourse'
import Com1 from './components/useContext/propDrilling/ComProvider'
import ComProvider from './components/useContext/better/ComProvider'
import AuthProvider from './components/useContext/login/AuthProvider'

function App() {

  return (
    <>
        <div className="h-screen flex items-center justify-center ">

            {/* ------------ useRef Hook- uncontrolled form - input ------------ */}
            {/* <Uncontrolled /> */}

            {/* ------------ useReducer Hook ------------ */}
            {/* < Counter /> */}
            {/* < ChangeCourse /> */}

            {/* ------------ userContext Hook ------------ */}
            {/* <Com1 /> */}
            {/* < ComProvider /> */}
            <AuthProvider/>


        </div>
    </>
  )
}

export default App
