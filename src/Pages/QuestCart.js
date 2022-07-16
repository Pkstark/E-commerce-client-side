import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

function QuestCart() {

    const useparams = useParams("id");
    const navigate = useNavigate();
    const [Select, setSelect] = useState();
    console.log(useparams);

    const rr = (e) => {
        e.preventDefault();
        navigate(`/dashboard/${useparams.id}`);
    }
    const Values1 = localStorage.getItem("name");
    const Values2 = localStorage.getItem("prize");
    const Values3 = localStorage.getItem("photo");
    const Values4 = localStorage.getItem("offerprize");
    const Values5 = localStorage.getItem("quantity");

    return (
        <div>
            <nav className="nav-wraper indigo">
                <div className="container">
                    <div>
                        <a href="/rr" className="brand-logo left">Devship</a>
                        <button className='btn indigo right style11' onClick={rr}>Dashboard</button>&nbsp;
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
                    <div className='col s3'>
                        <div className='card'>
                            <div className='card-content'>
                                <img src={Values3} style={{ height: "200px", width: "200px" }} alt="done3" />
                                <p>Product Name : {Values1}</p>
                                <p>Product Prize : <span className='style20'>{Values2}</span></p>
                                <p>Offer Prize :Rs. {Values4}</p>
                                <input type="number" onChange={(e) => setSelect(e.target.value)} placeholder="Quantity" id='l'/>
                                <button className='btn center' onClick={() => {
                        const pp = {
                          username: useparams.id,
                          name: Values1,
                          prize: Values2,
                          offerprize : Values4,
                          photo: Values3,
                          quantity : Select
                        }
                        axios.post(`http://localhost:8000/payment`, pp).then((data) => {
                          console.log(data);
                          alert('order Successfully!!!')
                          window.localStorage.setItem("quantity",Select)
                          navigate(`/dashboard/${useparams.id}`)
                        }).catch((err) => {
                          console.log(err)
                        })
                      }}>Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestCart