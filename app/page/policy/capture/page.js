'use client';

import { useEffect, useRef } from "react";
import DataPointModal from "../../../lib/utils/data_point_modal";
import Image from 'next/image';
import NewImageFolder from "../../../lib/utils/new_image_folder";

export default function Page() {

    const modalRef = useRef(null);

    const creatNewImageFolder = (event) => {

        if (typeof window !== "undefined" && bootstrap) {
            if (event.target.value === "new folder") {
                const modal = new window.bootstrap.Modal(modalRef.current);
                modal.show();
            }
        }
    }

    return (
        <>
            <div className="pagetitle">
                <h1>CRM</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">Policy</a></li>
                        <li className="breadcrumb-item active">Capture</li>
                    </ol>
                </nav>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Capture policy Details</h5>

                    <div className="d-flex justify-content-start align-items-center mb-3">

                        <div className="flex-grow-1 me-5" style={{ maxWidth: "600px" }}>
                            {/* <input id="search" type="text" className="form-control" placeholder="Search by Name, car, policy, certificate, ID/Passport" /> */}


                            <div className="input-group">
                                <span className="input-group-text" id="search-icon">
                                    <i className="bi bi-search"></i>
                                </span>
                                <input id="search" type="text" className="form-control" placeholder="Search proposal by Name, car, ref no, phone no, certificate, ID/Passport" aria-label="Search" aria-describedby="search-icon" />

                            </div>
                        </div>

                        <div className="ms-auto">
                            <button className="btn btn-primary me-2">Save</button>
                            <button className="btn btn-secondary">Reset</button>
                        </div>
                    </div>

                    <hr />


                    <div className="d-flex justify-content-start mb-3">
                        <div className="">
                            <button type="button" className="btn btn-primary mb-3 me-3" data-bs-toggle="modal"
                                data-bs-target="#paneId">Add new field</button>
                        </div>

                        <div className="">
                            <input id="policy_tag" type="text" className="form-control" placeholder="policy reference" />
                        </div>
                    </div>


                    <form className="row g-3">

                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-md-3">
                                    <label htmlFor="name">Policy No:</label>
                                    <input id="name" type="text" className="form-control" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="phone">Certificate No:</label>
                                    <input id="phone" type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="row d-flex align-items-end">
                                <div className="col-md-3">
                                    <label htmlFor="img">Select Scanned copies:</label>
                                    <input type="file" id="img" name="img" accept="image/*" className="form-control" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="copyName">Document type:</label>
                                    <select id="policy" className="form-select">
                                        <option defaultValue>None...</option>
                                        <option>ID/Passort</option>
                                        <option>Proposal</option>
                                        <option>Accident form</option>
                                        <option>Policy</option>
                                        <option>Insurance Certificate</option>
                                        <option>Insurance Policy</option>
                                        <option>Medical Report</option>
                                        <option>Birth Certificate</option>
                                        <option>Police Abstract</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="copyName">Select folder:</label>
                                    <select onChange={(event) => creatNewImageFolder(event)} id="policy" className="form-select">
                                        <option>Default</option>
                                        <option role="separator" disabled="disabled">─────────────────────────</option>
                                        <option value="new folder">Create New</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="documentName">Document name:</label>
                                    <input id="documentName" type="text" className="form-control" />
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="col-md-3">
                                <button type="button" className="btn btn-info mt-2 mt-md-0">Add image</button>
                            </div>
                        </div>

                    </form>

                    <hr />

                    <div className="row">

                        <div className="col-sm-12">

                            <h6 className="tc-card-header">All added scanned copies</h6>

                            <div className='row'>
                                {/* Template */}
                                <div className="col-sm-6">

                                    <div className="card">
                                        <div className="card-body">

                                            <h6 className="card-subtitle mt-2 text-muted">Policy</h6>
                                            <Image
                                                src="/img/receipt_template.jpg"
                                                // layout="responsive"
                                                width={200}  // Aspect ratio width
                                                height={400}  // Aspect ratio height
                                                className="card-img-top"
                                                alt="receipt template"
                                            />
                                            <hr />
                                            <button type="button" className="btn btn-primary me-2"><i className="bi bi-eye-fill"></i></button>
                                            <button type="button" className="btn btn-info me-2"><i className="bi bi-download"></i></button>
                                            <button type="button" className="btn btn-secondary"><i className="bi bi-trash3-fill"></i></button>
                                        </div>
                                    </div>
                                </div>
                                {/* Template */}


                                {/* Template */}
                                <div className="col-sm-6">

                                    <div className="card">
                                        <div className="card-body">

                                            <h6 className="card-subtitle mt-2 text-muted">Cetificate</h6>
                                            <Image
                                                src="/img/receipt_template.jpg"
                                                // layout="responsive"
                                                width={200}  // Aspect ratio width
                                                height={400}  // Aspect ratio height
                                                className="card-img-top"
                                                alt="receipt template"
                                            />
                                            <hr />

                                            <div className="d-flex">
                                                <button type="button" className="btn btn-primary me-2"><i className="bi bi-eye-fill"></i></button>
                                                <button type="button" className="btn btn-info me-2"><i className="bi bi-download"></i></button>
                                                <button type="button" className="btn btn-secondary"><i className="bi bi-trash3-fill"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Template */}

                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="text-center mb-3">
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary me-2">Save</button>
                                <button className="btn btn-secondary">Cancel</button>
                            </div>
                        </div>
                    </div>

                    {/* Modal */}
                    <DataPointModal />

                </div>
            </div>
            <NewImageFolder modalRefVar={modalRef} />
        </>
    );
}