import React, { useEffect, useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import NavBar from '../navBar/NavBar'

const Home = () => {

    const [date, setDate] = useState('2023/02/16');

    // const [searchParams, setSearchParams] = useSearchParams();

    // const idUser = searchParams.get('idUser');

    // useEffect(() => {
    //   setSearchParams({
    //     idUser: 50
    //   })
    // }, [])
    
    // console.log(idUser)

    useEffect(() => {
      console.log(date)
    }, [date])
    

    return (
        <>
            <NavBar />
            <Outlet context={[date, setDate]} />
        </>
    )
}

export default Home