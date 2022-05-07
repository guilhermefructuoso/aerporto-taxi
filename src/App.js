import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import SobreNos from './components/SobreNos'
import Carros from './components/Carros'
import Carrossel from './components/Carrossel'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Home/>
    <SobreNos/>
    <Carros/>
    <Carrossel/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
