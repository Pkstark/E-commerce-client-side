import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Address() {
  const useparams = useParams("id");

  const navigate = useNavigate();

  const [form, setForm] = useState([{ flateno: "", address1: "", address2: "", city: "", state: "", pincode: "", mobile: "" }])


  const [flatno, setFlat] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [pincode, setPincode] = useState("")
  const [mobile, setMobile] = useState("")

  const [count, setcount] = useState(0);
  const [counter, setcounter] = useState(1);
  const [disable, setdisable] = useState(false)
  const [disabled, setdisabled] = useState(false)


  const rr = () => {
    navigate(`/dashboard/${useparams.id}`);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(count)

    const limit = 2

    if(count<limit){
      const pk ={
        username : useparams.id,
        flatno: flatno,
        address1:address1,
        address2:address2,
        city:city,
        state:state,
        pincode:pincode,
        mobile:mobile
      }
  
      axios.post("http://localhost:8000/address",pk).then((data) => {
        console.log(data);
        alert("address added")
        // navigate(`/shipadd/${useparams.id}`)
      }).catch((err) => {
        console.log(err)
      })
  
      console.log(pk)
  
      
  
      let pr = document.getElementById('a');
      pr.value = "";
      let pk1 = document.getElementById('b');
      pk1.value = "";
      let pk2 = document.getElementById('c');
      pk2.value = "";
      let pk3 = document.getElementById('d');
      pk3.value = "";
      let pk4 = document.getElementById('e');
      pk4.value = "";
      let pk5 = document.getElementById('f');
      pk5.value = "";
      let pk6 = document.getElementById('g');
      pk6.value = "";
    }else{
      setdisable(true)
      alert("limit cross")

      let pr = document.getElementById('a');
      pr.value = "";
      let pk1 = document.getElementById('b');
      pk1.value = "";
      let pk2 = document.getElementById('c');
      pk2.value = "";
      let pk3 = document.getElementById('d');
      pk3.value = "";
      let pk4 = document.getElementById('e');
      pk4.value = "";
      let pk5 = document.getElementById('f');
      pk5.value = "";
      let pk6 = document.getElementById('g');
      pk6.value = "";
    }
  }

  const addField = () => {
    console.log(counter)
    const llt = 3;

    if(counter < llt){
      setForm([...form, { flateno: "", address1: "", address2: "", city: "", state: "", pincode: "", mobile: "" }])
    }else{
      setdisabled(true)
    }
  }

  const removeField = () => {
    const val = [...form];
    val.splice(1);
    setForm(val);
  }

  const kk = () => {
    navigate(`/shipadd/${useparams.id}`);
  }


  return (
    <div>
      <nav className="nav-wraper indigo">
        <div className="container">
          <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style11' onClick={rr}>Dashboard</button>
            <button className='btn indigo right style29' onClick={kk}>Ship Address</button>
          </div>
        </div>
      </nav>
      <ul className="sidenav indigo" id="resposive"><br /><br />
        <h4 className='center' style={{ color: "white" }}>DevShip</h4>
        <div className='style6'>
        </div>
      </ul>
      {/* 
      */}

      <div className='container'>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="modal-content">
            <h4 className='center'>Add Address</h4>
            <a className="btn-floating btn-large yellow">
              <i className="large material-icons left" disabled = {disabled} onClick={() => {
                setcounter(counter + 1);
                addField();
              }}>add</i>
            </a>
            <a className="btn-floating btn-large red right">
                    <i className="large material-icons" onClick={removeField}>remove</i>
            </a>
            <div className="row s12">
              {form.map((datas) => {
                return (<div>
                  <div className='col s4'>
                    <div className='card'>
                      <div className='card-content'>
                        <h5 className='center'>Address</h5>
                        <div className='row'>
                          <div className="input-field col s6">
                            <input type="text" className="validate" id='f'  onChange={(e) => setFlat(e.target.value)} name="flatno" required />
                            <label for="Adminpassword">Flat No</label>
                          </div>

                          <div className="input-field col s6">
                            <input type="text" className="validate" id='g'  onChange={(e) =>setAddress1(e.target.value)} name="address1" required />
                            <label>Address 1</label>
                          </div>
                        </div>

                        <div className='row'>
                          <div className="input-field col s6">
                            <input type="text" className="validate" id='a'  onChange={(e) =>setAddress2(e.target.value)} name="address2" required />
                            <label>Address 2</label>
                          </div>

                          <div className="input-field col s6">
                            <input type="text" className="validate" id='b' onChange={(e) =>setCity(e.target.value)} name="city" required />
                            <label>City</label>
                          </div>
                        </div>

                        <div className='row'>
                          <div className="input-field col s6">
                            <input type="text" className="validate" id='c' onChange={(e) =>setState(e.target.value)} name="state" required />
                            <label>State</label>
                          </div>

                          <div className="input-field col s6">
                            <input type="text" className="validate" id='d'  onChange={(e) =>setPincode(e.target.value)} name="pincode" required />
                            <label>Pincode</label>
                          </div>
                        </div>

                        <div className="input-field col s12">
                          <input type="text" className="validate" id='e' onChange={(e) =>setMobile(e.target.value)} name="mobile" required />
                          <label>Mobile number</label>
                        </div>

                        <div className="modal-footer center">
                          <button type='submit' className='btn center' disabled = {disable} onClick={(e) => setcount(count + 1)}>Added</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)
              })}

            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Address