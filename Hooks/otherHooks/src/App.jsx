import './App.css'
import Uncontrolled from './components/useRef/Uncontrolled'
import Counter from './components/useReducer/Counter'
import ChangeCourse from './components/useReducer/ChangeCourse'
import Com1 from './components/useContext/propDrilling/ComProvider'
import ComProvider from './components/useContext/better/ComProvider'
import AuthProvider from './components/useContext/login/AuthProvider'
import RandomUserAPI from './components/CustomHook/fetchExample/RandomUserAPI'
import GithubAPI from './components/CustomHook/fetchExample/GithubAPI'
import Jsonplaceholder from './components/CustomHook/fetchExample/Jsonplaceholder'
import MultipleAPI from './components/CustomHook/fetchExample/MultipleAPI'
import HeavyCalculation from './components/useMemo/HeavyCalculation'

function App() {

  return (
    <>
        <div className="h-screen flex items-center justify-center gap-5">

            {/* ------------ useRef Hook- uncontrolled form - input ------------ */}
            {/* <Uncontrolled /> */}

            {/* ------------ useReducer Hook ------------ */}
            {/* < Counter /> */}
            {/* < ChangeCourse /> */}

            {/* ------------ userContext Hook ------------ */}
            {/* <Com1 /> */}
            {/* < ComProvider /> */}
            {/* <AuthProvider/> */}


            {/* ------------ custom Hook ------------ */}
            {/* <GithubAPI /> */}
            {/* <RandomUserAPI /> */}
            {/* <Jsonplaceholder/> */}
            {/* < MultipleAPI /> */}


            {/* ------------ useMemo Hook------------ */}
            {/* <HeavyCalculation />             */}


            {/* ------------ useCallback Hook ------------ */}
            sdfsdf


        </div>
    </>
  )
}

export default App
