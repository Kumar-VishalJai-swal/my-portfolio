import { useState } from 'react'

import './App.css'
import Navbar from "./mainPage/navbar";
import Hero from "./mainPage/Hero";
import About from "./mainPage/About"


function App() {
 
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
