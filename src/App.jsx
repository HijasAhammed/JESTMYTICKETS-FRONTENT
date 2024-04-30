import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import Userhome from './Pages/Userhome'

function App() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Userhome/> 
      <Footer/>
      
    </div>
  )
}

export default App
