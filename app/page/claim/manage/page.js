'use client'

import { useRef, useState, useEffect } from 'react';

import Image from 'next/image';
import NewImageFolder from "../../../lib/utils/new_image_folder";
import withAuth from "../../../lib/service/with_auth";
import ClaimStatusModal from '../claim-status-message';
import ClaimForm from "../claim-form";
import ClaimLoader from "./claim-loader";

//fetchClaimData
import { fetchClaimData, fetchDocumentTypes, fetchPaymentMethods, getClaimByContact, getClaim, updateClaimData } from "../../../lib/service/model";


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
    //contact_id
    const [contactId, setContactId] = useState(0);

    const [paymentModes, setPaymentModes] = useState([]);
    const [documentTypes, setDocumentTypes] = useState([]);

    const [contacts, setContacts] = useState({});
    const [claimList, setClaimList] = useState([]);
    const [contactName, setContactName] = useState("");
    const [bootstrap, setBootstrap] = useState(false);
    const [showOptionalClaimSelectSpinner, setShowOptionalClaimSelectSpinner] = useState(false);
    const [editFormDetails, setEditFormDetails] = useState("");

    const [paymentModeId, setPaymentModeId] = useState("");
    const [showOptionalPolicySelectSpinner, setShowOptionalPolicySelectSpinner] = useState(false);
    const [claimStatus, setClaimStatus] = useState("");
    const [policyNumber, setPolicyNumber] = useState("");

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

    const fetchSubClaim = async (claimId) => {
        let claim = await getClaim(claimId);
        if ('message' in claim) {
            setMessageStatus(claim.message);

            if (claimStatusModalRef.current) {
                const modal = new window.bootstrap.Modal(claimStatusModalRef.current);
                modal.show();
            }
            return;
        }

        setSelectedClaim(claim)
        setEditFormDetails(
            "Edit claim: " + claim["claim_number"] + " " + " of policy no.: " + claim["policy_number"]
        );
        setPolicyNumber(claim.policy_number);
        setClaimDate(claim.claim_date);
        setClaimNumber(claim.claim_number);
        setPaymentModeId(claim.payment_method);
        setContactId(claim.contact_id);
        setClaimStatus(claim.claim_status);
        setShowOptionalClaimSelectSpinner(false);
    }

    const handleUpdateClaim = async () => {
        const claimData = {
            "policy_number": policyNumber,
            "contact_id": contactId,
            "payment_method": paymentModeId,
            "claim_number": claimNumber,
            "claim_date": claimDate,
            "claim_status": claimStatus
        };

        let saveRes = await updateClaimData(claimData, selectedClaim.id);

        if ('message' in saveRes) {
            setMessageStatus(saveRes.message);
            fetchAllClaimData();
            if (claimStatusModalRef.current) {
                const modal = new window.bootstrap.Modal(claimStatusModalRef.current);
                modal.show();
            }

            return;
        }
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
                                                <td><span className="badge bg-info">{val.claim_status}</span></td>
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
                                                                setEditFormDetails(
                                                                    "Edit claim: " + val["claim_number"] + " " + " of policy no.: " + val["policy_number"]
                                                                );
                                                                setClaimDate(val.claim_date)
                                                                setClaimNumber(val.claim_number);
                                                                setClaimStatus(val.claim_status);
                                                                setContactId(val.contact_id);
                                                                setPolicyNumber(val.policy_number);
                                                                getClaimByContact(val.contact_id).then((res) => {
                                                                    setSelectedContactClaims(res)
                                                                })
                                                                setClaimAction("edit");
                                                                setPaymentModeId(val.payment_method);

                                                            }
                                                        }
                                                    ><i className="bi bi-pencil-square"></i></button>
                                                    <button type="button" data-bs-toggle="modal"
                                                        onClick={
                                                            () => {
                                                                setShowEditForm(false)
                                                                setSelectedClaim(val)
                                                                getClaimByContact(val.contact_id).then((res) => {
                                                                    setSelectedContactClaims(res)
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
                                <h5 className="card-title">{editFormDetails}</h5>



                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>

                                        <ClaimLoader action={"edit"}
                                            selectedContactClaims={selectedContactClaims}
                                            fetchSubClaim={fetchSubClaim}
                                            showOptionalPolicySelectSpinner={showOptionalPolicySelectSpinner}
                                            selectedClaim={selectedClaim}
                                            setShowOptionalClaimSelectSpinner={setShowOptionalClaimSelectSpinner}
                                            showOptionalClaimSelectSpinner={showOptionalClaimSelectSpinner}
                                        />

                                    </div>

                                    <div>
                                        <button
                                            className="btn btn-primary me-2"
                                            onClick={
                                                (event) => {
                                                    setShowEditForm(false)
                                                    handleUpdateClaim(event);
                                                }
                                            }


                                        >Update</button>
                                        <button className="btn btn-secondary" onClick={() => setShowEditForm(false)}>Cancel</button>
                                    </div>
                                </div>

                                <ClaimForm
                                    claimReference={claimNumber}
                                    setClaimReference={setClaimNumber}
                                    paymentModeId={paymentModeId}
                                    setPaymentModeId={setPaymentModeId}
                                    claimDate={claimDate}
                                    setClaimDate={setClaimDate}
                                    paymentModes={paymentModes}
                                    claimAction={claimAction}
                                    setClaimAction={setClaimAction}
                                    claimStatus={claimStatus}
                                    setClaimStatus={setClaimStatus}
                                />

                            </div>

                        )
                    }


                    {/* Modal */}

                    <NewImageFolder modalRefVar={modalRef} />
                    <ClaimStatusModal ref={claimStatusModalRef} messageStatus={messageStatus} />
                </div>
            </div >
        </>
    );
}

export default withAuth(Page);