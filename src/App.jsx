import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Bannerlist from './Pages/Bannerlist'
import Addmovies from './Pages/Addmovies'
import AdminHome from './Pages/AdminHome'
import Adminlogin from './Pages/Adminlogin'
import Login from './Pages/Login'
import Userhome from './Pages/Userhome'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addbanner from './Pages/Addbanner'


function App() {
  return (
    <div className='bg-black'>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/userhome' element={<Userhome/>}></Route>
      <Route path='/adminhome' element={<AdminHome/>}></Route>
      <Route path='/adminlogin' element={<Adminlogin/>}></Route>
      <Route path='/addmovies' element={<Addmovies/>}></Route>
      <Route path='/bannerlist' element={ <Bannerlist/>}></Route>
      <Route path='/addbanner' element={<Addbanner/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
