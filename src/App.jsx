import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyAppoinment from './pages/MyAppoinment'
import MyProfile from './pages/MyProfile'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Appoinment from './pages/Appoinment'
function App() {
  return (
    <>
     <div className='mx-4 sm:mx-[10%]'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/doctor' element={<Doctors/>}></Route>
          <Route path='/doctor/:speciality' element={<Doctors/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/my-profile' element={<MyProfile/>}></Route>
          <Route path='/my-appoinments' element={<MyAppoinment/>}></Route>
          <Route path='/appoinment/:docId' element={<Appoinment/>}></Route>
        </Routes>
        <Footer/>
     </div>
    </>
  )
}

export default App
 