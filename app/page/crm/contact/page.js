'use client'

import * as dataPointData from "../../../../public/DataPointData.json";
import DataPointModal from "../../../lib/utils/data_point_modal";

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
                        <div className="col-md-4">
                            <label for="img">Select passport image:</label>
                            <input type="file" id="img" name="img" accept="image/*" className="form-control" />
                        </div>

                        <div className="text-center mb-3">
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary me-2">Save</button>
                                <button className="btn btn-secondary">Cancel</button>
                            </div>
                        </div>
                        <hr />
                    </form>

                    <h5 className="card-title">Manage Customers</h5>
                    <div className="row">
                        <div className="col-sm-6">Total Customers: 600</div>
                    </div>

                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Country</th>
                                <th scope="col">County</th>
                                <th scope="col">Address</th>
                                <th scope="col">Last Editor</th>
                                <th scope="col">Last Edited</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>#</td>
                                <td>Tom Lee</td>
                                <td>0700123789</td>
                                <td>tmlee@gmail.com</td>
                                <td>Kenya</td>
                                <td>Nakuru</td>
                                <td>First avenue shababa</td>
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>Tom Lee</td>
                                <td>0700123789</td>
                                <td>tmlee@gmail.com</td>
                                <td>Kenya</td>
                                <td>Nakuru</td>
                                <td>First avenue shababa</td>
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>Tom Lee</td>
                                <td>0700123789</td>
                                <td>tmlee@gmail.com</td>
                                <td>Kenya</td>
                                <td>Nakuru</td>
                                <td>First avenue shababa</td>
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>Tom Lee</td>
                                <td>0700123789</td>
                                <td>tmlee@gmail.com</td>
                                <td>Kenya</td>
                                <td>Nakuru</td>
                                <td>First avenue shababa</td>
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>Tom Lee</td>
                                <td>0700123789</td>
                                <td>tmlee@gmail.com</td>
                                <td>Kenya</td>
                                <td>Nakuru</td>
                                <td>First avenue shababa</td>
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>Tom Lee</td>
                                <td>0700123789</td>
                                <td>tmlee@gmail.com</td>
                                <td>Kenya</td>
                                <td>Nakuru</td>
                                <td>First avenue shababa</td>
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>



            {/* Modal */}

            <DataPointModal />
        </>
    );

}