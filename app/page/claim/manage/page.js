'use client'

import { useRef, useState, useEffect } from 'react';

import Image from 'next/image';
import NewImageFolder from "../../../lib/utils/new_image_folder";
import withAuth from "../../../lib/service/with_auth";
import ClaimStatusModal from '../claim-status-message';

//fetchClaimData
import { fetchClaimData, fetchDocumentTypes } from "../../../lib/service/model";


const Page = () => {

    const [showEditForm, setShowEditForm] = useState(false);

    const modalRef = useRef(null);
    const claimStatusModalRef = useRef(null);
    const [res, setRes] = useState([]);
    const [messageStatus, setMessageStatus] = useState("");
    const [selectedClaim, setSelectedClaim] = useState({});
    const [claimAction, setClaimAction] = useState("edit");
    const [claimDate, setClaimDate] = useState("");
    const [claimNumber, setClaimNumber] = useState("");
    const [selectedContactClaims, setSelectedContactClaims] = useState([]);

    const [paymentModes, setPaymentModes] = useState([]);
    const [documentTypes, setDocumentTypes] = useState([]);

    const [contacts, setContacts] = useState({});
    const [claimList, setClaimList] = useState([]);
    const [contactName, setContactName] = useState("");
    const [bootstrap, setBootstrap] = useState(false);
    const [showOptionalClaimSelectSpinner, setShowOptionalClaimSelectSpinner] = useState(false);

    const creatNewImageFolder = (event) => {

        if (typeof window !== "undefined" && bootstrap) {
            if (event.target.value === "new folder") {
                const modal = new window.bootstrap.Modal(modalRef.current);
                modal.show();
            }
        }
    }

    const fetchAllClaimData = async () => {
        let res = await fetchClaimData(0, 15);

        if ('message' in res) {
            setMessageStatus(res.message);

            if (claimStatusModalRef.current) {
                const modal = new window.bootstrap.Modal(claimStatusModalRef.current);
                modal.show();
            }
            return;
        }

        setRes(res);
    };


    useEffect(() => {

        const fetchPaymentMethodsData = async () => {
            try {
                const paymentMethods = await fetchPaymentMethods();
                setPaymentModes(paymentMethods);
                // Handle payment methods data as needed
            } catch (error) {
                console.error("Error fetching payment methods:", error);
            }
        };

        const fetchDocumentTypesData = async () => {
            let res = await fetchDocumentTypes();
            if ('error' in res) {
                return;
            }
            setDocumentTypes(res);
        };

        fetchAllClaimData();
        fetchDocumentTypesData();
        fetchPaymentMethodsData();
    }, []);


    useEffect(() => {

        if (!res || Object.keys(res).length === 0) {
            console.log("res is empty");
            return
        }

        let adminAreas = {};
        try {
            res.administrative_areas.forEach((area) => {
                adminAreas[area.id] = area;
            });
        } catch (error) {
            console.log("Error in res.administrative_areas =========>>>" + error);
        }

        //setAdministrativeAreas(adminAreas);

        let contactMap = {};

        try {
            res.contact.forEach((contc) => {
                contactMap[contc.id] = contc;

            });
        } catch (error) {
            console.log("Error in res.contact =========>>>" + error);
        }

        let updatedByMap = {};

        try {
            res.updatedBy.forEach((val) => {
                updatedByMap[val.id] = val;

            });
        } catch (error) {
            console.log("Error in res.updatedBy =========>>>" + error);
        }


        setContacts(contactMap);

        let claimLst = [];

        res.claims.forEach((claim) => {

            try {
                claim["updateByName"] = updatedByMap[claim.updated_by].first_name + " " + updatedByMap[claim.updated_by].third_name;
            } catch (error) {
                console.log("Error in refresh claim table =========>>>" + error);
                claim["updateByName"] = "";
            }

            try {
                claim["contactName"] = contactMap[claim.contact_id].first_name + " " + contactMap[claim.contact_id].last_name;
                setContactName(claim["contactName"]);
            } catch (error) {
                console.log("Error in refresh claim table =========>>>" + error);

                claim["contactName"] = "";
                setContactName("");
            }

            try {
                claim["address"] = contactMap[claim.contact_id].address.address;
            } catch (error) {
                console.log("Error in refresh claim table =========>>>" + error);
                claim["address"] = "";
            }

            try {
                claim["country"] = adminAreas[contactMap[claim.contact_id].address.country_code].name;
            } catch (error) {
                console.log("Error in refresh claim table =========>>>" + error);
                claim["country"] = "";
            }

            try {
                claim["county"] = adminAreas[contactMap[claim.contact_id].address.administrative_area].name;
            } catch (error) {
                console.log("Error in refresh claim table =========>>>" + error);
                claim["county"] = "";
            }

            try {
                claim["phone"] = contactMap[claim.contact_id].phone;
            } catch (error) {
                console.log("Error in refresh claim table =========>>>" + error);

                claim["phone"] = "";
            }

            try {
                claim["email"] = contactMap[claim.contact_id].email;
            } catch (error) {
                console.log("Error in refresh claim table =========>>>" + error);
                claim["email"] = "";
            }

            claimLst.push(claim);

        });

        setClaimList(claimLst);

    }, [res]);


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
                                    <th scope="col">Lastest Claim Date</th>
                                    <th scope="col">Total number of claims</th>
                                    <th scope="col">Last Editor</th>
                                    <th scope="col">Last Edited</th>
                                    <th scope="col">Claim status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    claimList.map((val, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{val["contactName"]}</td>
                                                <td>{val["phone"]}</td>
                                                <td>{val["email"]}</td>
                                                <td>{val["country"]}</td>
                                                <td>{val["county"]}</td>
                                                <td>{val["address"]}</td>
                                                <td>{val.claim_date}</td>
                                                <td>{val.claim_count}</td>
                                                <td>{val["updateByName"]}</td>
                                                <td>{val.updated_at}</td>
                                                <td><span className="badge bg-info">New</span></td>
                                                {/* <td><span className="badge bg-danger">Cancelled</span></td>
                                                <td><span className="badge bg-success">Paid</span></td>
                                                <td><span className="badge bg-warning">Review</span></td>
                                                <td><span className="badge bg-secondary">In progress</span></td> */}

                                                <td>
                                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info"
                                                        onClick={
                                                            () => {
                                                                setShowEditForm(true, val)
                                                                setSelectedClaim(val)
                                                                setContactName(val["contactName"]);
                                                                // fetchProposal(val, val["contactName"]);
                                                                setClaimDate(val.claim_date)
                                                                setClaimNumber(val.claim_number)
                                                                getClaimByContact(val.contact_id).then((res) => {
                                                                    setSelectedContactClaims(res)
                                                                })
                                                                setClaimAction("edit");


                                                            }
                                                        }
                                                    ><i className="bi bi-pencil-square"></i></button>
                                                    <button type="button" data-bs-toggle="modal"
                                                        onClick={
                                                            () => {
                                                                setShowEditForm(false)
                                                                setSelectedClaim(val)
                                                                getClaimByContact(val.contact_id).then((res) => {
                                                                    setSelectedContactPolicies(res)
                                                                })
                                                                setClaimAction("delete");
                                                            }
                                                        }
                                                        data-bs-target="#deleteClaimModal"
                                                        className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }



                            </tbody>
                        </table>
                    </div>


                    {
                        showEditForm && (
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Edit Tom Lee claim from date: 2024-08-11</h5>

                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div>

                                        </div>

                                        <div>
                                            <button className="btn btn-primary me-2" onClick={() => setShowEditForm(false)}>Update</button>
                                            <button className="btn btn-secondary" onClick={() => setShowEditForm(false)}>Cancel</button>
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
                                                    <select id="claim" className="form-select">
                                                        <option defaultValue>None...</option>
                                                        <option>ID/Passort</option>
                                                        <option>Proposal</option>
                                                        <option>Accident form</option>
                                                        <option>Claim</option>
                                                        <option>Insurance Certificate</option>
                                                        <option>Insurance Claim</option>
                                                        <option>Medical Report</option>
                                                        <option>Birth Certificate</option>
                                                        <option>Police Abstract</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="copyName">Select folder:</label>
                                                    <select onChange={(event) => creatNewImageFolder(event)} id="claim" className="form-select">
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

                                                                <h6 className="card-subtitle mb-2 text-muted">Claim form</h6>
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


                                                    {/* Template */}
                                                    <div className="col-sm-6">

                                                        <div className="card">
                                                            <div className="card-body">

                                                                <h6 className="card-subtitle mb-2 text-muted">National ID</h6>
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


                                                    {/* Template */}
                                                    <div className="col-sm-6">

                                                        <div className="card">
                                                            <div className="card-body">

                                                                <h6 className="card-subtitle mb-2 text-muted">KRA Pin</h6>
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


                                                    {/* Template */}
                                                    <div className="col-sm-6">

                                                        <div className="card">
                                                            <div className="card-body">

                                                                <h6 className="card-subtitle mb-2 text-muted">Accident image 1</h6>
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

                                                    {/* Template */}
                                                    <div className="col-sm-6">

                                                        <div className="card">
                                                            <div className="card-body">

                                                                <h6 className="card-subtitle mb-2 text-muted">Accident image 2</h6>
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

                                                    {/* Template */}
                                                    <div className="col-sm-6">

                                                        <div className="card">
                                                            <div className="card-body">

                                                                <h6 className="card-subtitle mb-2 text-muted">Accident image 3</h6>
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

                    <NewImageFolder modalRefVar={modalRef} />
                    <ClaimStatusModal ref={claimStatusModalRef} messageStatus={messageStatus} />
                </div>
            </div>
        </>
    );
}

export default withAuth(Page);