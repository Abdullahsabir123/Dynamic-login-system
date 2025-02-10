import React from 'react';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {

  return (
    <div>

      <Navbar />

      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='*' element={<h1 className='text-center mt-5'>Page Note Found</h1>} />
      </Routes>
    </div>
  )
}