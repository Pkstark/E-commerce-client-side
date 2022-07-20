import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';


function ShippingAddress() {

    const useparams = useParams("id");

    const navigate = useNavigate();

    const [userData, setuserData] = useState([])

    const [Flatno, setFlat] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPincode] = useState("")
    const [mobile, setMobile] = useState("")

    const [disable, setdisable] = useState(false)
    const [count, setcount] = useState(0);

    const rr = () => {
        navigate(`/dashboard/${useparams.id}`);
    }
    const kk = () => {
        navigate(`/add/${useparams.id}`);
    }


    const trigg = () => {
        var elems = document.querySelectorAll('.modal');
        var trigger = M.Modal.init(elems, {});
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(count)

        const limit = 3

        if (count < limit) {
            const pk = {
                username: useparams.id,
                flatno: Flatno,
                address1: address1,
                address2: address2,
                city: city,
                state: state,
                pincode: pincode,
                mobile: mobile
            }

            axios.post("http://localhost:8000/address", pk).then((data) => {
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
        } else {
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


    const gest = () => {
        var elems = document.querySelectorAll('.modal');
        var trigger = M.Modal.init(elems, {});
    }


    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        const pp = {
            username: useparams.id
        }
        axios.post("http://localhost:8000/getaddress", pp).then((data) => {
            setuserData(data.data)
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const ids = localStorage.getItem("id2")
    const name = localStorage.getItem("name");
    const prize = localStorage.getItem("prize");
    const photo = localStorage.getItem("photo");
    const offerprize = localStorage.getItem("offerprize");
    const quantity = localStorage.getItem("quantity");
    const discount = localStorage.getItem("discount");
    const flatno = localStorage.getItem("faltno");
    const Address = localStorage.getItem("address1");
    const Address1 = localStorage.getItem("address2");
    const City = localStorage.getItem("city");
    const State = localStorage.getItem("state");
    const Pincode = localStorage.getItem("pincode");
    const Mobile = localStorage.getItem("mobile");

    const DataPosted = (e) => {
        e.preventDefault();

        const pk = {
            username : useparams.id,
            name : name,
            prize : prize,
            photo : photo,
            offerprize : offerprize,
            quantity : quantity,
            discount : discount,
            flatno : flatno,
            address1 : Address,
            address2 : Address1,
            city : City,
            state : State,
            pincode : Pincode,
            mobile : Mobile
        }

        axios.post ("http://localhost:8000/overall",pk).then((data) => {
            console.log(data);
            alert("Order Successfully")
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
                        <button className='btn indigo right style11' onClick={rr}>Dashboard</button>
                        <button className='btn indigo right style29' onClick={kk}>Address</button>
                    </div>
                </div>
            </nav>
            <ul className="sidenav indigo" id="resposive"><br /><br />
                <h4 className='center' style={{ color: "white" }}>DevShip</h4>
                <div className='style6'>
                </div>
            </ul>

            <div className="fixed-action-btn">
                <a className="btn-floating btn-large green">
                    <i className="large material-icons modal-trigger" data-target="change" onClick={trigg}>add</i>
                </a>
            </div>

            <div className='row container'>
                <h5 className='center'>Address</h5>
                <div className='row'>
                    {userData.length <= 3 ? (<div>
                        {userData.map((datas) => {
                            return (<div>
                                <div className='col s3'>
                                    <div className='card'>
                                        <div className='card-content'>
                                            <a className="btn-floating style32 red right">
                                                <i className="large material-icons modal-trigger" data-target="change2" onClick={trigg}>cancel</i>
                                            </a>
                                            <p>Client Name : {useparams.id}</p><br />
                                            <p>Address : &nbsp;{datas.flatno},&nbsp;{datas.address1},&nbsp;{datas.address2}.</p><br />
                                            <p>City : &nbsp;{datas.city}</p><br />
                                            <p>State :&nbsp; {datas.state}</p><br />
                                            <p>Phone Number : &nbsp; {datas.mobile}</p><br />
                                            <button className='btn modal-trigger' data-target="change1" onClick={() => {
                                                window.localStorage.setItem("id2", datas._id)
                                                console.log(ids)
                                                gest()
                                            }}>Update</button>
                                            <button className='btn style30' onClick={() => {
                                                window.localStorage.setItem("faltno", datas.flatno);
                                                window.localStorage.setItem("address1", datas.address1);
                                                window.localStorage.setItem("address2", datas.address2);
                                                window.localStorage.setItem("city", datas.city);
                                                window.localStorage.setItem("state", datas.state);
                                                window.localStorage.setItem("pincode", datas.pincode);
                                                window.localStorage.setItem("mobile", datas.mobile);
                                            }}>Select</button>
                                        </div>
                                    </div>
                                </div>


                                <div id="change1" className="modal">
                                    <form encType="multipart/form-data" >
                                        <div className="modal-content">
                                            <h4 className='center'>Update Address</h4>
                                            <div className='row'>
                                                <div className='col s12'>
                                                    <div className='row'>
                                                        <div className="input-field col s6">
                                                            <input type="text" className="validate" id='f' onChange={(e) => setFlat(e.target.value)} name="flatno" required />
                                                            <label for="Adminpassword">Flat No</label>
                                                        </div>

                                                        <div className="input-field col s6">
                                                            <input type="text" className="validate" id='g' onChange={(e) => setAddress1(e.target.value)} name="address1" required />
                                                            <label>Address 1</label>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className="input-field col s6">
                                                            <input type="text" className="validate" id='a' onChange={(e) => setAddress2(e.target.value)} name="address2" required />
                                                            <label>Address 2</label>
                                                        </div>

                                                        <div className="input-field col s6">
                                                            <input type="text" className="validate" id='b' onChange={(e) => setCity(e.target.value)} name="city" required />
                                                            <label>City</label>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className="input-field col s6">
                                                            <input type="text" className="validate" id='c' onChange={(e) => setState(e.target.value)} name="state" required />
                                                            <label>State</label>
                                                        </div>

                                                        <div className="input-field col s6">
                                                            <input type="text" className="validate" id='d' onChange={(e) => setPincode(e.target.value)} name="pincode" required />
                                                            <label>Pincode</label>
                                                        </div>
                                                    </div>

                                                    <div className="input-field col s12">
                                                        <input type="text" className="validate" id='e' onChange={(e) => setMobile(e.target.value)} name="mobile" required />
                                                        <label>Mobile number</label>
                                                    </div>
                                                </div>
                                                <div className='col s6'>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type='submit' className='btn center' onClick={() => {
                                                const kk = {
                                                    flatno: Flatno,
                                                    address1: address1,
                                                    address2: address2,
                                                    city: city,
                                                    state: state,
                                                    pincode: pincode,
                                                    mobile: mobile
                                                }

                                                axios.put(`http://localhost:8000/addessup/${ids}`, kk).then((data) => {
                                                    console.log(data);
                                                    alert("success");
                                                    getData()
                                                }).catch((err) => {
                                                    console.log(err)
                                                })
                                            }} >Update</button>
                                        </div>
                                    </form>
                                </div>


                                <div id="change2" className="modal">
                                    <form>
                                        <div className="modal-content">
                                            <h4 className='center'>Delete Your Address</h4>
                                            <p className='center'>Are You Sure ? you wnat to Delete your Address...!!!</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type='submit' className='btn mod modal-close indigo' onClick={() => {
                                                    axios.post(`http://localhost:8000/addressdel/${datas._id}`).then((data) => {
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



                            </div>)
                        })}
                    </div>) : (<div>{ }</div>)}
                </div><button className='btn right style31' onClick={DataPosted} >Order</button><hr />
                <div className='row'>
                    <div className='col s4'>

                    </div>
                </div>

            </div>

            <div id="change" className="modal">
                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                    <div className="modal-content">
                        <h4 className='center'>Add Address</h4>
                        <div className='row'>
                            <div className='col s12'>
                                <div className='row'>
                                    <div className="input-field col s6">
                                        <input type="text" className="validate" id='f' onChange={(e) => setFlat(e.target.value)} name="flatno" required />
                                        <label for="Adminpassword">Flat No</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input type="text" className="validate" id='g' onChange={(e) => setAddress1(e.target.value)} name="address1" required />
                                        <label>Address 1</label>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="input-field col s6">
                                        <input type="text" className="validate" id='a' onChange={(e) => setAddress2(e.target.value)} name="address2" required />
                                        <label>Address 2</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input type="text" className="validate" id='b' onChange={(e) => setCity(e.target.value)} name="city" required />
                                        <label>City</label>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="input-field col s6">
                                        <input type="text" className="validate" id='c' onChange={(e) => setState(e.target.value)} name="state" required />
                                        <label>State</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input type="text" className="validate" id='d' onChange={(e) => setPincode(e.target.value)} name="pincode" required />
                                        <label>Pincode</label>
                                    </div>
                                </div>

                                <div className="input-field col s12">
                                    <input type="text" className="validate" id='e' onChange={(e) => setMobile(e.target.value)} name="mobile" required />
                                    <label>Mobile number</label>
                                </div>
                            </div>
                            <div className='col s6'>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type='submit' className='btn center' disabled={disable} onClick={(e) => setcount(count + 1)}>Update</button>
                    </div>
                </form>
            </div>



        </div>
    )
}

export default ShippingAddress