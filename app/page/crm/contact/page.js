'use client'

import React, { useEffect, useState } from "react";
import * as dataPointData from "../../../../public/DataPointData.json";
import DataPointModal from "../../../lib/utils/data_point_modal";
import CustomerForm from "./customer_form";

export default function Page() {

    let combinedDataArry = dataPointData.custom_data.demo_data.concat(dataPointData.predefined_data.policy_data);
    combinedDataArry = combinedDataArry.concat(dataPointData.predefined_data.demo_data).concat(dataPointData.predefined_data.policy_data);
    const [showGroupCustomerList, setShowGroupCustomerList] = useState(false);
    const [actionBtnLabel, setActionBtnLabel] = useState("Add new");
    const [isContactsGroupTab, setIsContactsGroupTab] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    useEffect(() => { }, [showGroupCustomerList, isContactsGroupTab]);

    const toggleCustomerTable = () => {
        setShowGroupCustomerList(!showGroupCustomerList);
    };

    let customerTable = [
        <>
            <div className="row">

                {
                    isContactsGroupTab ?
                        <div className="col-sm-6 text-info">Total Customers selected: 20</div>

                        :
                        <div className="col-sm-6">Total Customers: 600</div>
                }
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
                        <th scope="col">
                            {
                                isContactsGroupTab ?

                                    <td>
                                        <input id="selectAll" type="checkbox" /> Select all
                                    </td>
                                    :
                                    "Action"
                            }

                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr key={1}>
                        <td>#</td>
                        <td>Tom Lee</td>
                        <td>0700123789</td>
                        <td>tmlee@gmail.com</td>
                        <td>Kenya</td>
                        <td>Nakuru</td>
                        <td>First avenue shababa</td>
                        <td>Lucy</td>
                        <td>2024-09-11</td>
                        {
                            isContactsGroupTab ?

                                <td>
                                    <input type="checkbox" />
                                </td>
                                :
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setShowEditForm(true)}><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                        }

                    </tr>
                    <tr key={2}>
                        <td>#</td>
                        <td>Tom Lee</td>
                        <td>0700123789</td>
                        <td>tmlee@gmail.com</td>
                        <td>Kenya</td>
                        <td>Nakuru</td>
                        <td>First avenue shababa</td>
                        <td>Lucy</td>
                        <td>2024-09-11</td>
                        {
                            isContactsGroupTab ?

                                <td>
                                    <input type="checkbox" />
                                </td>
                                :
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setShowEditForm(true)}><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                        }
                    </tr>
                    <tr key={3}>
                        <td>#</td>
                        <td>Tom Lee</td>
                        <td>0700123789</td>
                        <td>tmlee@gmail.com</td>
                        <td>Kenya</td>
                        <td>Nakuru</td>
                        <td>First avenue shababa</td>
                        <td>Lucy</td>
                        <td>2024-09-11</td>
                        {
                            isContactsGroupTab ?

                                <td>
                                    <input type="checkbox" />
                                </td>
                                :
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setShowEditForm(true)}><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                        }
                    </tr>
                    <tr key={30}>
                        <td>#</td>
                        <td>Tom Lee</td>
                        <td>0700123789</td>
                        <td>tmlee@gmail.com</td>
                        <td>Kenya</td>
                        <td>Nakuru</td>
                        <td>First avenue shababa</td>
                        <td>Lucy</td>
                        <td>2024-09-11</td>
                        {
                            isContactsGroupTab ?

                                <td>
                                    <input type="checkbox" />
                                </td>
                                :
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setShowEditForm(true)}><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                        }
                    </tr>
                    <tr key={4}>
                        <td>#</td>
                        <td>Tom Lee</td>
                        <td>0700123789</td>
                        <td>tmlee@gmail.com</td>
                        <td>Kenya</td>
                        <td>Nakuru</td>
                        <td>First avenue shababa</td>
                        <td>Lucy</td>
                        <td>2024-09-11</td>
                        {
                            isContactsGroupTab ?

                                <td>
                                    <input type="checkbox" />
                                </td>
                                :
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setShowEditForm(true)}><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                        }
                    </tr>
                    <tr key={5}>
                        <td>#</td>
                        <td>Tom Lee</td>
                        <td>0700123789</td>
                        <td>tmlee@gmail.com</td>
                        <td>Kenya</td>
                        <td>Nakuru</td>
                        <td>First avenue shababa</td>
                        <td>Lucy</td>
                        <td>2024-09-11</td>
                        {
                            isContactsGroupTab ?

                                <td>
                                    <input type="checkbox" />
                                </td>
                                :
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setShowEditForm(true)}><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                        }
                    </tr>

                </tbody>
            </table>
        </>

    ];

    return (
        <>
            <div className="pagetitle">
                <h1>CRM</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">CRM</a></li>
                        <li className="breadcrumb-item active">Contact Management</li>
                    </ol>
                </nav>
            </div>

            <div className="card">
                <div className="card-body">

                    <ul class="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab"
                                onClick={() => setIsContactsGroupTab(false)}
                                data-bs-toggle="tab" data-bs-target="#bordered-home" type="button" role="tab" aria-controls="home" aria-selected="true">New Customer</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab"
                                onClick={() => setIsContactsGroupTab(false)}
                                data-bs-toggle="tab" data-bs-target="#bordered-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Manage Contacts</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="customer_group-tab" data-bs-toggle="tab" data-bs-target="#bordered-customer_group"
                                type="button" role="tab" aria-controls="customer_group" aria-selected="false"
                                onClick={() => setIsContactsGroupTab(true)}
                            >Contacts Groups</button>
                        </li>

                    </ul>
                    <div class="tab-content pt-2" id="borderedTabContent">
                        <div class="tab-pane fade show active" id="bordered-home" role="tabpanel" aria-labelledby="home-tab">
                            <h5 className="card-title">Capture Customer Details</h5>

                            <CustomerForm action="add" />
                        </div>

                        {/* manage customers */}

                        <div class="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h5 className="card-title">Manage Customers</h5>

                            {customerTable}

                            {
                                showEditForm ?
                                    <>
                                        <hr />
                                        <h5 className="card-title">Edit Customer</h5>
                                        <CustomerForm action="edit" setShowEditForm={setShowEditForm} />
                                    </>
                                    :
                                    ""
                            }

                        </div>
                        {/* End manage customers */}

                        {/* Customer group */}
                        <div class="tab-pane fade" id="bordered-customer_group" role="tabpanel" aria-labelledby="customer_group-tab">


                            <div class="d-flex justify-content-between align-items-center mt-2">
                                <div>
                                    {
                                        showGroupCustomerList ?
                                            <>
                                                <h5 className="card-title fw-bold">New Group</h5>

                                            </>

                                            :
                                            ""
                                    }
                                </div>

                                <div>
                                    {
                                        showGroupCustomerList ?
                                            [
                                                <React.Fragment key="group-buttons">
                                                    <button class="btn btn-primary me-2"><i class="bi bi-floppy"></i> Save </button>
                                                    <button onClick={() => toggleCustomerTable()} class="btn btn-secondary me-2"><i class="bi bi-x"></i> Close </button>
                                                </React.Fragment>
                                            ]
                                            :
                                            [<button key="add-new-btn" onClick={() => toggleCustomerTable()} class="btn btn-primary me-2"><i class="bi bi-plus-lg"></i> Add new </button>]
                                    }

                                </div>
                            </div>

                            {
                                showGroupCustomerList ?
                                    <>

                                        <div className="row mb-3">
                                            <div className="col-md-4"><input type="text" className="form-control" placeholder="Group Name" /></div>
                                        </div>
                                        <div class="d-flex  mt-2 mb-2 gap-3">
                                            <span>Filter contacts: </span>
                                            <div>
                                                <select id="inputState" className="form-select">
                                                    <option defaultValue>Policy type...</option>
                                                    <option>Fire/Bulgary</option>
                                                    <option>Health</option>
                                                    <option>Car</option>
                                                    <option>Life insurance</option>
                                                </select>
                                            </div>
                                            |
                                            <div className="d-flex gap-1">
                                                <label for="age" class="col-form-label">Age: </label>
                                                <select id="age" className="form-select">
                                                    <option>equals</option>
                                                    <option>greater than</option>
                                                    <option>less than</option>
                                                </select>
                                                <input type="number" class="form-control" min="-1" style={{ width: '80px' }}></input>
                                            </div>
                                            |
                                            <div className="d-flex gap-1">
                                                <label for="age" class="col-form-label">Name: </label>
                                                <select id="age" className="form-select">
                                                    <option>starts with</option>
                                                    <option>contains</option>
                                                    <option>ends with</option>
                                                </select>
                                                <input type="text" class="form-control" min="-1"></input>
                                            </div>
                                            |
                                            <div>
                                                <select id="inputState" className="form-select">
                                                    <option defaultValue>Country...</option>
                                                    <option>Kenya</option>
                                                    <option>Uganda</option>
                                                    <option>Tanzania</option>
                                                    <option>Rwanda</option>
                                                </select>
                                            </div>

                                            <div>
                                                <select id="inputState" className="form-select">
                                                    <option defaultValue>County...</option>
                                                    <option>Nairobi</option>
                                                    <option>Kisumu</option>
                                                    <option>Nakuru</option>
                                                    <option>Nyandarua</option>
                                                </select>
                                            </div>
                                        </div>
                                        {customerTable}
                                        <hr />
                                    </>
                                    :
                                    ""
                            }

                            {

                                showGroupCustomerList ?
                                    ""
                                    :
                                    <>
                                        <div className="row">
                                            <h4 className="fw-bold">Group List</h4>
                                            <div>Total groups: 3</div>
                                        </div>
                                        <table className="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Total members</th>
                                                    <th scope="col">Created date</th>
                                                    <th scope="col">Created by</th>
                                                    <th scope="col">Last Editor</th>
                                                    <th scope="col">Last Edited</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#</td>
                                                    <td>Car insurance Group</td>
                                                    <td>30</td>
                                                    <td>2024-09-11</td>
                                                    <td>Lucy</td>
                                                    <td>Tom</td>
                                                    <td>2024-09-11</td>
                                                    <td>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                                        <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#</td>
                                                    <td>Life insurance</td>
                                                    <td>35</td>
                                                    <td>2024-09-11</td>
                                                    <td>Lucy</td>
                                                    <td>Kevin</td>
                                                    <td>2024-09-11</td>
                                                    <td>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                                        <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#</td>
                                                    <td>High value</td>
                                                    <td>20</td>
                                                    <td>2024-09-13</td>
                                                    <td>George</td>
                                                    <td>Tom</td>
                                                    <td>2024-09-11</td>
                                                    <td>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                                        <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>

                                    </>

                            }


                        </div>
                        {/* end customer group */}

                    </div>


                </div>
            </div>



            {/* Modal */}

            <DataPointModal />
        </>
    );

}