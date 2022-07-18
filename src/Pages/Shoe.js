import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Mobiles() {


  const useparams = useParams("id");
  console.log(useparams)

  const [userdata, setuserData] = useState([])


  const navigate = useNavigate();

  const Values = localStorage.getItem('initial');
  console.log(Values)




  const rr = () => {
    navigate(`/dashboard/${useparams.id}`);
  }

  useEffect(() => {

    axios.get("http://localhost:8000/shdata").then((data) => {
      setuserData(data.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const tt = (e) => {
    e.preventDefault();
    navigate(`/cart/${useparams.id}`);
  }

  // const kk = (e) => {
  //   e.preventDefault();
  //   navigate(`/product/${useparams.id}`);
  // }



  return (
    <div>

      <nav className="nav-wraper indigo">
        <div className="container">
          <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style10' onClick={tt}>cart</button>
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
        <h4 className='center'>Shirts</h4>
        <div className='row s12'>
          {userdata.map((datas) => {
            console.log(datas.photo)
            return (<>
              <div className='col s3'>
                <div className='card'>
                  <div className='card-content'>
                  {datas.availability === true ? (<div className='center' style={{color : "green" , fontSize : "20px"}}>{datas.stock1}</div>) : (<div className='center' style={{color : "red",fontSize : "20px"}}>{datas.stock2}</div>)}<hr/>
                    <img src={`http://localhost:8000/${datas.photo}`} style={{ height: "200px", width: "200px" }} alt="..." />
                    <p>Shoe name  :&nbsp;&nbsp;&nbsp;{datas.name}</p>
                    <p>Product prize : Rs.&nbsp;&nbsp;&nbsp;<span className='style20'>{datas.prize}</span></p>
                    <p>Offer Prize : Rs. {datas.offerprize}</p>
                  </div>
                  <div className='card-action center'>
                    {Values === useparams.id ? (<div>
                      <button className='btn' onClick={() => {
                        if(datas.availability === true){
                          const pp = {
                            username: useparams.id,
                            name: datas.name,
                            prize: datas.prize,
                            offerprize  :datas.offerprize,
                            photo: `http://localhost:8000/${datas.photo}`
                          }
  
                          axios.post(`http://localhost:8000/addcart/${useparams.id}`, pp).then((data) => {
                            console.log(data);
                            alert('posted')
                          }).catch((err) => {
                            console.log(err)
                          })
                        }else{
                          alert("out of Stack")
                        }
                      }}>AddCart</button>
                    </div>) : (<div>
                      <button className='btn center' onClick={() => {
                        window.localStorage.setItem("name", datas.name)
                        window.localStorage.setItem("prize", datas.prize)
                        window.localStorage.setItem("photo",`http://localhost:8000/${datas.photo}`)
                      }}>AddCart</button>
                    </div>)}&nbsp;
                  </div>
                </div>
              </div>
            </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Mobiles