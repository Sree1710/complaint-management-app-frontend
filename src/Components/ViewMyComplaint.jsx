import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar1 from './NavBar1'

const ViewMyComplaint = () => {
    const [compData, setCompData] = useState(
        []
    )

    const [deleteField, setDeleteField] = useState(
        { _id: "", compId: "", compTitle: "", compDesc: "", compLocation: "", compDate: "", Remarks: "", Status: "0" }
    )

    const deleteHandler = (event) => {
        setDeleteField({ ...deleteField, [event.target.name]: event.target.value })
    }

    const apiLink = "http://localhost:3001/viewmc"
    const apiLink2 = "http://localhost:3001/deletec"

    const getData = () => {
        let userid = { "compId": sessionStorage.getItem("userid") }
        let token = { "token": sessionStorage.getItem("token") }
        axios.post(apiLink, userid, token).then(
            (Response) => {
                setCompData(Response.data)
                setDeleteField(Response.data[0])
            }
        )
    }

    const deleteValue = (id) => {
        let data = { "_id": id }
        axios.post(apiLink2, data).then(
            (Response) => {
                if (Response.data.status == "success") {
                    alert("Complaint deleted successfully!!!")
                    getData()
                } else {
                    alert("Something Went Wrong!!!")
                }
            }
        )
    }

    useEffect(() => { getData() }, [])

    return (
        <div>
            <NavBar1 />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View My Complaints</h1>
                            </div>
                            {compData.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 onChange={deleteHandler} class="card-title" name="compId" value={deleteField.compId}>Complaint ID: {value.compId}</h5>
                                                <p onChange={deleteHandler} class="card-text" name="compTitle" value={deleteField.compTitle} ><h5>Title: </h5>{value.compTitle}</p>
                                                <p onChange={deleteHandler} class="card-text" name="compDesc" value={deleteField.compDesc}><h5>Description: </h5>{value.compDesc}</p>
                                                <p onChange={deleteHandler} class="card-text" name="compLocation" value={deleteField.compLocation} ><h5>Location: </h5>{value.compLocation}</p>
                                                <p onChange={deleteHandler} class="card-text" name="compDate" value={deleteField.compDate} ><h5>Complaint Posted Date: </h5>{value.compDate}</p>
                                                <p onChange={deleteHandler} class="card-text" name="Remarks" value={deleteField.Remarks} ><h5>Remarks: </h5>{value.Remarks}</p>
                                                <p onChange={deleteHandler} class="card-text" name="Status" value={deleteField.Status} ><h5>Status: </h5>{value.Status}</p>
                                                <a onClick={() => { deleteValue(value._id) }} class="btn btn-primary">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMyComplaint