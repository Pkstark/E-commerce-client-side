import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Cart() {

  const [userData, setUserData] = useState([])

  const useparams = useParams("id");

  const navigate = useNavigate();

  const rr = (e) => {
    e.preventDefault();
    navigate(`/dashboard/${useparams.id}`);
  }


  useEffect(() => {
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
  }, [])

  if (userData === null) {
    console.log("data not found");
  } else {
    console.log(userData)
  }

  const pass2 = () => {
    navigate(`/order/${useparams.id}`);
  }

  return (
    <div>
      <nav class="nav-wraper indigo">
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


      {userData !== null ? (<div>

        <div className='container'>
          <div className='row s12'>
            {userData.map((datas) => {
              console.log(datas.photo)
              return (<>
                <div className='col s3'>
                  <div className='card'>
                    <div class="card-image">
                      <img src={datas.photo} style={{ height: "200px", width: "200px" }} alt="..." />
                      <a class="btn-floating halfway-fab waves-effect waves-light red" onClick={() => {
                        axios.post(`http://localhost:8000/cartdel/${datas._id}`).then((data) => {
                          console.log(data);
                          navigate(`/dashboard/${useparams.id}`)
                        }).catch((err) => {
                          console.log(err)
                        })
                      }}><i class="material-icons">remove</i></a>
                    </div>
                    <div className='card-content'>
                      <p>Shirt name  :&nbsp;&nbsp;&nbsp;{datas.name}</p>

                      <p>Shirt prize :&nbsp;&nbsp;&nbsp;{datas.prize}</p>
                    </div>
                    <div className='card-action center'>
                      <button className='btn' onClick={() => {
                        const pp = {
                          username: useparams.id,
                          name: datas.name,
                          prize: datas.prize,
                          photo: datas.photo,
                          paid: ""
                        }

                        axios.post(`http://localhost:8000/payment`, pp).then((data) => {
                          console.log(data);
                          alert('order Successfully!!!')
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
      </div>) : (<div>data not found</div>)}


    </div>



  )
}

export default Cart