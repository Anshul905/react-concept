import './App.css' ;
import Basic from './components/Basic'
import Chat from './components/Chat'
import CleanUp from './components/CleanUp';
import GithubAPI from './components/GithubAPI';
import RandomUser from './components/randomUser/RandomUser';

function App() {

  return (
    <>
      <div >
      {/* <div className="h-screen flex items-center justify-center text-center"> */}

          <div className=" bg-slate-100 " >
            {/* <Basic /> */}
            {/* <Chat /> */}
            {/* <CleanUp /> */}
            {/* <GithubAPI /> */}

            <RandomUser/>

          </div>
      
      </div>
    </>
  )
}

export default App
