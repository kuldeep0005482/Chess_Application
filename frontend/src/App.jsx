import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import { ToastContainer } from 'react-toastify';
import Layout from './Layout/Layout'
import GameLayout from './pages/GameLayout/GameLayout'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <div >
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/game' element={<GameLayout />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/email-verify' element={<EmailVerify />} />
          <Route path='/reset-password' element={<ResetPassword />} />

        </Routes>
      </div>

    </div>
  )
}

export default App