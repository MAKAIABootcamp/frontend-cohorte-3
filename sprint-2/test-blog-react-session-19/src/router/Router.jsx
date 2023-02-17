import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from '../components/admin/Admin'
import Home from '../components/home/Home'
import Login from '../components/login/Login'
import NewDescription from '../components/newDescription/NewDescription'
import News from '../components/news/News'
import RoutePrivate from './RoutePrivate'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='/' element={<News />} />
                    <Route path='noticia/:newId' element={<NewDescription />} />
                    <Route path='admin' element={<RoutePrivate><Admin /></RoutePrivate>} />                
                </Route>
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router