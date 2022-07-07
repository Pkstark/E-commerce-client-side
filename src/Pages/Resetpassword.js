import React, { useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios'

function Resetpassword() {

  const useparams = useParams();
  const navigate = useNavigate();

  const [resetPassword, setResetPassword] = useState({password : ""})

  const resetPassHandler = async (e) => {
    e.preventDefault();

    if(PasswordValidation()){
      const {password} = resetPassword;

      const data = await axios.post(`http://localhost:8000/resetpassword/${useparams.id}/${useparams.token}`,{password})

      console.log(data)
      navigate("/login")
    }

    let tt = document.getElementById('email');
    tt.value="";
  }

  const PasswordValidation = () => {
    const {password} = resetPassword;
    
    if(password === "") {
      console.log("password is required");
      alert("password is required");
      return false;
    }
    return true;
  }

  const PassVal  = (e) => {
    setResetPassword({...resetPassword, [e.target.name] : e.target.value })
  }
  return (
    <div className='container'>
      <form onSubmit={resetPassHandler}>
          <div className='card '>
            <div className='card-content'>
              <h4 className='center'>Reset Password</h4><br/><br/>
              <div className="input-field col s12">
                  <i className='material-icons prefix'>visibility</i>
                    <input id="email" type="text" className="validate" required name='password' onChange={(e) => PassVal(e)}/>
                    <label for="email">Reset Password</label>
              </div>
            </div><br/><br/>
            <div className='card=action center'>
              <input type='submit' className = " btn style7"/>
            </div><br/><br/>
          </div>
          </form>
    </div>
  )
}

export default Resetpassword