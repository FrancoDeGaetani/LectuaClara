import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'



import NavBar from './components/NavBar/nav-bar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Biblioteca from './pages/Biblioteca/Biblioteca'
import TuBiblioteca from './pages/TuBiblioteca/TuBiblioteca'
import Error from './pages/Error/Error'



function App() {

  return (
    <>
      <BrowserRouter>
            <NavBar /> 
            <Routes>  
              <Route path='/' element={<Home/>} />
              <Route path='biblioteca' element={<Biblioteca/>} />
              <Route path='tu-biblioteca' element={<TuBiblioteca/>} />
              <Route path= '*' element={<Error/>} />
            </Routes>
            <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
