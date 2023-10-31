import React, { useState } from 'react'
import Heading from './Heading'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [inputField, setInputField] = useState(
        { username: "", password: "" }
    )

    const navigate = useNavigate()

    const apiLink = "http://localhost:3001/loginc"

    const inputHandler = (event) => {
        setInputField({ ...inputField, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(inputField)
        axios.post(apiLink, inputField).then(
            (Response) => {
                if (Response.data.status == "success") {
                    if (Response.data.data.username == "admin") {
                        navigate("/viewac")
                    } else {
                        let userid = Response.data.data._id
                        sessionStorage.setItem("userid", userid)
                        navigate("/addc")
                    }
                } else {
                    alert(Response.data.status)
                }
            }
        )
    }

    return (
        <div>
            <Heading />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>Login</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Username</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="username" value={inputField.username} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input onChange={inputHandler} type="password" name="password" id="" className="form-control" value={inputField.password} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-primary">Sign In</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <a href="/regc">New User? Register Here !!!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login