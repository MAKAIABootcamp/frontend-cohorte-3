import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userCreateAsync } from '../../redux/actions/loginActions'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const { error, loading, isLogged } = useSelector((state) => state.login)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
  }, [isLogged])

  const onSubmit = (data) => {
    dispatch(userCreateAsync(data))
  }

  return (
    <section className='p-5 flex flex-col gap-5'>
      <form className='form flex flex-col gap-5 items-center' onSubmit={handleSubmit(onSubmit)}>
        <label className='flex flex-col gap-3 ' >
          <span>
            Email
          </span>
          <input className={`border-2 p-2 rounded-md ${errors.name ? 'border-red-300' : ''}`} type="text" placeholder='Email' {...register('email', { required: 'Email es requerido' })} />
        </label>
        {errors.email ? <span className='text-red-500'>{errors.email.message}</span> : <></>}

        <label className='flex flex-col gap-3 ' >
          <span>
            Nombre
          </span>
          <input className={`border-2 p-2 rounded-md ${errors.name ? 'border-red-300' : ''}`} type="text" placeholder='Nombre de usuario' {...register('name', { required: 'Nombre requerido' })} />
        </label>
        {errors.name ? <span className='text-red-500'>{errors.name.message}</span> : <></>}

        <label className='flex flex-col gap-3 '>
          <span>
            Contraseña
          </span>
          <input className={`border-2 p-2 rounded-md ${errors.password ? 'border-red-300' : ''}`} type="password" placeholder='Contraseña' {...register('password', { required: 'Contraseña requerida' })} />
        </label>
        {errors.password ? <span className='text-red-500'>{errors.password.message}</span> : <></>}
        <button className='bg-blue-300 p-3 rounded-md' disabled={loading} type='submit'>Crear Usuario</button>
      </form>
      {error.status ? <span className=' bg-red-300 p-2  m-5 text-white'>{error.message}</span> : <></>}
      <h3>Si ya tiene una cuenta puedes <Link to='/login' className='text-blue-500'>Iniciar sesion</Link></h3>

    </section>
  )
}

export default Register