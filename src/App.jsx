import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AdminHome from './Pages/AdminHome'
import Login from './Pages/Login'
import Userhome from './Pages/Userhome'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='bg-black'>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/userhome' element={<Userhome/>}></Route>
      <Route path='/adminhome' element={<AdminHome/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
