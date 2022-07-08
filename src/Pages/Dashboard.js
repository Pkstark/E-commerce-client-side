import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';

function Dashboard() {

  const useparams = useParams("id");
  console.log(useparams)


  const [reset, setReset] = useState(null);



  const navigate = useNavigate();

  const activate = () => {
    var elems = document.querySelectorAll('.sidenav');
    var trigger = M.Sidenav.init(elems, {});
}

  const Trig = () => {
    var elems = document.querySelectorAll('.modal');
    var trigg = M.Modal.init(elems, {});
  }



 
const navi =() =>{
    navigate(`/Todos/${useparams.id}`)
}

const updatedPass = (e) => {
    e.preventDefault();

    const dd = {
        username : useparams.id,
        password : reset
    }
    console.log(dd);

    axios.put("http://localhost:8000/PasswordUpdate", dd).then((data) => {
        if(data){
            alert(data);
        }else{
            console.log("wrong")
        }
    })
    
let ll = document.getElementById('del');
ll.value = "";
}

const deleteAccount = (e) => {
    e.preventDefault();

    const DeleteData = {
        username : useparams.id
    }

    axios.post("http://localhost:8000/AccDelete" , DeleteData).then((data) => {
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
  return (
  
  <>

<nav class="nav-wraper indigo">
            <div className="container">
            <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style3 sidenav-trigger' onClick={activate} data-target ="resposive" >Profile</button>
            </div>
        </div>
        </nav>
        <ul className="sidenav indigo" id="resposive"><br/><br/>
        <h4 className='center' style={{color : "white"}}>DevShip</h4>
        <div className='style6'>
            {/* <li> <button className='btn indigo style4 modal-trigger' data-target="change4" onClick={Trig}>Account</button></li><br/><br/> */}
            <li> <button className='btn indigo style4 modal-trigger' data-target="change3" onClick={pass} ><a href='#change' className='style5'>Forget Password</a></button></li><br/><br/>
            {/* <li> <button className='btn indigo style4 modal-trigger' data-target="change" onClick={Trig}> Add Todos</button></li><br/><br/> */}
            <li> <button className='btn indigo style4 ' onClick={navi} >Todos</button></li><br/><br/>
            <li> <button className='btn indigo style4 modal-trigger' data-target="change2" onClick={Trig}>Delete Account</button> </li><br/><br/>
            <li> <button className='btn indigo style4' onClick={Logout}> Logout</button></li><br/><br/>
        </div>
        </ul>



        <div id="change3" className="modal">
    <form onSubmit={updatedPass}>
        <div className="modal-content">
            <h4 className='center'>Change Password</h4>
            <input type="text" id='del' placeholder = "Enter a New Password" onChange={(e) => setReset(e.target.value)}  required/>
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

    <div className='container'>
      <div className='card '>
        <div className='card-content center'>
          <h4>Hello, {useparams.id}</h4>
          <h5>Welcome to the Devship</h5>
        </div>
      </div>
    </div>



    
    
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

    </>
  )
}

export default Dashboard