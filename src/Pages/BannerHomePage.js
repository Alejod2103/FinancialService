import React from 'react'
import About from '../Components/About/About.js'
import Cotizacion from '../Components/Cotizacion/Cotizacion.js'
import Counter from '../Components/Counter/Counter.js'
import Features from '../Components/Features/Features.js'
import Home from '../Components/Home/Home.js'
import Service from '../Components/Servicios/Service.js'

function BannerHomePage() {
  return (
    <>
        <Home />
        <Counter />
        <About />
        <Service />
        <Features />
        <Cotizacion />
    </>
  )
}

export default BannerHomePage