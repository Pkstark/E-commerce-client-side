import React, { useState , } from 'react';
import axios from 'axios';

function Forgetpassword() {

const [dataValue, setDataValue] = useState({email : ""});
// const navigate = useNavigate();

const Verified = async (e) => {
    e.preventDefault();
    if(Validatation()){
      const {email} = dataValue;

      const data = await axios.post("http://localhost:8000/forgetpass", {email})
      if(data.data.status !== true){
        alert("something wrong");
        console.log(data)
      }
      if(data.data.status === true){
        alert("Success mail send");
      }
    }

    let tt = document.getElementById('email');
    tt.value = "";
}


const Validatation = () => {
  const {email} = dataValue; 

  if(email.length === "") {
    alert("Required Email !! Please Enter the Validate email!!!");
    return false;
  }
  return true;
}


const valuesHandle = (e) => {
  setDataValue ({...dataValue, [e.target.name] : e.target.value})
}

  return (
    <div className='container'>
          <form onSubmit={Verified}>
          <div className='card '>
            <div className='card-content'>
              <h4 className='center'>Forget Password</h4><br/><br/>
              <div className="input-field col s12">
                  <i className='material-icons prefix'>email</i>
                    <input id="email" type="text" className="validate" required name='email' onChange={(e) => valuesHandle (e)}/>
                    <label for="email">Enter Your Valide Email</label>
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

export default Forgetpassword;