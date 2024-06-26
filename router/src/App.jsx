import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Login from './pages/Login';
import MainHeader from './Component/MainHeader';

function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
            <Route path='/'         element={<MainHeader />}>   
                <Route index           element={<Home />} />   
                <Route path='/about'   element={<About />} /> 
                <Route path='/contact' element={<Contact />} />
                <Route path='/login'   element={<Login />} />
                <Route path='*'        element={<Error />}  />
            </Route>
          </Routes>      
      </BrowserRouter>
      
    </>
  )
}

export default App
