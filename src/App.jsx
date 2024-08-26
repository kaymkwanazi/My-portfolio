import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { Navbar } from './Components/Navbar'
import { Projects } from './Pages/Projects'
import { About } from './Pages/About'
import { Footer } from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />}></Route>
      <Route path='/about' element = {<About />}></Route>
      <Route path='/projects' element = {<Projects />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
