import axios from 'axios'
import React, { useState } from 'react'

const AddComplaint = () => {
    const [inputField,setInputField]=useState(
        {compId:sessionStorage.getItem(userid),compTitle:"",compDesc:"",compLocation:"",compDate:"",Remarks:"",Status:"0"}
    )
    
    const apiLink="http://localhost:3001/addc"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post(apiLink,inputField).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    alert("Complaint Posted Successfully!!")
                    setInputField({compId:"",compTitle:"",compDesc:"",compLocation:"",compDate:"",Remarks:"",Status:"0"})
                } else {
                    alert("Something Went Wrong !!!")
                }
            }
        )
        
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Add Complaint</h1>
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Complaint Title</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="compTitle" value={inputField.compTitle} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea onChange={inputHandler} name="compDesc" id="" cols="30" rows="10" className="form-control" value={inputField.compDesc}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Location</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="compLocation" value={inputField.compLocation} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Complaint Posted Date</label>
                            <input onChange={inputHandler} type="date" name="compDate" id="" className="form-control" value={inputField.compDate} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddComplaint