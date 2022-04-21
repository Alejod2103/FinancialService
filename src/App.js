import React from 'react'
import "./css/bootstrap.min.css"
import Navbar from "./Components/Navbar/Navbar.js"
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Home from './Components/Home/Home.js';
import Counter from './Components/Counter/Counter';
import About from './Components/About/About';
import Service from './Components/Servicios/Service';
import Features from './Components/Features/Features';

function App() {
  return (
    <>
    <Router>
      
      <Navbar />
      <Home />
      <Counter />
      <About />
      <Service />
      <Features />      

    </Router>
    </>
  )
}

export default App