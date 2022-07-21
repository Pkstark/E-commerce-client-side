import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';


function Cart() {

  const [userData, setUserData] = useState([])
  const [uData, setUData] = useState()

  const [Select, setSelect] = useState()

  const [orderdata, setorderdata] = useState([])

  const useparams = useParams("id");

  const navigate = useNavigate();

  const rr = (e) => {
    e.preventDefault();
    navigate(`/dashboard/${useparams.id}`);
  }


  useEffect(() => {
    getData();
    let cartlist = localStorage.getItem("cartList");
    if (cartlist) {
      setUData(JSON.parse(cartlist));
      console.log(uData)
    }
  }, [])

  let getData = () => {

    console.log(orderdata)
    console.log(useparams)
    const pk = {
      username: useparams.id
    }
    axios.post("http://localhost:8000/cartdata", pk).then((data) => {
      console.log(data)
      setUserData(data.data)
    }).catch((err) => {
      console.log(err)
      alert("something went to wrong")
    })
  }

  // const orderData = () => {
  //   axios.get(`http://localhost:8000/orderdatas/${ids}`).then((datas) => {
  //     console.log(datas)
  //     setorderdata(datas.data)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }

  

  if (userData === null) {
    console.log("data not found");
  } else {
    // console.log(userData)
  }

  const pass2 = () => {
    navigate(`/order/${useparams.id}`);
  }

  const Values = localStorage.getItem("initial");
  const Values1 = localStorage.getItem("name");
  const Values2 = localStorage.getItem("prize");
  const Values3 = localStorage.getItem("photo");
  const Values4 = localStorage.getItem("offerprize");
  const Values5 = localStorage.getItem("quantity");
  const Values6 = localStorage.getItem("discount");

  const ids = localStorage.getItem("ids");

  // const Value = localStorage.getItem("list")


  // const pass = (e) => {
  //   e.preventDefault();
  //   alert("Please Login");
  //   navigate("/login")
  // }

  const geter = () => {
    var elems = document.querySelectorAll('.modal');
    var trigg = M.Modal.init(elems, {});
  }

  const pp = () => {
    navigate(`/shipadd/${useparams.id}`)
  }

  return (
    <div>
      <nav className="nav-wraper indigo">
        <div className="container">
          <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style11' onClick={rr}>Dashboard</button>&nbsp;
            <button className='btn indigo right style16' onClick={pass2}>MyOrder</button>
          </div>
        </div>
      </nav>
      <ul className="sidenav indigo" id="resposive"><br /><br />
        <h4 className='center' style={{ color: "white" }}>DevShip</h4>
        <div className='style6'>
        </div>
      </ul>

      {Values === useparams.id ? (<div>

        <div className='container'>
          <div className='row s12'>
            {userData.map((datas) => {
              console.log(datas.photo)
              return (<>
                <div className='col s3'>
                  <div className='card'>
                    <div class="card-image">
                      <img src={datas.photo} style={{ height: "200px", width: "200px" }} alt="done4" />
                      <a class="btn-floating halfway-fab waves-effect waves-light red" onClick={() => {
                        axios.post(`http://localhost:8000/cartdel/${datas._id}`).then((data) => {
                          console.log(data);
                          // navigate(`/dashboard/${useparams.id}`)
                          getData();
                        }).catch((err) => {
                          console.log(err)
                        })
                      }}><i class="material-icons">remove</i></a>
                    </div>
                    <div className='card-content'>
                      <p>Product name  :&nbsp;&nbsp;&nbsp;{datas.name}</p>

                      <p>Product prize : Rs.&nbsp;&nbsp;&nbsp;<span className='style20'>{datas.prize}</span></p>
                      <p>Offer Prize : Rs. {datas.offerprize}</p>
                      <p>Discount : {datas.discount} %</p>
                      <br />
                      <input type="number" onChange={(e) => setSelect(e.target.value)} placeholder="Quantity" id='l' />
                    </div>
                    <div className='card-action center'>
                      <button className='btn modal-trigger' data-target="change" onClick={() => {
                        window.localStorage.setItem("name",datas.name)
                        window.localStorage.setItem("prize",datas.prize)
                        window.localStorage.setItem("offerprize",datas.offerprize)
                        window.localStorage.setItem("photo",datas.photo)
                        window.localStorage.setItem("quantity" , Select)
                        window.localStorage.setItem("discount",datas.discount)
                        window.localStorage.setItem("ids",datas._id);
                        geter();
                      }}>Order</button>
                    </div>
                  </div>
                </div>

                <div id="change" className="modal">
                  <form encType="multipart/form-data" >
                    <div className="modal-content">
                      <h4 className='center'>Product Summery</h4>
                      <div className='row'>
                        <div className='col s6'>
                          <p className='style25'>Product Name :{Values1}</p>
                          <p className='style25'>Product Prize :&nbsp; Rs.&nbsp; <span className='style20'>{Values2}</span></p>
                          <p className='style25'>Offerprize :&nbsp; Rs.&nbsp;{Values4}</p>
                          <p className='style25'>Quantity : &nbsp;{Select}&nbsp;&nbsp;Qty</p>
                          <p className='style25'> Discount :&nbsp; {Values6}%</p>
                          <p className='style25'>Delivery : 7 days to deliver</p><br/>
                          <p>Product Has been near by Order , you will Select your correct Address </p>
                        </div>
                        <div className='col s6'>
                          <img src={Values3} className="style24" style={{ height: "200px", width: "200px" }} />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type='submit' className='btn center' onClick={pp}>Upload</button>
                    </div>
                  </form>
                </div>
              </>
              )
            })}
          </div>
        </div>
      </div>) : (<div>
        <div className='container'>
          <div className='row s12'>
            <div className='col s3'>
              <div className='card'>
                <div className='card-content'>
                  <img src={Values3} style={{ height: "200px", width: "200px" }} />
                  <p>Product Name : {Values1}</p>
                  <p>Product Prize : Rs.<span className='style20'>{Values2}</span></p>
                  <p>Offer Prize :Rs. {Values4} </p>
                  <input type="number" onChange={(e) => setSelect(e.target.value)} placeholder="Quantity" id='l' />
                  <button type='submit' className='btn center' onClick={() => {
                    window.localStorage.setItem("quantity", Select)
                    alert("please login");
                    navigate("/.register")
                  }}>Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)}

    </div>



  )
}

export default Cart