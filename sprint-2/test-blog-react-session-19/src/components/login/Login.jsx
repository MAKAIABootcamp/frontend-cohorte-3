import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { getAuthorLogin } from '../../services/author';
import { getUser, saveUser } from '../../services/login';
import './style.scss';

const Login = () => {

    const navigate = useNavigate();

    const [formData, handleChange, reset] = useForm({
        user: '',
        password: ''
    });
    const [error, setError] = useState({
        status: false,
        message: ''
    })

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await getAuthorLogin(formData.user, formData.password);
        console.log(response)
        if (!response.length) {
            setError({
                status: true,
                message: "Usuario o contraseña incorrecta"
            })
            reset();
        }else {
            saveUser(response[0]);
            navigate('/')
        }
    }

    useEffect(() => {
      const user = getUser();
      if (user) {
        navigate('/')
      }
    }, [])
    

    return (
        <div className='login__container'>
            <form className='login__form' onSubmit={(e) => { handleLogin(e) }}>
                <h2>Iniciar Sesión</h2>
                <input
                    type="text"
                    placeholder='Ingrese su nombre de usuario'
                    value={formData.user}
                    onChange={(e) => { handleChange(e) }} name="user" />
                <input
                    type="password"
                    placeholder='Ingrese su contraseña'
                    value={formData.password}
                    onChange={(e) => { handleChange(e) }} name="password" />
                <button className='btn btn-primary' type='submit'>Ingresar</button>
                {
                    error.status ?
                        <Alert key={'danger'} variant={'danger'}>
                            {error.message}
                        </Alert>
                        : <></>
                }
            </form>
        </div>
    )
}

export default Login