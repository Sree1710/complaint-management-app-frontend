import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar2 from './NavBar2'
import { useNavigate } from 'react-router-dom'

const ViewAllComplaint = () => {
    const [compData, setCompData] = useState(
        []
    )

    const apiLink = "http://localhost:3001/viewac"

    const getData = () => {
        axios.get(apiLink).then(
            (Response) => {
                setCompData(Response.data)
            }
        )
    }


    

    useEffect(() => { getData() }, [])

    return (
        <div>
            <NavBar2/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View All Complaints</h1>
                            </div>
                            {compData.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-stretch">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Complaint ID: {value.compId}</h5>
                                                <p class="card-text"><h5>Title: </h5>{value.compTitle}</p>
                                                <p class="card-text"><h5>Description: </h5>{value.compDesc}</p>
                                                <p class="card-text"><h5>Location: </h5>{value.compLocation}</p>
                                                <p class="card-text"><h5>Complaint Posted Date: </h5>{value.compDate}</p>
                                                <p class="card-text"><h5>Remarks: </h5>{value.Remarks}</p>
                                                {value.Status==0 ? <p class="card-text"><h5>Status: </h5>Processing</p> : <p class="card-text"><h5>Status: </h5>Issue Resolved</p> }
                                                <a href={'/addr/'+value._id}  class="btn btn-primary">Add Remarks</a>
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

export default ViewAllComplaint