import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./mainPage/navbar";
import Hero from "./mainPage/Hero";
import About from "./mainPage/About"


function App() {
 
  return (
    <div className='bg-white text-black w-screen h-screen'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
