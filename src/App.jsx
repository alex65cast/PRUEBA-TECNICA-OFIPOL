import { useState } from 'react'
import './App.css'
import { Body } from './layouts/Body/Body'
import { NavbarComp } from './components/Navbar/NavbarComp'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className='appDesing'>
      <NavbarComp/>
      <Body/>
    </div>
  )
}

export default App
