"use client";

import { useState } from 'react';

import DeleteRole from './delete-role';
import NewRoleForm from './new-role-form';
import withAuth from "../../lib/service/with_auth";

const Page = () => {

    const [roleAction, setRoleAction] = useState("add");

    return (
        <>
            <div className="pagetitle">
                <h1>System Roles Management</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">Role</a></li>
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
                                <input type="text" className="form-control" placeholder="Search role" />
                            </div>


                            <div className="ms-auto">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newRoleModal" onClick={() => setRoleAction("add")}>
                                    Add new Role
                                </button>
                            </div>
                        </div>

                        <table className="table table-striped table-bordere">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Last Editor</th>
                                    <th scope="col">Last Edited</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>1</td>
                                    <td>Report</td>
                                    <td>Lucy</td>
                                    <td>2024-08-11</td>
                                    <td>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#newRoleModal" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setRoleAction("edit")}>
                                            <i className="bi bi-pencil-square"></i></button>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#deleteRoleModal" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Secretary</td>
                                    <td>Tony</td>
                                    <td>2024-08-11</td>
                                    <td>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#newRoleModal" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setRoleAction("edit")}><i className="bi bi-pencil-square"></i></button>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#deleteRoleModal" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Admin</td>
                                    <td>Lucy</td>
                                    <td>2024-08-11</td>
                                    <td>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#newRoleModal" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setRoleAction("edit")}><i className="bi bi-pencil-square"></i></button>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#deleteRoleModal" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Reports</td>
                                    <td>Lucy</td>
                                    <td>2024-08-11</td>
                                    <td>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#newRoleModal" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setRoleAction("edit")}><i className="bi bi-pencil-square"></i></button>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#deleteRoleModal" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Data Entry</td>
                                    <td>Lucy</td>
                                    <td>2024-08-11</td>
                                    <td>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#newRoleModal" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setRoleAction("edit")}><i className="bi bi-pencil-square"></i></button>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#deleteRoleModal" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <DeleteRole />
            <NewRoleForm roleAction={roleAction} />
        </>
    );
}

export default withAuth(Page);