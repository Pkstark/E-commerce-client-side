import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import M from 'materialize-css/dist/js/materialize.min.js';


function Cart() {

  const [userData, setUserData] = useState([])
  const [uData, setUData] = useState()

  const [Select, setSelect] = useState()


  const useparams = useParams("id");

  const navigate = useNavigate();

  const rr = (e) => {
    e.preventDefault();
    navigate(`/dashboard/${useparams.id}`);
  }


  useEffect(() => {
    getData()
    let cartlist = localStorage.getItem("cartList");
    if (cartlist) {
      setUData(JSON.parse(cartlist));
      console.log(uData)
    }
  }, [])

  let getData = () => {
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


  console.log(Select)
  // const Value = localStorage.getItem("list")


  // const pass = (e) => {
  //   e.preventDefault();
  //   alert("Please Login");
  //   navigate("/login")
  // }

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
                      <p>Discount : {datas.discount} %</p><br/>
                      <input type="number" onChange={(e) => setSelect(e.target.value)} placeholder="Quantity" id='l'/>
                    </div>
                    <div className='card-action center'>
                      <button className='btn' onClick={() => {
                        const pp = {
                          username: useparams.id,
                          name: datas.name,
                          prize: datas.prize,
                          offerprize: datas.offerprize,
                          photo: datas.photo,
                          quantity : Select,
                          discount : datas.discount
                        }
                        axios.post(`http://localhost:8000/payment`, pp).then((data) => {
                          console.log(data);
                          // alert('order Successfully!!!')
                          navigate(`/order/${useparams.id}`)
                        }).catch((err) => {
                          console.log(err)
                        })
                      }}>Order</button>
                    </div>
                  </div>
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
                  <input type="number" onChange={(e) => setSelect(e.target.value)} placeholder="Quantity" id='l'/>
                  <button type='submit' className='btn center' onClick={() => {
                    window.localStorage.setItem("quantity",Select)
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