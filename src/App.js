import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from "./Pages/Register";
import Login from './Pages/Login';
import Dashboard from "./Pages/Dashboard";
import Resetpassword from './Pages/Resetpassword';
import Forgetpassword from './Pages/Forgetpassword';
import Todos from './Pages/Todos';
// import Product from './Pages/Product';
import Mobiles from './Pages/Mobiles';
import Shirts from './Pages/Shirts';
import Shoe from './Pages/Shoe';
import Cart from './Pages/Cart';
import Order from './Pages/Order';
import Guest from './Pages/Guest';
import QuestCart  from './Pages/QuestCart';
import GuestLogin from './Pages/GuestLogin';
import Shipping from './Pages/Shipping';
import Address from './Pages/Address';
import ShippingAddress from './Pages/ShippingAddress';


function App() {
  // const Values = localStorage.getItem('initial');
  
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
          {/* <Route path = '/product/:id' element ={<Product/>}/> */}
          <Route path='/mobile/:id' element={<Mobiles/>}/>
          <Route path='/shoes/:id' element={<Shoe/>}/>
          <Route path='/Shirts/:id' element={<Shirts/>}/>
          <Route path='/cart/:id' element={<Cart/>}/>
          <Route path='/order/:id' element = {<Order/>}/>
          <Route path='/.register' element = {<Guest/>}/>
          <Route path='/.cart/:id' element = {<QuestCart/>}/>
          <Route path='/.login' element = {<GuestLogin/>}/>
          <Route path='/ship/:id' element = {<Shipping/>}/>
          <Route path='/add/:id' element={<Address/>}/>
          <Route path='/shipadd/:id' element={<ShippingAddress/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App