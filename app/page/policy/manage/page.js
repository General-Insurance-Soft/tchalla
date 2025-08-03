'use client'

import { useRef, useState,useEffect } from 'react';

import Image from 'next/image';
import NewImageFolder from "../../../lib/utils/new_image_folder";
import withAuth from "../../../lib/service/with_auth";
import { fetchPolicyData, fetchInsuranceCopanies, fetchDocumentTypes, fetchPolicies } from "../../../lib/service/model";
import PolicyStatusModal from "../policy-status-message";

const Page = () => {

    const [showEditForm, setShowEditForm] = useState(false);
    const modalRef = useRef(null);

    const [messageStatus, setMessageStatus] = useState("");
    const [res, setRes] = useState({});
    const [insuranceCompanies, setInsuranceCompanies] = useState([]);
    const [documentTypes, setDocumentTypes] = useState([]);
    const [policies, setPolicies] = useState([]);
    const [policyList, setPolicyList] = useState([]);
    const [contacts, setContacts] = useState({});
    const [policyStatusModalRef] = useState(useRef(null));
    const [selectedPolicy, setSelectedPolicy] = useState(null);

    const createNewImageFolder = (event) => {

        if (typeof window !== "undefined" && bootstrap) {
            if (event.target.value === "new folder") {
                const modal = new window.bootstrap.Modal(modalRef.current);
                modal.show();
            }
        }
    }


const fetchAllPolicyData = async () => {
        let res = await fetchPolicyData(0, 15);

        if ('message' in res) {
            setMessageStatus(res.message);

            if (policyStatusModalRef.current) {
                const modal = new window.bootstrap.Modal(policyStatusModalRef.current);
                modal.show();
            }
            return;
        }

        setRes(res);
    };


    useEffect(() => {
        fetchAllPolicyData();
    }, []);

    //initialize fieds with server data
    useEffect(() => {

        const fetchInsuranceCompaniesData = async () => {
            let res = await fetchInsuranceCopanies();
            if ('error' in res) {
                return;
            }
            setInsuranceCompanies(res);
        };

        const fetchDocumentTypesData = async () => {
            let res = await fetchDocumentTypes();
            if ('error' in res) {
                return;
            }
            setDocumentTypes(res);
        };

        const fetchPoliciesData = async () => {
            let res = await fetchPolicies();
            if ('error' in res) {
                return;
            }
            setPolicies(res);
        };

        fetchPoliciesData();
        fetchDocumentTypesData();
        fetchInsuranceCompaniesData();

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

        let policyLst = [];

        res.policies.forEach((policy) => {

            try {
                policy["updateByName"] = updatedByMap[policy.updated_by].first_name + " " + updatedByMap[policy.updated_by].third_name;
            } catch (error) {
                console.log("Error in refresh policy table =========>>>" + error);
                policy["updateByName"] = "";
            }

            try {
                policy["contactName"] = contactMap[policy.contact_id].first_name + " " + contactMap[policy.contact_id].last_name;
            } catch (error) {
                console.log("Error in refresh policy table =========>>>" + error);

                policy["contactName"] = "";
            }

            try {
                policy["address"] = contactMap[policy.contact_id].address.address;
            } catch (error) {
                console.log("Error in refresh policy table =========>>>" + error);
                policy["address"] = "";
            }

            try {
                policy["country"] = adminAreas[contactMap[policy.contact_id].address.country_code].name;
            } catch (error) {
                console.log("Error in refresh policy table =========>>>" + error);
                policy["country"] = "";
            }

            try {
                policy["county"] = adminAreas[contactMap[policy.contact_id].address.administrative_area].name;
            } catch (error) {
                console.log("Error in refresh policy table =========>>>" + error);
                policy["county"] = "";
            }

            try {
                policy["phone"] = contactMap[policy.contact_id].phone;
            } catch (error) {
                console.log("Error in refresh policy table =========>>>" + error);

                policy["phone"] = "";
            }

            try {
                policy["email"] = contactMap[policy.contact_id].email;
            } catch (error) {
                console.log("Error in refresh policy table =========>>>" + error);
                policy["email"] = "";
            }

            policyLst.push(policy);

        });

        setPolicyList(policyLst);

    }, [res]);


    return (
        <>
            <div className="pagetitle">
                <h1>CRM</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">Policy</a></li>
                        <li className="breadcrumb-item active">Manage</li>
                    </ol>
                </nav>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Manage Policy Details</h5>
                    <div>
                        <div className="row mb-2">
                            <div className="col-sm-6">Total Customers: 300</div>
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
                                    <th scope="col">Latest Policy Date</th>
                                    <th scope="col">Total number of policies</th>
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
                                    <td>2024-08-11</td>
                                    <td>3</td>
                                    <td>Lucy</td>
                                    <td>2024-09-11</td>

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
                                    <h5 className="card-title">Edit Tom Lee policy from date: 2024-08-11</h5>

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
                                            <input type="text" className="form-control" value="Tom Lee" disabled/>
                                        </div>

                                        <div className="col-md-4">
                                            <select id="inputState" className="form-select">
                                                <option defaultValue>Jubilee</option>
                                                <option>Britam</option>
                                                <option>Old mutual</option>
                                                <option>CIC</option>
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <select id="inputState" className="form-select">
                                                <option defaultValue>Select policy type...</option>
                                                <option>Fire/Bulgary</option>
                                                <option>Health</option>
                                                <option>Car</option>
                                                <option>Life insurance</option>
                                            </select>
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
                                        <option>policy</option>
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
                                    <select onChange={(event) => createNewImageFolder(event)} id="policy" className="form-select">
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

                                                                <h6 className="card-subtitle mb-2 text-muted">Policy</h6>
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

                                                                <h6 className="card-subtitle mb-2 text-muted">Cetificate</h6>
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
                                                <button className="btn btn-primary me-2">Update</button>
                                                <button className="btn btn-secondary">Cancel</button>
                                            </div>
                                        </div>
                                        <hr />
                                    </form>

                                    {/* Modal */}
                                    
                                </div>
                            </div>

                        )
                    }



                </div>
            </div>
            <NewImageFolder modalRefVar={modalRef} />
            <PolicyStatusModal ref={policyStatusModalRef} messageStatus={messageStatus} />
        </>
    );
}

export default withAuth(Page);