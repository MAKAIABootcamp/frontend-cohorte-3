import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import LogIn from '../components/login/LogIn'
import NavigationBar from '../components/navigationBar/NavigationBar'

const AppRouter = () => {
    
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<NavigationBar />}>
                  <Route index element={<Home />} />
                  <Route path='login' element={ <LogIn/>} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default AppRouter