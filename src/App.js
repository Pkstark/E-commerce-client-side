import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./Pages/Register";
import Login from './Pages/Login';
import Dashboard from "./Pages/Dashboard";
import Resetpassword from './Pages/Resetpassword';
import Forgetpassword from './Pages/Forgetpassword';
import Todos from './Pages/Todos';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard/:id' element={<Dashboard/>}/>
          <Route path='/resetpassword/:id/:token' element={<Resetpassword/>}/>
          <Route path='/forgetpass' element={<Forgetpassword/>}/>
          <Route path = '/Todos/:id' element ={<Todos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App