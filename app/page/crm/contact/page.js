'use client'

import * as dataPointData from "../../../../public/DataPointData.json";
import DataPointModal from "../../../lib/utils/data_point_modal";
import CustomerForm from "./customer_form";

export default function Page() {

    let combinedDataArry = dataPointData.custom_data.demo_data.concat(dataPointData.predefined_data.policy_data);
    combinedDataArry = combinedDataArry.concat(dataPointData.predefined_data.demo_data).concat(dataPointData.predefined_data.policy_data);
    return (
        <>

            <div className="pagetitle">
                <h1>CRM</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">CRM</a></li>
                        <li className="breadcrumb-item active">Contact Management</li>
                    </ol>
                </nav>
            </div>

            <div className="card">
                <div className="card-body">

                    <ul class="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-home" type="button" role="tab" aria-controls="home" aria-selected="true">New Customer</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Manage Contacts</button>
                        </li>

                    </ul>
                    <div class="tab-content pt-2" id="borderedTabContent">
                        <div class="tab-pane fade show active" id="bordered-home" role="tabpanel" aria-labelledby="home-tab">
                            <h5 className="card-title">Capture Customer Details</h5>

                            <CustomerForm action = "add"/>
                        </div>

                        {/* manage customers */}

                        <div class="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="profile-tab">
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
                            <hr />
                            <h5 className="card-title">Edit Customer</h5>
                            <CustomerForm action = "edit"/>

                        </div>
                        {/* End manage customers */}

                    </div>


                </div>
            </div>



            {/* Modal */}

            <DataPointModal />
        </>
    );

}