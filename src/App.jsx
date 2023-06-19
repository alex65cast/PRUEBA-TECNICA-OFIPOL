import { useState } from 'react'
import './App.css'
import { Body } from './layouts/Body/Body'
import { Navbar } from './components/Navbar/Navbar'


function App() {

  return (
    <div className='appDesing'>
      <Navbar/>
      <Body/>
    </div>
  )
}

export default App
