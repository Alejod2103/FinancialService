import React from 'react'
import img1 from '../../img/img-600x400-1.jpg'
import img2 from '../../img/img-600x400-4.jpg'
import img3 from '../../img/img-600x400-6.jpg'
import './Service.css';
import { LlamaBoton } from './ServiceStyles.js'

function Service() {
  return (
    <>
     <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h6 class="text-warning">Nuestros Servicios</h6>
                <h1 class="mb-4">Soluciones en energia renovable</h1>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src={img1} alt="" />
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon bg-warning">
                                <i class="fa fa-solar-panel fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Servicio solar residencial</h4>
                            <p>Ahorra hasta un 65% mensual en energia para el hogar con nuestro servicio de energia solar.</p>
                            <LlamaBoton>LLama ahora <i class="bi bi-telephone-forward ms-2"></i></LlamaBoton>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src={img2} alt="" />
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon bg-warning">
                                <i class="fa fa-solar-panel fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Tecnicos profesionales</h4>
                            <p>Nuestros técnicos estan comprometidos a brindar un servicio excelente con la mejor atencion y experiencia.</p>
                            <LlamaBoton>LLama ahora <i class="bi bi-telephone-forward ms-2"></i></LlamaBoton>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src={img3} alt="" />
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon bg-warning">
                                <i class="fa fa-lightbulb fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Servicio solar empresarial</h4>
                            <p>Ofrecemos soluciones en energia solar para empresas con el personal mejor capacitado.</p>
                            <LlamaBoton>LLama ahora <i class="bi bi-telephone-forward ms-2"></i></LlamaBoton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service