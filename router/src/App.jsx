import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'        element={<div>Home</div>}>   </Route>
          <Route path='/about'   element={<div>About</div>}>   </Route>
          <Route path='/contact' element={<div>Contact</div>}>   </Route>
          <Route path='/sign'    element={<div>SignIN</div>}>   </Route>
        </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
