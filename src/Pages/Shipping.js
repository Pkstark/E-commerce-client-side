import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Shipping() {

    const useparams = useParams("id");

    const navigate = useNavigate();

    const [userData, setUserData] = useState([])

    const rr = (e) => {
        e.preventDefault();
        navigate(`/dashboard/${useparams.id}`);
      }
    
      const tt = (e) => {
        e.preventDefault();
        navigate(`/cart/${useparams.id}`);
      }

      const pass = (e) => {
        e.preventDefault();
        navigate(`/order/${useparams.id}`);
      }

      const posted = (e) => {
        e.preventDefault();
        navigate(`/order/${useparams.id}`)
      }

      useEffect(() => {
        getData()
      }, [])

      
      const getData = () => {
        console.log(useparams)
        const pk = {
          username: useparams.id
        }
        axios.post("http://localhost:8000/orderdata", pk).then((data) => {
          console.log(data)
          setUserData(data.data)
        }).catch((err) => {
          console.log(err)
          alert("something went to wrong")
        })
      }
    
      if (userData === null) {
        console.log("data not found");
      } else {
        console.log(userData)
      }


  return (
    <div>
        <nav className="nav-wraper indigo">
        <div className="container">
          <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style11' onClick={rr}>Dashboard</button>&nbsp;
            <button className='btn indigo right style13' onClick={tt}>Cart</button>
            <button className='btn indigo right style22' onClick={pass}>MyOrder</button>
          </div>
        </div>
      </nav>
      <ul className="sidenav indigo" id="resposive"><br /><br />
        <h4 className='center' style={{ color: "white" }}>DevShip</h4>
        <div className='style6'>
        </div>
      </ul>

      {userData !== null ? (<div>

<div className='container'>
<h4 className='center'>Delivery Details</h4>
  <div className='row s12'>
    {userData.map((datas) => {
      console.log(datas.photo)
      return (<>
        <div className='col s3'>
          <div className='card'>
            <div class="card-image">
            </div>
            <div className='card-content'>
                <p>Customer Name : {datas.username}</p>
              <p> name  :&nbsp;&nbsp;&nbsp;{datas.name}</p>
              <p>Product prize : Rs.&nbsp;&nbsp;&nbsp;<span className='style20'>{datas.prize}</span></p>
            <p>Offer Prize : Rs. {datas.offerprize}</p>
            <p>Quantity : {datas.quantity}</p>
            <p>Total Prize : {datas.totalprize}</p>
            <p>Delivery : {datas.shipping} days to deliver</p>
            <p>Discount : {datas.discount} % </p><hr/>
            <p className='center' style={{color : "green"}}> Approved By Admin</p>
            </div>
            <div className='card-action center'>
              <button className='btn' onClick={posted}>Back</button>
            </div>
          </div>
        </div>
      </>
      )
    })}
  </div>
</div>
</div>) : (<div>data not found</div>)}


    </div>
  )
}

export default Shipping