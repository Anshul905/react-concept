import "../src/App.css"

import Counter from "./Component/Counter"
import Changename from "./Component/Changename"
import Togglename from "./Component/Togglename"
import PLaywitharray from "./Component/PLaywitharray"
import PLaywithobject from "./Component/PlaywithObject"
import BasicToDo from "./Component/BasicToDo"
import ShortCircuitEvaluation from "./Component/ShortCircuitEvaluation"
import EligleForVote from "./Component/EligleForVote"
import BasicForm from "./Component/forms/BasicForm"
import BasicFormUpdate from "./Component/forms/BasicFormUpdate"
import RegistrationForm from "./Component/forms/RegistrationForm"

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center ">

        <div className=" bg-slate-100 " >
          {/* <Changename initial="Anshul Kumar Neekhara" />    */}
          {/* <Togglename initial="Anshul Kumar Neekhara" />    */}
          {/* <Counter initial={0} /> */}
          {/* <PLaywitharray /> */}
          {/* < PLaywithobject /> */}
          {/* <BasicToDo /> */}
          {/* <ShortCircuitEvaluation /> */}
          {/* <EligleForVote /> */}
          {/* <BasicForm /> */}
          {/* <BasicFormUpdate /> */}
          <RegistrationForm />
        </div>
      
      </div>
    </>
  )
}

export default App
