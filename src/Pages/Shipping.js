import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';

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

  const passed = () => {
    var elems = document.querySelectorAll('.modal');
    var trigger = M.Modal.init(elems, {});
  }

  const posted = (e) => {
    e.preventDefault();
    navigate(`/order/${useparams.id}`)
  }

  useEffect(() => {
    getData()
  }, [])


  const getData = () => {

    const pp = {
      username: useparams.id
    }

    axios.post("http://localhost:8000/overalldata", pp).then((data) => {
      console.log(data);
      setUserData(data.data);
    }).catch((err) => {
      console.log(err)
    })
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
              return (<>
                <div className='col s4'>
                  <div className='card'><br />
                    <h5 className='center'>Your Order</h5>
                    <div className='card-content'>
                      <p>Name :&nbsp;&nbsp;&nbsp; {datas.username}</p>
                      <p>Order Product :&nbsp;&nbsp;&nbsp; {datas.name}</p>
                      <p>Product Prize : &nbsp;&nbsp;&nbsp;Rs.&nbsp;<span className='style20'>{datas.prize}</span></p>
                      <p>OfferPrize :&nbsp;&nbsp;&nbsp; Rs.&nbsp;{datas.offerprize}</p>
                      <p>Quantity :&nbsp;&nbsp; {datas.quantity} Qty</p>
                      <p>TotalPrize : &nbsp;&nbsp;&nbsp;Rs.&nbsp;{datas.totalprize}/-</p>
                      <p>Discount :&nbsp;&nbsp; {datas.discount}&nbsp;%</p>
                      <p>Delivery :&nbsp;&nbsp; {datas.shipping} &nbsp;days to deliver</p>
                      <p>Shippin Address : &nbsp;{datas.flatno},{datas.address1},{datas.address2},{datas.state},{datas.city}-{datas.pincode}.</p>
                      <p>Contact No :&nbsp;&nbsp;&nbsp; {datas.mobile}</p><hr/>
                      <div className='center'>
                      <p>Order :&nbsp;&nbsp;&nbsp;<span style={{ color: "green" }}>{datas.Approved}</span></p>
                      <span style={{color : "green"}}>Approved By Admin</span>
                      </div>
                    </div><hr/>
                    <div className='Card-action center'>
                      <button className='btn modal-trigger' data-target="change" onClick={passed}>Cancel Order</button>
                    </div><br/>
                  </div>
                </div>

                <div id="change" className="modal">
                  <form>
                    <div className="modal-content">
                      <h4 className='center'>Delete Your Order</h4>
                      <p className='center'>Are You Sure ? you wnat to Delete your Order...!!!</p>
                    </div>
                    <div className="modal-footer">
                      <button type='submit' className='btn mod modal-close indigo' onClick={() => {
                        axios.post(`http://localhost:8000/overdel/${datas._id}`).then((data) => {
                          console.log(data);
                          // navigate(`/dashboard/${useparams.id}`)
                          getData();
                        }).catch((err) => {
                          console.log(err)
                        })
                      }}>Delete</button>
                    </div>
                  </form>
                </div>

              </>)
            })}
          </div>
        </div>
      </div>) : (<div>data not found</div>)}


    </div>
  )
}

export default Shipping