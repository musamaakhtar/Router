import React from 'react'
import Navbar from './component/Navbar';
import Home from   './pages/Home';
import About from   './pages/About';
import Contact from   './pages/Contact';
import Sign from './pages/sign';
import {Route,Routes } from 'react-router-dom';
export default function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Sign'    element={<Sign/>}/>
    </Routes>
    </div>
  )
}
