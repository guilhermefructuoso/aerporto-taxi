import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import SobreNos from './components/SobreNos'
import Carros from './components/Carros'
import Carrossel from './components/Carrossel'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Home />
            <SobreNos />
            <Carros />
            <Carrossel />
            <Footer />
            <ToastContainer autoClose={3000} />
        </BrowserRouter>
    )
}

export default App
