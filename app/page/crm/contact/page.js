'use client'

import * as dataPointData from "../../../../public/DataPointData.json";


export default function Page() {

    let combinedDataArry = dataPointData.custom_data.demo_data.concat(dataPointData.predefined_data.policy_data);
    combinedDataArry = combinedDataArry.concat(dataPointData.predefined_data.demo_data).concat(dataPointData.predefined_data.policy_data);
    return (
        <>



            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Capture Customer Details</h5>

                    <button type="button" style={{ marginBottom: "4px" }} className="btn btn-primary mb-3" data-bs-toggle="modal"
                        data-bs-target="#paneId">Add new field</button>

                    <form className="row g-3">
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Second Name" />
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Third Name" />
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Phone Number" />
                        </div>
                        <div className="col-md-4">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="col-md-4">
                            <select id="inputState" className="form-select">
                                <option defaultValue>Gender...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Address" />
                        </div>
                        <div className="col-md-4">
                            <select id="inputState" className="form-select">
                                <option defaultValue>Country...</option>
                                <option>Kenya</option>
                                <option>Uganda</option>
                                <option>Zambia</option>
                                <option>Rwanda</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select id="inputState" className="form-select">
                                <option defaultValue>County...</option>
                                <option>Nakuru</option>
                                <option>Kericho</option>
                                <option>Mombasa</option>
                                <option>Nairobi</option>
                            </select>
                        </div>

                        <div className="text-center mb-3">
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary me-2">Save</button>
                                <button className="btn btn-secondary">Cancel</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>


            {/* Modal */}

            <div className="modal fade" id="paneId" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"> Add data point</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* {
                                        (tableData !== undefined)

                                        &&

                                        tableData.map((data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{data.name}</td>
                                                    <td>{data.type}</td>
                                                    <td>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info">Add</button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    } */}

                                </tbody>
                            </table>

                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );

}