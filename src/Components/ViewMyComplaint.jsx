import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar1 from './NavBar1'

const ViewMyComplaint = () => {
    const [compData, setCompData] = useState(
        []
    )

    const apiLink = "http://localhost:3001/viewmc"

    const getData = () => {
        let userid = sessionStorage.getItem("userid")
        axios.post(apiLink, userid).then(
            (Response) => {
                setCompData(Response.data)
            }
        )
    }

    useEffect(()=>{getData()},[])

    return (
        <div>
            <NavBar1/>
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
                                    return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Complaint ID: {value.compId}</h5>
                                                <p class="card-text"><h5>Title: </h5>{value.compTitle}</p>
                                                <p class="card-text"><h5>Description: </h5>{value.compDesc}</p>
                                                <p class="card-text"><h5>Location: </h5>{value.compLocation}</p>
                                                <p class="card-text"><h5>Complaint Posted Date: </h5>{value.compDate}</p>
                                                <p class="card-text"><h5>Remarks: </h5>{value.Remarks}</p>
                                                <p class="card-text"><h5>Status: </h5>{value.Status}</p>
                                                <a href="#" class="btn btn-primary">Delete</a>
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