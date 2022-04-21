import React from 'react'
import './Navbar.css'
import { IconBtn, NavObj, QuoteText } from './NavbarStyles';
import "../../css/GlobalStyles.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-white navbar-warning sticky-top p-0">
    <a href="index.html" class="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
        <h2 class="tituloNav m-0">Help Electric Bill</h2>
    </a>
    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="#home" class="navObj nav-item nav-link active">Home</a>
            <a href="about.html" class="navObj nav-item nav-link">Sobre Nosotros</a>
            <a href="service.html" class="navObj nav-item nav-link">Servicios</a>
            <a href="contact.html" class="nav-item nav-link">Contacto</a>
        </div>
        <NavObj class="btn m-50 b rounded-2 p-2 py-4 px-lg-3 d-none mt-10 d-lg-block" ><QuoteText>Obten asesoria hoy mismo<IconBtn class="fa fa-arrow-right ms-3"></IconBtn></QuoteText></NavObj>
    </div>
    <script src="../main.js"></script>
</nav>
  )
}

export default Navbar
