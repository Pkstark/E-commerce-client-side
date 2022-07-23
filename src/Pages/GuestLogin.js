import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  // const data = useRef();

  const navigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault();

    const Details = {
      username: username,
      password: password
    }
    console.log(Details)

    //axios

    axios.post('http://localhost:8000/login', Details).then((data) => {
      console.log(data);

      if (data.data.error) {
        alert(data.data.error)
      } else {
        navigate(`/.cart/${data.data.username}`);
        window.localStorage.setItem("initial", data.data.username);
      }
    }).catch((err) => {
      console.log(err)
      alert("something went to wrong")
    })

    let pk = document.getElementById('username');
    pk.value = "";
    let pk1 = document.getElementById('password');
    pk1.value = "";

  }

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col s8 offset-s1'>
            <div className='card'>
              <form onSubmit={handleSubmit}>
                <h4 className='center'>Login</h4><br />
                <div className='card-content'>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className='material-icons prefix'>account_circle</i>
                      <input id="username" type="text" className="validate" name='username' onChange={(e) => setUsername(e.target.value)} required />
                      <label for="username">Username</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className='material-icons prefix'>visibility</i>
                      <input id="password" type="password" className="validate" name='password' onChange={(e) => setPassword(e.target.value)} required />
                      <label for="password">Password</label>
                    </div>
                  </div>
                  <div className='center'>
                    <a style={{ color: "red" }} href="/forgetpass">Forget Password ? </a>
                  </div>
                </div>
                <div className='card-action center'><br />
                  <button className='btn' type='submit'>Login</button>
                </div>
              </form>
              <p className='center'>You Don't have a Account Please ! <a href='/.register' style={{ color: "blue" }}>Register here</a> </p><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login