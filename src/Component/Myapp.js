import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Help from './Pages/Help'
import Navbar from './Navbar'
import Mobile from './Pages/Mobile'
import Mobile1 from './Pages/Mobile1'
import Mobile3 from './Pages/Mobile3'
import Mobile2 from './Pages/Mobile2';
import Error from './Pages/Error'
import User from './Pages/User'
import UserDetails from './Pages/UserDetails'

const Myapp = () => {
  return (
   <>
    
    <Navbar/>
   <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/mobile" element={<Mobile/>}>
            <Route path='/mobile/mobile1' element={<Mobile1/>}/>
            <Route path="/mobile/mobile2" element={<Mobile2/>}/>
            <Route path="/mobile/mobile3" element={<Mobile3/>}/>

        </Route>
        <Route path="/user" element={<User/>}>
          <Route path="/user/:name" element={<UserDetails/>}></Route>
        </Route>
        <Route path="*" element={<Error/>}></Route>
   </Routes>
   
   </>
  )
}

export default Myapp