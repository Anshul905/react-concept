import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/'        element={<Home />}>   
            <Route path='/about'   element={<About />}>   </Route>
            <Route path='/contact' element={<Contact />}>   </Route>
            <Route path='*' element={<Error />}>   </Route>
          </Route>
          </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
