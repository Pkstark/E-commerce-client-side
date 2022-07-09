import React from 'react'
import Img from '../Assets/Mobilles.jpg';
import Img1 from '../Assets/Shirts.jpg';
import Img2 from '../Assets/shoes.jpg';

import {useParams, useNavigate} from 'react-router-dom'

function Product() {
    const useparams = useParams("id");
    
  const navigate = useNavigate();

    
const rr = () => {
    navigate(`/dashboard/${useparams.id}`);
}

const dd = (e) => {
    e.preventDefault();
    navigate(`/mobile/${useparams.id}`)
  }
  
  const ee = (e) => {
    e.preventDefault();
    navigate(`/shoes/${useparams.id}`)
  }
  
  const ff = (e) => {
    e.preventDefault();
    navigate(`/Shirts/${useparams.id}`)
  }
  
const tt = (e) => {
  e.preventDefault();
  navigate(`/cart/${useparams.id}`);
}

  return (
    <div>
        <nav class="nav-wraper indigo">
        <div className="container">
          <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style10' onClick={tt} >cart</button>
            <button className='btn indigo right style11' onClick={rr}>Dashboard</button>
          </div>
        </div>
      </nav>
      <ul className="sidenav indigo" id="resposive"><br /><br />
        <h4 className='center' style={{ color: "white" }}>DevShip</h4>
        <div className='style6'>
        </div>
      </ul>


      <div class="row container">
    <div class="col s4 ">
      <div class="card">
        <div class="card-image">
          <img src={Img}/>
        </div>
        <div class="card-content center">
            <h5>New Mobiles here</h5>
        </div>
        <div class="card-action center">
          <button className='btn' onClick={dd}>View</button>
        </div>
      </div>
    </div>

    <div class="col s4 ">
      <div class="card">
        <div class="card-image">
          <img src={Img2} style = {{height : "340px"}}/>
        </div>
        <div class="card-content center">
            <h5>New Shoes here</h5>
        </div>
        <div class="card-action center">
          <button className='btn' onClick={ee}>View</button>
        </div>
      </div>
    </div>

    <div class="col s4 ">
      <div class="card">
        <div class="card-image">
          <img src={Img1} style = {{height : "340px"}}/>
        </div>
        <div class="card-content center">
            <h5>New Shirts here</h5>
        </div>
        <div class="card-action center">
          <button className='btn' onClick={ff}>View</button>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Product