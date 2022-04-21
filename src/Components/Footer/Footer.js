import React from 'react'

function Footer() {
  return (
    <>
    <div class="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Contactanos:</h5>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+00000000</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>helpElectricBill@email.com</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#Home">Help Electric Bill</a>, Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer