"use client";

import { useState } from 'react';

import DeleteUser from './delete-user';
import NewUserForm from './new-user-form';
import withAuth from "../../lib/service/with_auth";

const Page = () => {

    let [userAction, setUserAction] = useState();

    return (
        <>
            <div className="pagetitle">
                <h1>System user Management</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">User</a></li>
                        <li className="breadcrumb-item active">Manage</li>
                    </ol>
                </nav>
            </div>

            {/* Page body */}

            <div className="card">
                <div className="card-body">
                    {/* <h5 className="card-title">Capture policy Details</h5> */}

                    <div className="d-flex justify-content-start mt-3">




                        {/* <div className="">
                                            <input id="claim_tag" type="text" className="form-control" placeholder="claim reference" />
                                        </div> */}
                    </div>

                    <div>

                        <div className="d-flex justify-content-start align-items-center mb-3">

                            <div className="flex-grow-1 me-3" style={{ maxWidth: "500px" }}>
                                <input type="text" className="form-control" placeholder="Search by user" />
                            </div>


                            <div className="ms-auto">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newUserModal" onClick={() => setUserAction("add")}>
                                    Add new user
                                </button>
                            </div>
                        </div>

                        <table className="table table-striped table-bordere">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Last Editor</th>
                                    <th scope="col">Last Edited</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>1</td>
                                    <td>Tom Lee</td>
                                    <td>tmlee@gmail.com</td>
                                    <td>Report</td>
                                    <td>Lucy</td>
                                    <td>2024-08-11</td>
                                    <td>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#newUserModal" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setUserAction("edit")}>
                                            <i className="bi bi-pencil-square"></i></button>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#deleteUserModal" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Tom Lee</td>
                                    <td>tmlee@gmail.com</td>
                                    <td>Secretary</td>
                                    <td>Tony</td>
                                    <td>2024-08-11</td>
                                    <td>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#newUserModal" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setUserAction("edit")}><i className="bi bi-pencil-square"></i></button>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#deleteUserModal" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Tom Lee</td>
                                    <td>tmlee@gmail.com</td>
                                    <td>Super Admin</td>
                                    <td>Lucy</td>
                                    <td>2024-08-11</td>
                                    <td>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#newUserModal" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setUserAction("edit")}><i className="bi bi-pencil-square"></i></button>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#deleteUserModal" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Tom Lee</td>
                                    <td>tmlee@gmail.com</td>
                                    <td>Reports</td>
                                    <td>Lucy</td>
                                    <td>2024-08-11</td>
                                    <td>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#newUserModal" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setUserAction("edit")}><i className="bi bi-pencil-square"></i></button>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#deleteUserModal" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Tom Lee</td>
                                    <td>tmlee@gmail.com</td>
                                    <td>Data Entry</td>
                                    <td>Lucy</td>
                                    <td>2024-08-11</td>
                                    <td>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#newUserModal" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setUserAction("edit")}><i className="bi bi-pencil-square"></i></button>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#deleteUserModal" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Tom Lee</td>
                                    <td>tmlee@gmail.com</td>
                                    <td>Admin</td>
                                    <td>Lucy</td>
                                    <td>2024-08-11</td>
                                    <td>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#newUserModal" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setUserAction("edit")}><i className="bi bi-pencil-square"></i></button>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#deleteUserModal" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <DeleteUser />
            <NewUserForm userAction={userAction} />
        </>
    );
}

export default withAuth(Page);