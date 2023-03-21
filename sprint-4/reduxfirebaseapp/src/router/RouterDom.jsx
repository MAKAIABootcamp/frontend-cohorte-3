import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import InsertCode from '../components/login/insertCode/InsertCode'
import Login from '../components/login/Login'
import LoginWithPhone from '../components/login/loginWithPhone/LoginWithPhone'
import Register from '../components/register/Register'
import UpdateUser from '../components/updateUser/UpdateUser'

const RouterDom = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/verifyphone' element={<LoginWithPhone/>} />
                <Route path='/insertcode' element={<InsertCode />} />
                <Route path="/updateprofile" element={<UpdateUser/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterDom