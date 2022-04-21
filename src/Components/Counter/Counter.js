import React from 'react'
import './Counter.css'

function Counter() {
  return (
    <>
    <div class="container-xxl py-5">
        <div class="containerFeature">
            <div class="row g-5">
                <div class="featurecont  col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-warning rounded-circle me-3">
                            <i class="fa fa-users text-white"></i>
                        </div>
                        <h1 class="mb-0" data-toggle="counter-up">1,332</h1>
                    </div>
                    <h5 class="mb-3">Clientes Satisfechos</h5>
                    <span class="subtitle" > Nuestros clientes se encuentran satisfechos por el ahorro en sus Billes de energia eléctrica. </span>
                </div>
                <div class="featurecont col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-warning rounded-circle me-3">
                            <i class="fa fa-check text-white"></i>
                        </div>
                        <h1 class="mb-0" data-toggle="counter-up">$1.2 M</h1>
                    </div>
                    <h5 class="mb-3">Total ahorrado</h5>
                    <span class="subtitle">Como empresa hemos ayudado a nuestros clientes a ahorrar mas de 1 M de dolares en Billes de electricidad mediante asistencia técnica especializada.</span>
                </div>
                <div class="featurecont col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-warning rounded-circle me-3">
                            <i class="fa fa-users-cog text-white"></i>
                        </div>
                        <h1 class="mb-0" data-toggle="counter-up">+800</h1>
                    </div>
                    <h5 class="mb-3">Agentes especializados</h5>
                    <span class="subtitle">Contamos mas de 800 agentes profesionales para ayudarte a realizar tu ahorro con la mejor atencion.</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counter;