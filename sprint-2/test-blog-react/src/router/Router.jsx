import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from '../components/admin/Admin'
import Home from '../components/home/Home'
import NewDescription from '../components/newDescription/NewDescription'
import News from '../components/news/News'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='/' element={<News />} />
                    <Route path='noticia/:newId' element={<NewDescription />} />
                    <Route path='admin' element={<Admin />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router