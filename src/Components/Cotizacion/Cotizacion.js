import React, { useState, useEffect } from 'react'
import ahorro from '../../img/ahorroEnergia.jpg'
import emailjs from '@emailjs/browser';
import { StyledDiv, StyledImage } from './CotizacionStyles'

function Cotizacion() {

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        telf: '',
        message: '',
      });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
      setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
      }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_xd9mtfr', 'pruebaAlejo', values, 'nPCuWIe53tZRvDWo5')
          .then(response => {
            console.log('SUCCESS!', response);
            setValues({
              fullName: '',
              email: '',
              telf: '',
              message: '',
            });
            setStatus('SUCCESS');
          }, error => {
            console.log('FAILED...', error);
          });
      };

      useEffect(() => {
        if(status === 'SUCCESS') {
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
    }, [status]);



    

  return (
    <>
     <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container quote px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                <StyledDiv class="position-relative h-100" >
                        <StyledImage class="position-absolute border-10 img-fluid w-100 h-100" src={ahorro} style={{objectFit: "contain", borderRadius: "25px"}} alt="" />
                </StyledDiv>
                </div>
                <div class="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div class="p-lg-5 pe-lg-0">
                        <h6 class="text-warning">Ofrecemos: </h6>
                        <h1 class="mb-4"> Asistencia personalizada </h1>
                        <p class="mb-4 pb-2">Te ayudamos de forma personal con el pago y ahorro de tu servicio de energia electrica. Contactanos Hoy!</p>
                        <form onSubmit={handleSubmit}>
                            <div class="row g-3">
                                <div class="col-12 col-sm-6">
                                    <input name="fullName" value={values.fullName} type="text" class="form-control border-0" handleChange={handleChange} placeholder="Nombre" style={{height: "55px"}} />
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input value={values.email} type="email" class="form-control border-0" handleChange={handleChange} placeholder="Email" name='email' style={{height: "55px"}} />
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input value={values.telf} type="text" class="form-control border-0" handleChange={handleChange} placeholder="Numero Telefonico" style={{height: "55px"}} />
                                </div>
                                <div class="col-12">
                                    <textarea value={values.message} class="form-control border-0" placeholder="Comentarios"></textarea>
                                </div>
                                <div class="col-12">
                                    <button onclick={handleSubmit} class="btn btn-warning rounded-pill py-3 px-5" type="submit">Solicitar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}


export default Cotizacion