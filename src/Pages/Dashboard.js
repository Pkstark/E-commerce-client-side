import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';
import Img from '../Assets/Mobilles.jpg';
import Img1 from '../Assets/Shirts.jpg';
import Img2 from '../Assets/shoes.jpg';

function Dashboard() {

    const useparams = useParams("id")
    console.log(useparams)
    

    const [emailupdate, setEmailupdate] = useState(null);
    const [userData, setUserData] = useState();


    useEffect(() => {
        const tt = {
            username: useparams.id
        }

        axios.get("http://localhost:8000/dd", tt).then((data) => {
            console.log(data);
            setUserData(data.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const navigate = useNavigate();

    const activate = () => {
        var elems = document.querySelectorAll('.sidenav');
        var trigger = M.Sidenav.init(elems, {});
    }

    const Trig = () => {
        var elems = document.querySelectorAll('.modal');
        var trigg = M.Modal.init(elems, {});
    }


    const Values = localStorage.getItem("initial");

    console.log(Values)

    const ee = (e) => {
        e.preventDefault();
        navigate(`/shoes/${useparams.id}`)
    }

    const ff = (e) => {
        e.preventDefault();
        navigate(`/Shirts/${useparams.id}`)
    }

    const dd = (e) => {
        e.preventDefault();
        navigate(`/mobile/${useparams.id}`)
    }

    const navi = () => {
        navigate(`/Todos/${useparams.id}`)
    }

    const updatedPass = (e) => {
        e.preventDefault();

        const dd = {
            username: useparams.id,
            email: emailupdate
        }
        console.log(dd);

        axios.put(`http://localhost:8000/updateuser/${useparams.id}`, dd).then((data) => {
            if (data) {
                alert("Updated");
            } else {
                console.log("wrong")
            }
        })

        let ll = document.getElementById('del');
        ll.value = "";
    }

    const deleteAccount = (e) => {
        e.preventDefault();

        const DeleteData = {
            username: useparams.id
        }

        axios.post("http://localhost:8000/AccDelete", DeleteData).then((data) => {
            console.log(data);
            alert("user Successfully Deleted!!!");
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }

    const Logout = () => {
        navigate("/login")
    }

    const pass = () => {
        navigate('/forgetpass')
    }

    const pass2 = () => {
        navigate(`/cart/${useparams.id}`);
    }

    const poste = (e) => {
        e.preventDefault();
        navigate(`/ship/${useparams.id}`);
    }

    const posted = (e) => {
        e.preventDefault();
        navigate(`/order/${useparams.id}`);
    }

    const pass3 = (e) => {
        e.preventDefault();
        navigate(`/shipadd/${useparams.id}`);
    }

    const ll = () => {
        var elems = document.querySelectorAll('.modal');
        var trigg = M.Modal.init(elems, {});
    }

    return (

        <>
            <nav className="nav-wraper indigo">
                <div className="container">
                    <div>
                        <a href="/rr" className="brand-logo left">Devship</a>
                        <button className='btn indigo right style14' onClick={posted}>MyOrders</button>
                        {/* <button className='btn indigo right style21' onClick={poste}>Shipping</button> */}
                        <button className='btn indigo right style3 sidenav-trigger' onClick={activate} data-target="resposive" >Profile</button>
                        <button className='btn indigo right style15' onClick={pass2}>Cart</button>
                        
                        <button className='btn indigo right style26' onClick={pass3}>Address</button>
                    </div>
                </div>
            </nav>
            <ul className="sidenav indigo" id="resposive"><br /><br />
                <h4 className='center' style={{ color: "white" }}>DevShip</h4>
                <div className='style6'>
                    {/* <li> <button className='btn indigo style4 modal-trigger' data-target="change4" onClick={Trig}>Account</button></li><br/><br/> */}
                    <li> <button className='btn indigo style4 modal-trigger' data-target="change4" onClick={ll} ><a href='#change' className='style5'>Profile Update</a></button></li><br /><br />
                    <li> <button className='btn indigo style4 modal-trigger' data-target="change3" onClick={pass} ><a href='#change' className='style5'>Forget Password</a></button></li><br /><br />
                    {/* <li> <button className='btn indigo style4 modal-trigger' data-target="change" onClick={Trig}> Add Todos</button></li><br/><br/> */}
                    <li> <button className='btn indigo style4 ' onClick={navi} >Todos</button></li><br /><br />
                    <li> <button className='btn indigo style4 modal-trigger' data-target="change2" onClick={Trig}>Delete Account</button> </li><br /><br />
                    <li> <button className='btn indigo style4' onClick={Logout}> Logout</button></li><br /><br />
                </div>
            </ul>


            <div id="change4" className="modal">
                <form onSubmit={updatedPass}>
                    <div className="modal-content">
                        <h4 className='center'>Update Profile</h4>
                        <input type="text" id='del' placeholder="Enter a New email" onChange={(e) => setEmailupdate(e.target.value)} required />
                    </div>
                    <div className="modal-footer">
                        <button type='submit' className='btn mod modal-close'>Update</button>
                    </div>
                </form>
            </div>

            {/* Delete Account */}

            <div id="change2" className="modal">
                <form>
                    <div className="modal-content">
                        <h4 className='center'>Delete Your Account</h4>
                        <p className='center'>Are You Sure ? you wnat to Delete your Account...!!!</p>
                    </div>
                    <div className="modal-footer">
                        <button type='submit' className='btn mod modal-close indigo' onClick={deleteAccount}>Delete</button>
                    </div>
                </form>
            </div>

            {/* 
    <div id="change4" className="modal">
    <form onSubmit={updatedPass}>
        <div className="modal-content">
            <h4 className='center'>Change Password</h4>
            <input type="text" id='del' placeholder = "Enter a New Password" onChange={(e) => setReset(e.target.value)}  required/>
        </div>
        <div className="modal-footer">
            <button type='submit' className='btn mod modal-close'>Update</button>
        </div>
    </form>
    </div> */}


            {/* Todo Added */}

            {/* 
        <div id="change" className="modal">
    <form onSubmit={DataSubmit} >
        <div className="modal-content">
            <h4 className='center'>Todo</h4>
            <input type="text" id='ch' placeholder = "Enter a New Password"  required/>
        </div>
        <div className="modal-footer">
            <button type='submit' className='btn mod modal-close indigo'>Add Todo</button>
        </div>
    </form>
    </div> */}

            {/* Overall Todo

    <div id="change1" className="modal">
    <form >
        <div className="modal-content">
            <h4 className='center'>Todo</h4>
            
           {data !== null ? (<div>{data.map((datas) => {
            <div className='container'>
                <div className='row'>
                    <div className='col s12'>
                        <div className='card blue-grey whiten-1'>
                            <div className='card-content white-text'>
                                <span className='card-title'>{datas.text}</span>
                            </div>
                            <div className='card-action'>
                                <a className='btn success' onClick={()=>{
                                    const ids = {
                                        ids : datas._id
                                    }
                                    axios.post("http://localhost:8000/deletetodo",ids).then((data) => {
                                        console.log(data);
                                    }).catch((err) => {
                                        console.log(err)
                                    })
                                }}>Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           })}</div>) : (<p> Todo not found !!!</p>)}
        </div>
        <div className="modal-footer">
            <button className='btn mod modal-close indigo'>Close</button>
        </div>
    </form>
    </div>
 */}

            {/* Account Details */}
            {/* 
    <div id="change4" className="modal">
    <form >
        <div className="modal-content">
            <h4 className='center'>Details</h4>
            <h5> Name : {useparams.id}</h5>
            <h5>Todos : </h5>
        </div>
        <div className="modal-footer">
            <button className='btn mod modal-close indigo'>Close</button>
        </div>
    </form>
    </div> */}


            {/* Forget Passsword*/}

            <div class="row container">
                {Values === useparams.id ? (<div className='center'>
                    <h4 >Welcome to Devship, &nbsp;{Values}</h4>
                </div>) : (<div>
                    <p className='style18 center'>Please Register !!! You Don't have Account <a href='/'>Click here</a></p>
                </div>)}
                <p className='center style17'>Our Products</p>
                <div class="col s4 ">
                    <div class="card">
                        <div class="card-image">
                            <img src={Img} alt = "done"/>
                        </div>
                        <div class="card-content center">
                            <h5>New Mobiles here</h5>
                        </div>
                        <div class="card-action center">
                            <button className='btn' onClick={dd}>View</button>
                        </div>
                    </div>
                </div>

                <div class="col s4 ">
                    <div class="card">
                        <div class="card-image">
                            <img src={Img2} style={{ height: "340px" }} alt = "done1" />
                        </div>
                        <div class="card-content center">
                            <h5>New Shoes here</h5>
                        </div>
                        <div class="card-action center">
                            <button className='btn' onClick={ee}>View</button>
                        </div>
                    </div>
                </div>

                <div class="col s4 ">
                    <div class="card">
                        <div class="card-image">
                            <img src={Img1} style={{ height: "340px" }} alt = "done2"/>
                        </div>
                        <div class="card-content center">
                            <h5>New Shirts here</h5>
                        </div>
                        <div class="card-action center">
                            <button className='btn' onClick={ff}>View</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard