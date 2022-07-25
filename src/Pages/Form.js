import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';

function Form() {

    const [uploadForm, setUploadForm] = useState([{ username: "", url: "", img: "", select: "" }]);

    const [username, setusername] = useState('');
    const [url, seturl] = useState('');
    const [photo, setphoto] = useState('');
    const [select, setselect] = useState('');

    const [userData, setuserData] = useState([]);


    const useparams = useParams("id");

    const navigate = useNavigate();


    const rr = () => {
        navigate(`/dashboard/${useparams.id}`);
    }
    const kk = () => {
        navigate(`/shipadd/${useparams.id}`);
    }

    const drop = () => {
        let drop = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(drop)
    }

    const addForm = () => {
        setUploadForm([...uploadForm, { username: "", url: "", img: "", select: "" }])
    }

    const removeField = (index) => {
        const values = [...uploadForm];
        values.splice(index, 1);
        setUploadForm(values)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("username", useparams.id);
        formData.append("name", username)
        formData.append("url", url);
        formData.append("image", photo);
        formData.append("select", select)

        axios.post("http://localhost:8000/addform", formData).then((data) => {
            console.log(data);
            alert("form successfully Uploaded");

            getData();
        }).catch((err) => {
            console.log(err);
        })

        document.getElementById('kk').value = null;
        document.getElementById('k').value = null;
        document.getElementById('ff').value = null;
        document.getElementById('f').value = null;

        // let pk = document.getElementById('kk');
        // pk.value = "";
        // let pk1 = document.getElementById('k');
        // pk1.value = "";
        // let pk3 = document.getElementById('ff');
        // pk3.value = "";
        // let pk4 = document.getElementById('f');
        // pk4.value = "";
    }


    useEffect(() => {
        getData();
        resetData();
    }, [])

    const getData = () => {
        const pk = {
            username: useparams.id
        }
        axios.post("http://localhost:8000/formdata", pk).then((data) => {
            setuserData(data.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const resetData = () => {

    }

    return (
        <div>

            <div className='navbar-fixed'>
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
            </div>

            <div className='container'>

                {userData.map((datas) => {
                    return (<div>
                        <div className='card'>

                            <a className="btn-floating red right" onClick={()=>{
                                axios.post(`http://localhost:8000/formdelete/${datas._id}`).then((data) =>{
                                    console.log(data);
                                    getData();
                                }).catch((err) => {
                                    console.log(err)
                                })
                            }}>
                                <i className="material-icons">remove</i>
                            </a>
                            <div className='card-content'>
                                <div className='row s12'>
                                    <div className='col s3 center'>
                                        <label >Name : {datas.name}</label>
                                    </div>

                                    <div className='col s3 center '>
                                        <label>URL : {datas.url}</label>
                                    </div>

                                    <div className='col s3 center'>
                                        <img src={`http://localhost:8000/${datas.image}`} style={{ height: "50px", width: "50px" }} />
                                    </div>

                                    <div class="col s3 center">
                                        <label>Status : {datas.select}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}

                <hr />
                <form encType="multipart/form-data">
                    <a className="btn-floating yellow" onClick={() => addForm()}>
                        <i className="material-icons left">add</i>
                    </a>
                    {uploadForm.map((datas, index) => {
                        return (
                            <div key={index}>
                                <a className="btn-floating red right" >
                                    <i className="material-icons" onClick={() => removeField(index)}>cancel</i>
                                </a>

                                <div className='card'>
                                    <div className='card-content'>
                                        <div className='row s12'>
                                            <div className='input-field col s3 '>
                                                <input type="text" className="validate" id='kk' name='name' onChange={(e) => setusername(e.target.value)} required />
                                                <label for="Adminpassword">Username</label>
                                            </div>

                                            <div className='input-field col s3 '>
                                                <input type="url" id='k' className="validate" name='url' onChange={(e) => seturl(e.target.value)} required />
                                                <label for="Adminpassword">Url</label>
                                            </div>

                                            <div className='col s3 style36'>
                                                <input type='file' name='image' id='ff' onChange={(e) => setphoto(e.target.files[0])} accept=".png, .jpeg, .jpg" />
                                            </div>

                                            <div class="input-field col s3 style37">
                                                <select id='f' className="browser-default" name='select' onChange={(e) => setselect(e.target.value)}>
                                                    <option>Status</option>
                                                    <option>Active</option>
                                                    <option >Inactive</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    <div className='right'>
                        <button className='btn' type='submit' onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Form