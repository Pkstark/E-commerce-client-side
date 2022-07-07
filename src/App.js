import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./Pages/Register";
import Login from './Pages/Login';
import Dashboard from "./Pages/Dashboard";
import Mytodos from './Pages/Mytodos';
import Resetpassword from './Pages/Resetpassword';
import Forgetpassword from './Pages/Forgetpassword';


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
          <Route path='/mytodo/:id' element={<Mytodos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App