import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';
import { isWebUri } from 'valid-url';

function Form() {

    const [uploadForm, setUploadForm] = useState([]);

    const [username, setusername] = useState('');
    const [url, seturl] = useState('');
    const [photo, setphoto] = useState('');
    const [select, setselect] = useState('');

    const [dd, setdd] = useState('')
    const [dd1, setdd1] = useState('')
    const [dd2, setdd2] = useState('')

    const [isError, setIsError] = useState('')
    const [isError1, setIsError1] = useState('')
    const [isError2, setIsError2] = useState('')
    const [isError3, setIsError3] = useState('')
    const [isError4, setIsError4] = useState('');

    const [DataId, setDataId] = useState('');

    const [Id, setId] = useState('');
    const [Update, setUpdate] = useState("");
    const [photo1, setphoto1] = useState('')


    const [userData, setuserData] = useState([]);


    const useparams = useParams("id");

    const navigate = useNavigate();


    const rr = () => {
        navigate(`/dashboard/${useparams.id}`);
    }
    const kk = () => {
        navigate(`/shipadd/${useparams.id}`);
    }

    const trigger = () => {
        var elems = document.querySelectorAll('.modal');
        var trig = M.Modal.init(elems, {});
    }

    const addForm = () => {
        setUploadForm([...uploadForm, { username: "", url: "", image: "", select: "" }])
    }

    const removeField = (index) => {
        const values = [...uploadForm];
        values.splice(index, 1);
        setUploadForm(values)
    }


    const handleSubmit = (e) => {

        {uploadForm.map((ff) => {
            setdd(ff.name)
            setdd1(ff.url)
            setdd2(ff.select)
        })}


        e.preventDefault();

        console.log(dd)

            {
                uploadForm.map((hh) => {

                    if(Validation(hh)){
                        const pk = {
                            username: useparams.id,
                            name: hh.name,
                            url: hh.url,
                            select: hh.select
                        }
    
                        axios.post("http://localhost:8000/addform", pk).then((data) => {
                            console.log(data)
                            alert("success");
                            getData();
                        }).catch((err) => {
                            console.log(err)
                        })

                        document.getElementById('kk').value = null;
                        document.getElementById('k').value = null;
                        document.getElementById('ff').value = null;
                        document.getElementById('f').value = null;
    
                    }
                }
            )
        }

        // if (Validation()) {

        //     const formData = new FormData();

        //     formData.append("username", useparams.id);
        //     formData.append("name", username)
        //     formData.append("url", url);
        //     formData.append("image", photo);
        //     formData.append("select", select)

        //     axios.post("http://localhost:8000/addform", formData).then((data) => {
        //         console.log(data);
        //         alert("form successfully Uploaded");
        //         getData();
        //     }).catch((err) => {
        //         console.log(err);
        //     })

        //     document.getElementById('kk').value = null;
        //     document.getElementById('k').value = null;
        //     document.getElementById('ff').value = null;
        //     document.getElementById('f').value = null;
        // }
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


const Validation = (hh) => {

    const regExq = /^(https:\/\/www\.|http:\/\/www\.|www\.)[a-zA-Z0-9\-_$]+\.[a-zA-Z]{2,5}$/g;


    if (hh.url.match(regExq)) {
        setIsError("")
    }else{
        setIsError("invalid Url");
        return false
    }

    if(hh.url === ""){
        setIsError1("Please fill url!!");
        return false
    }else {
        setIsError1("")
    }

    if (photo === "") {
        setIsError2("photo required!!")
        return false
    }else {
        setIsError2("")
    }

    if(hh.name === ""){
        setIsError3("name is required!!");
        return false
    }else{
        setIsError3("");
    }

    if(hh.select === ""){
        setIsError4("please select")
        return false
    }else
    {
        setIsError4("")
    }

    return true

}


const handleChange = (e) => {
    const id = e.target.id;
    const values = e.target.value;

    setUpdate((prevState) => ({
        ...prevState,
        [id]: values,
    }))
}

const handlePhoto = (e) => {
    const value = e.target.files[0];
    const id1 = e.target.id

    setphoto1((prevState) => ({
        ...prevState,
        [id1]: value
    }))
}

const updateForm = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/formup/${Id}`, Update).then((data) => {
        alert("success")
        getData();
    }).catch((err) => {
        console.log(err)
    }).catch((err) => {
        console.log(err)
    })
}


const eventChange = (e, index) => {
    const Values = [...uploadForm];
    Values[index][e.target.name] = e.target.value

    setUploadForm(Values);
}


// const eventPhoto = (e, index) => {
//     const value = [...photo];
//     const [file] = e.target.files;

//     value[index][e.target.name] = file;
//     setphoto(value);
// }

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
                                <div class="col s3 ">
                                    <label>Status : {datas.select}</label>

                                    <button className='btn green right modal-trigger ' data-target="change1" onClick={() => {
                                        trigger();
                                        setId(datas._id)
                                        setUpdate({
                                            name: datas.name,
                                            url: datas.url,
                                            select: datas.select,
                                            image: datas.image
                                        })
                                    }}>
                                        <i className="material-icons">edit</i>
                                    </button><br />
                                    <button className="btn red right modal-trigger style38" data-target="change" onClick={() => {
                                        setDataId(datas._id);
                                        trigger();
                                    }}>
                                        <i className="material-icons">remove</i>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            })}

            <hr />
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
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
                                    <div className='center'>
                                        <span style={{ color: "red" }}>{isError}</span>
                                    </div>
                                    <div className='center'>
                                        <span style={{ color: "red" }}>{isError4}</span>
                                    </div>
                                    <div className='center'>
                                        <span style={{ color: "red" }}>{isError1}</span>
                                    </div>
                                    <div className='center'>
                                        <span style={{ color: "red" }}>{isError2}</span>
                                    </div>
                                    <div className='center'>
                                        <span style={{ color: "red" }}>{isError3}</span>
                                    </div>
                                    <div className='row s12'>
                                        <div className='input-field col s3 '>
                                            <input type="text" className="validate" id='kk' value={uploadForm.username} name='name' onChange={(e) => eventChange(e, index)} required />
                                            <label for="Adminpassword">Username</label>
                                        </div>
                                        <div className='input-field col s3 '>
                                            <input type="text" id='k' className="validate" value={uploadForm.url} name='url' onChange={(e) => eventChange(e, index)} required />
                                            <label for="Adminpassword">Url</label>
                                        </div>

                                        <div className='col s3 style36'>
                                            <input type='file' name='image' id='ff' value={photo.image} onChange={(e) => setphoto(e.target.files[0])} accept=".png, .jpeg, .jpg" required/>
                                        </div>

                                        <div class="input-field col s3 style37">
                                            <select id='f' className="browser-default" value={uploadForm.select} name='select' onChange={(e) => eventChange(e, index)} required>
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
                    <button className='btn' type='submit'>Submit</button>
                </div>
            </form>
        </div>

        <div id="change" className="modal">
            <form>
                <div className="modal-content">
                    <h4 className='center'>Delete Your Address</h4>
                    <p className='center'>Are You Sure ? you wnat to Delete your Address...!!!</p>
                </div>
                <div className="modal-footer">
                    <button type='submit' className='btn mod modal-close indigo' onClick={(e) => {
                        e.preventDefault();
                        axios.post(`http://localhost:8000/formdelete/${DataId}`).then((data) => {
                            console.log(data);
                            getData();
                        }).catch((err) => {
                            console.log(err)
                        })
                    }}>Delete</button>
                </div>
            </form>
        </div>



        <div id="change1" className="modal">
            <form encType="multipart/form-data">
                <div className="modal-content">
                    <div className='row s12'>
                        <div className='input-field col s3 '>
                            <input type="text" className="validate" id='name' value={Update.name} name='name' onChange={handleChange} required />
                        </div>

                        <div className='input-field col s3 '>
                            <input type="text" className="validate" id='url' value={Update.url} name='url' onChange={handleChange} required />
                        </div>

                        <div className='col s3 style36'>
                            <input type='file' name='image' id='image' onChange={handlePhoto} accept=".png, .jpeg, .jpg" required />
                        </div>

                        <div class="input-field col s3 style39">
                            <select id='select' className="browser-default" value={Update.select} name='select' onChange={handleChange} required>
                                <option>Active</option>
                                <option >Inactive</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className="modal-footer">
                    <button className='btn indigo' onClick={updateForm}>Update</button>
                </div>
            </form>
        </div>


    </div>
)
}

export default Form