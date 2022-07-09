import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Mobiles() {

  
  const useparams = useParams("id");
  console.log(useparams)
  
  const [userdata, setuserData] = useState([])

  
  const navigate = useNavigate();


  
const rr = (e) => {
  e.preventDefault();
  navigate(`/dashboard/${useparams.id}`);
}

const tt = (e) => {
  e.preventDefault();
  navigate(`/cart/${useparams.id}`);
}


useEffect(() => {
    
  axios.get("http://localhost:8000/mobdata").then((data) => {
    setuserData(data.data.data);
  }).catch((err) => {
    console.log(err)
  })
}, [])


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

      <div className='container'>
        <div className='row s12'>
          <form>
          {userdata.map((datas) => {
                    return(<>
                    <div className='col s3'>
                      <div className='card'>
                        <div className='card-content'>
                          <p>Product name  :&nbsp;&nbsp;&nbsp;{datas.mobilename}</p>
                          
                          <p>product prize :&nbsp;&nbsp;&nbsp;{datas.mobileprize}</p>
                        </div>
                        <div className='card-action center'>
                          <button className='btn'>Addcart</button>
                        </div>
                      </div>
                      </div>
                    </>
                    )
            })}
          </form>
        </div>
      </div>

    </div>
  )
}

export default Mobiles