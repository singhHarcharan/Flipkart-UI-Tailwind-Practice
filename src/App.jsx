import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SecondHeader from './components/SecondHeader'
import Logo from './components/Logo'
import ElectronicsItems from './components/ElectronicsItems'

function App() {

  return (
     <>
        <Navbar />
        <SecondHeader />
        <Logo />
        <ElectronicsItems />
     </>
  )
}

export default App
