'use client'

import { useRef, useState } from 'react';

import Image from 'next/image';
import DataPointModal from "../../../lib/utils/data_point_modal";
import NewImageFolder from "../../../lib/utils/new_image_folder";

export default function Page() {

    const [showEditForm, setShowEditForm] = useState(false);

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
                <h1>Claim</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">Claim</a></li>
                        <li className="breadcrumb-item active">Manage</li>
                    </ol>
                </nav>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Manage Claim Details</h5>



                    <div>
                        <div className="row mb-2">
                            <div className="col-sm-6">Total Customers: 20</div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" placeholder="Search customer" />
                            </div>
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
                                    <th scope="col">Lastest Policy Date</th>
                                    <th scope="col">Total number of claims</th>
                                    <th scope="col">Last Editor</th>
                                    <th scope="col">Last Edited</th>
                                    <th scope="col">Claim status</th>
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
                                    <td>2024-08-11</td>
                                    <td>3</td>
                                    <td>Lucy</td>
                                    <td>2024-09-11</td>
                                    <td><span class="badge bg-info">New</span></td>
                                    <td>
                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setShowEditForm(true)}><i className="bi bi-pencil-square"></i></button>
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
                                    <td>2024-08-11</td>
                                    <td>3</td>
                                    <td>Lucy</td>
                                    <td>2024-09-11</td>
                                    <td><span class="badge bg-secondary">In progress</span></td>
                                    <td>
                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setShowEditForm(true)}><i className="bi bi-pencil-square"></i></button>
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
                                    <td>2024-08-11</td>
                                    <td>3</td>
                                    <td>Lucy</td>
                                    <td>2024-09-11</td>
                                    <td><span class="badge bg-warning">Review</span></td>
                                    <td>
                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setShowEditForm(true)}><i className="bi bi-pencil-square"></i></button>
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
                                    <td>2024-08-11</td>
                                    <td>3</td>
                                    <td>Lucy</td>
                                    <td>2024-09-11</td>
                                    <td><span class="badge bg-danger">Cancelled</span></td>
                                    <td>
                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setShowEditForm(true)}><i className="bi bi-pencil-square"></i></button>
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
                                    <td>2024-08-11</td>
                                    <td>3</td>
                                    <td>Lucy</td>
                                    <td>2024-09-11</td>
                                    <td><span class="badge bg-danger">Cancelled</span></td>
                                    <td>
                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setShowEditForm(true)}><i className="bi bi-pencil-square"></i></button>
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
                                    <td>2024-08-11</td>
                                    <td>3</td>
                                    <td>Lucy</td>
                                    <td>2024-09-11</td>
                                    <td><span class="badge bg-success">Paid</span></td>
                                    <td>
                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setShowEditForm(true)}><i className="bi bi-pencil-square"></i></button>
                                        <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                    {
                        showEditForm && (
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Edit Tom Lee claim from date: 2024-08-11</h5>

                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <div>
                                            <button type="button" className="btn btn-primary mb-3" data-bs-toggle="modal"
                                                data-bs-target="#paneId">Add new field</button>
                                        </div>

                                        <div>
                                            <button class="btn btn-primary me-2" onClick={() => setShowEditForm(false)}>Update</button>
                                            <button class="btn btn-secondary" onClick={() => setShowEditForm(false)}>Cancel</button>
                                        </div>
                                    </div>

                                    <form className="row g-3">
                                        <div className="col-md-4">
                                            <input type="text" className="form-control" placeholder="Tom Lee" />
                                        </div>

                                        <div className="col-md-4">
                                            <select id="inputState" className="form-select">
                                                <option>Britam</option>
                                                <option>Old mutual</option>
                                                <option>Jubilee</option>
                                                <option>CIC</option>
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <select id="inputState" className="form-select">
                                                <option>Fire/Bulgary</option>
                                                <option>Health</option>
                                                <option>Car</option>
                                                <option>Life insurance</option>
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <select id="inputState" className="form-select">
                                                <option>Hill top garage</option>
                                                <option>Trimp garage</option>
                                                <option>Cargo auto garage</option>
                                                <option>One stop garage</option>
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <input type="text" className="form-control" placeholder="Nakuru west polic station" />
                                        </div>

                                        <div className="col-md-4">
                                            <select id="inputState" className="form-select">
                                                <option>Cash in Lieu</option>
                                                <option>Company repair</option>

                                            </select>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    Claim date: <input type="date" className="form-control" value="2024-09-11" />
                                                </div>
                                                <div className="col-md-4">
                                                    <div>--</div>
                                                    <select id="inputState" className="form-select">
                                                        <option>Claim status...</option>
                                                        <option>New</option>
                                                        <option>In Progress</option>
                                                        <option>Cancelled</option>
                                                        <option>Paid</option>
                                                    </select>
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


                                        <div className="row mt-3">

                                            <div className="col-sm-12">


                                                <h6 className="tc-card-header">All added scanned copies</h6>
                                                <hr />

                                                <div className='row'>
                                                    {/* Template */}
                                                    <div className="col-sm-6">

                                                        <div className="card">
                                                            <div className="card-body">

                                                                <h6 class="card-subtitle mb-2 text-muted">Claim form</h6>
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
                                                                    <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                                                    <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                                                    <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Template */}


                                                    {/* Template */}
                                                    <div className="col-sm-6">

                                                        <div className="card">
                                                            <div className="card-body">

                                                                <h6 class="card-subtitle mb-2 text-muted">National ID</h6>
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
                                                                    <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                                                    <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                                                    <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Template */}


                                                    {/* Template */}
                                                    <div className="col-sm-6">

                                                        <div className="card">
                                                            <div className="card-body">

                                                                <h6 class="card-subtitle mb-2 text-muted">KRA Pin</h6>
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
                                                                    <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                                                    <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                                                    <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Template */}


                                                    {/* Template */}
                                                    <div className="col-sm-6">

                                                        <div className="card">
                                                            <div className="card-body">

                                                                <h6 class="card-subtitle mb-2 text-muted">Accident image 1</h6>
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
                                                                    <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                                                    <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                                                    <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Template */}

                                                    {/* Template */}
                                                    <div className="col-sm-6">

                                                        <div className="card">
                                                            <div className="card-body">

                                                                <h6 class="card-subtitle mb-2 text-muted">Accident image 2</h6>
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
                                                                    <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                                                    <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                                                    <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Template */}

                                                    {/* Template */}
                                                    <div className="col-sm-6">

                                                        <div className="card">
                                                            <div className="card-body">

                                                                <h6 class="card-subtitle mb-2 text-muted">Accident image 3</h6>
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
                                                                    <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                                                    <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                                                    <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Template */}

                                                </div>



                                            </div>
                                        </div>


                                        <div className="text-center mb-3">
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-primary me-2" onClick={() => setShowEditForm(false)}>Update</button>
                                                <button className="btn btn-secondary" onClick={() => setShowEditForm(false)}>Cancel</button>
                                            </div>
                                        </div>
                                        <hr />
                                    </form>

                                </div>
                            </div>
                        )
                    }


                    {/* Modal */}
                    <DataPointModal />
                    <NewImageFolder modalRefVar={modalRef} />
                </div>
            </div>
        </>
    );
}