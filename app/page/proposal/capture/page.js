"use client"

import DataPointModal from "../../../lib/utils/data_point_modal";
import Image from 'next/image';
import NewCustomerForm from "./new_customer_form";
import { use, useEffect, useState } from "react";

export default function Page() {

    let [customerState, setCutomerState] = useState("existing");

    useEffect(() => { }, [customerState]);

    let handleCustomerState = (value) => {
        setCutomerState(value);
    };

    return (
        <>
            <div className="pagetitle">
                <h1>Proposal</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">Proposal</a></li>
                        <li className="breadcrumb-item active">Capture</li>
                    </ol>
                </nav>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Capture Proposal Details</h5>

                    <div class="d-flex justify-content-start align-items-center mb-3">

                        <div className="me-3">
                            <select onChange={(e) => handleCustomerState(e.target.value)} id="inputState" className="form-select">
                                <option value="existing">Existing Customer</option>
                                <option value="new">New Customer</option>
                            </select>
                        </div>

                        {
                            customerState === "new" ? ""
                                :
                                <div className="flex-grow-1 me-5" style={{ maxWidth: "500px" }}>
                                    {/* <input id="search" type="text" className="form-control" placeholder="Search by Name, car, policy, certificate, ID/Passport" /> */}


                                    <div className="input-group">
                                        <span className="input-group-text" id="search-icon">
                                            <i className="bi bi-search"></i>
                                        </span>
                                        <input id="search" type="text" className="form-control" placeholder="Search by Name, car, policy, certificate, ID/Passport" aria-label="Search" aria-describedby="search-icon" />

                                    </div>
                                </div>
                        }

                        <div className="ms-auto">
                            <button class="btn btn-primary me-2">Save</button>
                            <button class="btn btn-secondary">Reset</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <button type="button" className="btn btn-primary mb-3 me-3" data-bs-toggle="modal"
                                data-bs-target="#paneId">Add new field</button>
                        </div>

                    </div>

                    {
                        customerState === "new" ? <NewCustomerForm action="add" /> : ""
                    }

                    <form className="row g-3">

                        <div className="col-sm-12">
                            <div className="row d-flex align-items-end">

                                <div className="col-md-4">
                                    <label for="insurance">Select insurance:</label>
                                    <select id="insurance" className="form-select">
                                        <option defaultValue>None...</option>
                                        <option>Britam</option>
                                        <option>Old mutual</option>
                                        <option>Jubilee</option>
                                        <option>CIC</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label for="policy">Select policy:</label>
                                    <select id="policy" className="form-select">
                                        <option defaultValue>None...</option>
                                        <option>Fire/Bulgary</option>
                                        <option>Health</option>
                                        <option>Car</option>
                                        <option>Life insurance</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="row d-flex align-items-end">
                                <div className="col-md-4">
                                    <label htmlFor="img">Select Scanned copies:</label>
                                    <input type="file" id="img" name="img" accept="image/*" className="form-control" />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="copyName">Document type:</label>
                                    <select id="policy" className="form-select">
                                        <option defaultValue>None...</option>
                                        <option>ID/Passort</option>
                                        <option>Proposal</option>
                                        <option>Accident form</option>
                                        <option>Policy</option>
                                        <option>Police Abstract</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <button type="button" className="btn btn-info mt-2 mt-md-0">Add image</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <label for="proposal_tag">Tag Proposal:</label>
                            <input id="proposal_tag" type="text" className="form-control" placeholder="#ref_xyz_2024_09_26" />
                        </div>


                        <div className="row mt-3">

                            <div className="col-sm-12">

                                <h6 className="tc-card-header">All added scanned copies</h6>
                                <hr />

                                <div className='row'>
                                    {/* Template */}
                                    <div className="col-sm-6">

                                        <div className="card">
                                            <div className="card-body">

                                                <h6 class="card-subtitle mb-2 text-muted">Proposal</h6>
                                                <Image
                                                    src="/img/receipt_template.jpg"
                                                    // layout="responsive"
                                                    width={200}  // Aspect ratio width
                                                    height={400}  // Aspect ratio height
                                                    className="card-img-top"
                                                    alt="receipt template"
                                                />
                                                <hr />
                                                <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                                <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                                <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Template */}

                                </div>

                            </div>
                        </div>


                        <div className="text-center mb-3">
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary me-2">Save</button>
                                <button className="btn btn-secondary">Cancel</button>
                            </div>
                        </div>
                        <hr />
                    </form>

                    {/* Modal */}
                    <DataPointModal />

                </div>
            </div>
        </>

    );
}