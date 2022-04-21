import React from 'react'
import "../../css/GlobalStyles.css"
import './HomeStyles.css'
import img2 from '../../img/energiabg.jpg'

function Home() {
  return (
    <>
     <div class="container-fluid bg- p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="owl-carousel header-carousel position-relative">
            <div class="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                <img class="img-fluid" src={img2} alt="" />
                <div class="owl-carousel-inner">
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-10 col-lg-8">
                                <h1 class="Titulo display-2 text-white animated slideInDown">¡Te ayudamos a pagar tu Bill!</h1>
                                <p class="Subtitulo fs-5 fw-medium text-white mb-4 pb-3">Brindamos la mejor asistencia para los pagos de tu Bill de electricidad y que puedas ahorrar hasta un 75% en tu factura mensual.</p>
                                <a href="#Home" class="botonleer btn rounded-pill py-3 px-5 animated slideInLeft">Llamar Ahora</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <script src="../src/lib/owlcarousel/owl.carousel.min.js"></script>


    </>
  )
}

export default Home
