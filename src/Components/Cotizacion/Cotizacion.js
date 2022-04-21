import React, { useState, useEffect } from 'react'
import ahorro from '../../img/ahorroEnergia.jpg'
import emailjs from '@emailjs/browser';
import { ButtonStyled, StyledDiv, StyledImage, TextButton } from './CotizacionStyles'
import InputField from './components/InputField';

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
        emailjs.send('service_e0dt0ok', 'pruebaAlejo', values, 'nPCuWIe53tZRvDWo5')
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

                              <InputField class="form-control border-0" value={values.fullName} handleChange={handleChange} label="Nombre" name="fullName" type="text" placeholder="John Doe" />
                              <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="jphn@example.com" />
                              <InputField value={values.telf} handleChange={handleChange} label="Telefono" name="telf" type="text" placeholder="jphn@example.com" />

                            </div>
                            <ButtonStyled onclick={handleSubmit}><TextButton >Enviar</TextButton></ButtonStyled>
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