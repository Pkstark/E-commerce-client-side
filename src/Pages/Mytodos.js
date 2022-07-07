import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Mytodos() {
    const navigate = useNavigate();
    const useparams = useParams("id");

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
    <div className='container'>
      <div>
      <h4 className='center'>My todos       <button onClick={pp} className = 'btn center'>Back</button></h4>
      </div>
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
                  <a className="btn success" onClick={()=>{
                      const ids = {
                      ids : datas._id
                    }
                    axios.post("http://localhost:8000/deletetodo",ids).then((data)=>{
                      console.log(data);
                      navigate(`/dashboard/${useparams.id}`)
                    }).catch((err)=>{
                    console.log(err)
                  })}}>Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)}</div>):(<p>No data is here</p>)}
</div>
  )
}

export default Mytodos