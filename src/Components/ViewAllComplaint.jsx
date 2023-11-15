import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar2 from './NavBar2'

const ViewAllComplaint = () => {
    const [compData, setCompData] = useState(
        []
    )

    const apiLink = "http://localhost:3001/viewac"

    const getData = () => {
        let token = {"token":sessionStorage.getItem("token")}
        axios.post(apiLink,token).then(
            (Response) => {
                setCompData(Response.data)
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
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View All Complaints</h1>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Complaint ID</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Complaint Posted Date</th>
                                            <th scope="col">Remarks</th>
                                            <th scope="col">Status</th>
                                            <th scope="col"></th>
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
                                                    <td>{value.Remarks}</td>
                                                    {value.Status == 0 ? <td>Processing</td> : <td>Issue Resolved</td>}
                                                    <td><a href={'/addr/' + value._id} className="btn btn-primary">Add Remarks</a></td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllComplaint