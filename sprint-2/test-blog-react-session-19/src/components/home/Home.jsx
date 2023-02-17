import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { doLogout, getUser } from '../../services/login';
import NavBar from '../navBar/NavBar'

const Home = () => {

    const [user, setUser] = useState(false);
    const navigate = useNavigate('/')

    const handleLogout = () => {
        if (user) {
            doLogout();
            setUser(false);
            navigate('/')
        }else {
            navigate('/login');
        }
    }

    // const [searchParams, setSearchParams] = useSearchParams();

    // const idUser = searchParams.get('idUser');

    // useEffect(() => {
    //   setSearchParams({
    //     idUser: 50
    //   })
    // }, [])

    // console.log(idUser)

    useEffect(() => {
        const userData = getUser();
        if (userData) {
            setUser(userData)
        }
    }, [])


    return (
        <>
            <NavBar user={user} handleLogout={handleLogout} />
            <Outlet context={[user, handleLogout]} />
        </>
    )
}

export default Home