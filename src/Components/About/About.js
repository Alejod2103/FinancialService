import React from 'react';
import './About.css';
import img1 from '../../img/about.jpg';

function About() {
  return (
    <>
      <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container about px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                    <div class="position-relative h-100">
                        <img class="imageSolar position-absolute img-fluid w-100 h-100" src={img1} style={{objectFit: "cover", borderRadius: "15px",}} alt="image" />
                    </div>
                </div>
                <div class="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div class="p-lg-5 pe-lg-0">
                        <h6 class="text-warning">Sobre Nosotros</h6>
                        <h1 class="mb-4">Contamos con más de 25+ años brindando el mejor servicio y ahorro que solamente nos permite la energia solar</h1>
                        <p></p>
                        <p><i class="fa fa-check-circle text-warning me-3"></i>La mejor asistencia para el ahorro de energia</p>
                        <p><i class="fa fa-check-circle text-warning me-3"></i>Tecnicos e ingenieros expertos a tu servicio</p>
                        <p><i class="fa fa-check-circle text-warning me-3"></i>+25 años de experiencia</p>
                        <a href="" class="btn btn-warning rounded-pill py-3 px-5 mt-3">Ver más</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
