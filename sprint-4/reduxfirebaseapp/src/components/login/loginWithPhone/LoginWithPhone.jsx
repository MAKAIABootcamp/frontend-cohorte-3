import React from 'react'
import { useForm } from 'react-hook-form';
import { GiStrawberry } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { auth } from '../../../firebase/firebaseConfig';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import Swal from 'sweetalert2';
const numberRegx = /^[0-9]{10}$/
const schema = yup
    .object({
        number: yup
            .string()
            .matches(numberRegx, "el numero telefonico debe ser de 10 digitos")
            .required("no ha ingresado el numero telefonico"),
    })
    .required();

  
    
const LoginWithPhone = () => {
  const generateRecaptcha = () =>{
    try {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptch-container', {
        'size': 'invisible',
        'callback': () => {
        }
      }, auth )
    } catch (error) {
      console.log(error)
    }
  }
  const sendSms = (number, recaptchaVerifier) =>{
    signInWithPhoneNumber(auth, `+57${number}`, recaptchaVerifier)
    .then((response)=>{
      window.confirmationResult = response,
      console.log(response)
      Swal.fire('Excelente', `Te enviaremos un mensaje para confirmar a ${number}`, 'success')
      }).then((res)=>{
        navigate('/insertcode')
      })
      
      .catch((error)=> {
        console.log(error)
        Swal.fire('Ops!', `Ocurrió un error al realizar tu solicitud ${error.message}`, 'error')
      })
  }
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

    const navigate = useNavigate()
    const onSubmit = (data) => {
       generateRecaptcha()
       const appVerifier = window.recaptchaVerifier;
       sendSms(data.number, appVerifier)
    }
  return (
    <div className='p-4'>
        <section className='formphone'>
        <form onSubmit={handleSubmit(onSubmit)}  className=' p-5 flex flex-col gap-5 text-center' >
            <GiStrawberry className='drop-shadow-2xl text-shadow text-blue-400 text-5xl self-center'/>
            <label htmlFor="" className='flex flex-col gap-3'>
            <span>Ingrese un número de telefono</span>
            <input {...register('number')} className='border-2 border-blue-200 p-2 rounded-md' type="text" placeholder='número de télefono' />
            </label>
            {errors.number ? <span className='bg-red-200 p-2 text-white'>{errors.number.message}</span> : <></>}
            <button type='submit' className='bg-blue-300 p-3 rounded-md'>Enviar sms</button>
        </form>
        <div id='recaptch-container'>
        </div>
        
        </section>
    </div>
  )
}

export default LoginWithPhone