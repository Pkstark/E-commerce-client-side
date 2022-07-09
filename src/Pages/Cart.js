import {useNavigate , useParams} from 'react-router-dom';
import React from 'react'
import Img from '../Assets/Mobilles.jpg';
import Img1 from '../Assets/Shirts.jpg';

function Cart() {

  
  const useparams = useParams("id");
  
  const navigate = useNavigate();
 
  const rr = () => {
    navigate(`/dashboard/${useparams.id}`);
  }
  return (
    <div>
       <nav class="nav-wraper indigo">
        <div className="container">
          <div>
            <a href="/rr" className="brand-logo left">Devship</a>
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
    <div class="col s4">
      <div class="card">
        <div class="card-image">
          <img src={Img} style={{height : "300px" , width : "337px"}}/>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <label className='center'>Mobile : Iphone</label>
          <br/>
          <label className='center'>Prize : 99000/Rs</label>
          <div className='right'>
          <button className='btn red'>Shop</button>
          </div>
        </div>
      </div>
    </div>

    <div class="col s4">
      <div class="card">
        <div class="card-image">
          <img src={Img1} style={{height : "300px" , width : "337px"}}/>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <label className='center'>Shirt : Fashion</label>
          <br/>
          <label className='center'>Prize : 900/Rs</label>
          <div className='right'>
          <button className='btn red'>Shop</button>
          </div>
        </div>

      </div>
    </div>
  </div>

  

    </div>
  )
}

export default Cart