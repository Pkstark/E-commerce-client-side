import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./Pages/Register";
import Login from './Pages/Login';
import Dashboard from "./Pages/Dashboard";
import Resetpassword from './Pages/Resetpassword';
import Forgetpassword from './Pages/Forgetpassword';
import Todos from './Pages/Todos';
import Product from './Pages/Product';
import Mobiles from './Pages/Mobiles';
import Shirts from './Pages/Shirts';
import Shoe from './Pages/Shoe';
import Cart from './Pages/Cart';
import Order from './Pages/Order';


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
          <Route path = '/product/:id' element ={<Product/>}/>
          <Route path='/mobile/:id' element={<Mobiles/>}/>
          <Route path='/shoes/:id' element={<Shoe/>}/>
          <Route path='/Shirts/:id' element={<Shirts/>}/>
          <Route path='/cart/:id' element={<Cart/>}/>
          <Route path='/order/:id' element = {<Order/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App