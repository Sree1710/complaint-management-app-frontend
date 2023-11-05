import React, { useEffect, useState } from 'react'
import NavBar2 from './NavBar2'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const AddRemark = () => {
    const [updateField, setUpdateField] = useState(
        {Remarks:"",Status:"1"}
    )

    const [compData, setCompData] = useState(
        []
    )

    const param = useParams()

    const getData = () => {
        let cid = param.cid
        let data = { "_id": cid }
        axios.post(apiLink, data).then(
            (Response) => {
                setCompData(Response.data)
                setUpdateField(Response.data[0])
            }
        )
    }

    const apiLink = "http://localhost:3001/getcompdata"
    const apiLink2 = "http://localhost:3001/updateac"

    const navigate = useNavigate()


    const updateHandler = (event) => {
        setUpdateField({ ...updateField, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        axios.post(apiLink2, updateField).then(
            (Response) => {
                if (Response.data.status == "success") {
                    alert("Remark Added Successfully!!!")
                    setUpdateField( {Remarks:"",Status:""} )
                    navigate("/viewac")

                } else {
                    alert("Something Went Wrong !!!")
                }
            }
        )
    }

    useEffect(() => { getData() }, [])
    return (
        <div>
            <NavBar2 />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>Add Remark</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Complaint ID</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Complaint Posted Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {compData.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.compId}</th>
                                                    <td>{value.compTitle}</td>
                                                    <td>{value.compDesc}</td>
                                                    <td>{value.compLocation}</td>
                                                    <td>{value.compDate}</td>
                                                    <td></td>
                                                </tr>
                                            }
                                        )}

                                    </tbody>
                                </table>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Remarks</label>
                                <input onChange={updateHandler} type="text" className="form-control" name="Remarks" value={updateField.Remarks} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Status</label>
                                <input onChange={updateHandler} type="text" className="form-control" name="Status" value={updateField.Status} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-warning">Enter Remark</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRemark