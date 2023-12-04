import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Heading from './Heading'

const Registration = () => {
    const [inputField,setInputField]=useState(
        {name:"",dob:"",age:"",address:"",mobileNumber:"",username:"",password:"",confirmpass:""}
    )

    const apiLink="http://3.7.243.160:3001/regc"

    const navigate=useNavigate()

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readvalue=()=>{
        console.log(inputField)
        axios.post(apiLink,inputField).then(
            (Response)=>{
                if (inputField.password==inputField.confirmpass) {
                    if (Response.data.status=="success") {
                        alert("User Registered Successfully!!!")
                        setInputField({name:"",dob:"",age:"",address:"",mobileNumber:"",username:"",password:""})
                        navigate("/")
                    } else {
                        alert("Something Went Wrong!!!")
                    }
                } else {
                    alert("Password and Confirm Password don't match!!!")
                }
            }
        )
    }

  return (
    <div>
        <Heading/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Registration</h1>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="name" value={inputField.name} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input onChange={inputHandler} type="date" name="dob" id="" className="form-control" value={inputField.dob} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Age</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="age" value={inputField.age} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea onChange={inputHandler} name="address" id="" cols="30" rows="10" className="form-control" value={inputField.address}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Mobile Number</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="mobileNumber" value={inputField.mobileNumber} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Username</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="username" value={inputField.username} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Password</label>
                            <input onChange={inputHandler} type="password" name="password" id="" className="form-control" value={inputField.password} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input onChange={inputHandler} type="password" name="confirmpass" id="" className="form-control" value={inputField.confirmpass} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readvalue} className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    </div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <a href="/">Already Registered? Go to Login Page !!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration