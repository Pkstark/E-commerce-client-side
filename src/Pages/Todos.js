import React, { useState , useEffect} from 'react'

import {useNavigate , useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';

function Todos() {

    const navigate = useNavigate();
    const useparams = useParams("id");
    const [info, setInfo] = useState(null)


    console.log(useparams);

    const pass = (e) => {
        e.preventDefault();
        navigate(`/dashboard/${useparams.id}`)
    }

    const trigg = () => {
        var elems = document.querySelectorAll('.modal');
        var trigger = M.Modal.init(elems, {});
    }

    const DataSubmit = (e) => {
        e.preventDefault();
    
        const dd = {
            username : useparams.id,
            text : info
        }
        console.log(dd)
    
        axios.post("http://localhost:8000/todo", dd).then((data) => {
            console.log(data);
            alert("post Successfully!!!")
        }).catch((err)=> {
            console.log(err)
            alert("something went to wrong")
        })
    
        let ff = document.getElementById('ch');
        ff.value = ""
    
     }

     const [data, setData] = useState(null);
    
    useEffect(() => {
        const pk = {
            username : useparams.id
        }
        axios.post("http://localhost:8000/tododata" , pk).then((data)=>{
            console.log(data)
            setData(data.data)
        }).catch((err) => {
            console.log(err)
            alert("something went to wrong")
        })
    }, [])

    const pp = () => {
      navigate(`/dashboard/${useparams.id}`)
    }

    if(data === null){
        console.log("data not found");
    } else{
        console.log(data)
    }

  return (
    <div>
        <nav class="nav-wraper indigo">
            <div className="container">
            <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style' onClick={pass}>Dashboard</button>
            <button className='btn indigo right style8 modal-trigger' data-target="change" onClick={trigg}>MyTodo</button>
            </div>
        </div>
        </nav>
        <ul className="sidenav indigo" id="resposive"><br/><br/>
        <h4 className='center' style={{color : "white"}}>DevShip</h4>
        <div className='style6'>

        </div>
        </ul>
        
        <div className='container'>
        <div className='row'>
          <div className='col s8 offset-s1'>
            <div className='card'>
              <form onSubmit={DataSubmit}>
                <h4 className='center'>Todos</h4><br/>
                <div className='card-content'>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="ch" type="text" className="validate" name='username' onChange={(e) => setInfo(e.target.value)} required/>
                    <label for="username">Username</label>
                  </div>
                </div>
                </div>
                <div className='card-action center'><br/>
                  <button className='btn' type='submit'>AddTodo</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      <div id="change" className="modal">
    <form  >
        <div className="modal-content">
            <h4 className='center'>Todo</h4>
            {data !== null ? (<div>{data.map((datas)=><div className="container">
   <div>
      <div className="row">
        <div className="col s12">
          <div class="row">
            <div class="col s12 ">
              <div class="card blue-grey whiten-1">
                <div class="card-content white-text">
                  <span class="card-title">{datas.text}</span>
                </div>
                <div class="card-action">
                  <a className="btn success " onClick={()=>{
                      const ids = {
                      ids : datas._id
                    }
                    axios.post("http://localhost:8000/deletetodo",ids).then((data)=>{
                      console.log(data);
                      navigate(`/dashboard/${useparams.id}`)
                    }).catch((err)=>{
                    console.log(err)
                  })}}>Delete</a>
                    <button type='submit' className='btn mod modal-close indigo right' >close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)}</div>):(<p>No data is here</p>)}
        </div>
        <div className="modal-footer">
            
        </div>
    </form>
    </div>

    </div>
  )
}

export default Todos