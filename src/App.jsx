import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Bannerlist from './Pages/Admin/Bannerlist'
import Addmovies from './Pages/TheatreOwner/Addmovies'
import AdminHome from './Pages/Admin/AdminHome'
import Adminlogin from './Pages/Admin/Adminlogin'
import Login from './Pages/Login'
import Userhome from './Pages/Userhome'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addbanner from './Pages/Admin/Addbanner'
import Userlist from './Pages/Admin/Userlist'
import Movielist from './Pages/TheatreOwner/Movielist'
import Bookings from './Pages/Admin/Bookings'
import OwnersHome from './Pages/TheatreOwner/OwnersHome'
import Theatoreowners from './Pages/Admin/Theatoreowners'
import { backendURL } from "../config";
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    const fetchData =async ()=>{
      try {
        const response = await axios.get(`${backendURL}/api/data`)
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
  })
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
      <Route path='/userlist' element={<Userlist/>}></Route>
      <Route path='/movielist' element={<Movielist/>}></Route>
      <Route path='/bookings' element={<Bookings/>}></Route>
      <Route path='/ownerhome' element={<OwnersHome/>}></Route>
      <Route path='/Theatoreowners' element={<Theatoreowners/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  )
}

export default App
