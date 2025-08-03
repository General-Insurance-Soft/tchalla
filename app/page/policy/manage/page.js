'use client'

import { useRef, useState, useEffect } from 'react';

import Image from 'next/image';
import NewImageFolder from "../../../lib/utils/new_image_folder";
import withAuth from "../../../lib/service/with_auth";
import { fetchPolicyData, fetchInsuranceCopanies, fetchDocumentTypes, fetchPolicies, getPolicyByContact } from "../../../lib/service/model";
import PolicyStatusModal from "../policy-status-message";
import PolicylForm from "../policy-form";

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
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [policyTypeId, setPolicyTypeId] = useState();

    //editFormContactDetails
    const [editFormContactDetails, setEditFormContactDetails] = useState("");
    const [selectedContactPolicy, setSelectedContactPolicy] = useState([]);
    const [policyNumber, setPolicyNumber] = useState("");
    const [certificateNumber, setCertificateNumber] = useState("");

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

                                {
                                    policyList.map((val, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{val["contactName"]}</td>
                                                <td>{val["phone"]}</td>
                                                <td>{val["email"]}</td>
                                                <td>{val["country"]}</td>
                                                <td>{val["county"]}</td>
                                                <td>{val["address"]}</td>
                                                <td>{val.start_date}</td>
                                                <td>{val.policy_count}</td>
                                                <td>{val["updateByName"]}</td>
                                                <td>{val.updated_at}</td>
                                                <td>
                                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info"
                                                        onClick={
                                                            () => {
                                                                setShowEditForm(true, val)
                                                                setSelectedPolicy(val)
                                                                // setInsuranceCompanyId(val.insurance_company_id)
                                                                setPolicyTypeId(val.policy_type_id)
                                                                setStartDate(val.start_date)
                                                                setEndDate(val.end_date)
                                                                setCertificateNumber(val.certificate_number)
                                                                setPolicyNumber(val.policy_number)
                                                                setEditFormContactDetails("Edit " + val["contactName"] + " policy from: " + val["start_date"])
                                                                getPolicyByContact(val.contact_id).then((res) => {
                                                                    setSelectedContactPolicy(res)
                                                                })
                                                                console.log("selectedPolicy", selectedPolicy)
                                                            }
                                                        }
                                                    ><i className="bi bi-pencil-square"></i></button>
                                                    <button type="button" data-bs-toggle="modal"
                                                        onClick={
                                                            () => {
                                                                setShowEditForm(false)
                                                                setSelectedPolicy(val)
                                                                getPolicyByContact(val.contact_id).then((res) => {
                                                                    setSelectedContactProposals(res)
                                                                })
                                                            }
                                                        }
                                                        data-bs-target="#deleteProposalModal"
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
                                    <h5 className="card-title">{editFormContactDetails}</h5>

                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div>

                                        </div>

                                        <div>
                                            <button className="btn btn-primary me-2" onClick={() => setShowEditForm(false)}>Update</button>
                                            <button className="btn btn-secondary" onClick={() => setShowEditForm(false)}>Cancel</button>
                                        </div>
                                    </div>

                                    <PolicylForm
                                        policyNumber={policyNumber}
                                        setPolicyNumber={setPolicyNumber}
                                        certificateNumber={certificateNumber}
                                        setCertificateNumber={setCertificateNumber}
                                        startDate={startDate}
                                        setStartDate={setStartDate}
                                        endDate={endDate}
                                        setEndDate={setEndDate}
                                        setShowEditForm={setShowEditForm}
                                        showEditForm={showEditForm}
                                        selectedContactPolicy={selectedContactPolicy}
                                        policyTypeId={policyTypeId}
                                        setPolicyTypeId={setPolicyTypeId}
                                        policies={policies}
                                    // insuranceCompanies={insuranceCompanies}
                                    // setInsuranceCompanies={setInsuranceCompanies}
                                    />

                                    <div className="text-center mb-3">
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-primary me-2">Update</button>
                                            <button className="btn btn-secondary">Cancel</button>
                                        </div>
                                    </div>
                                    <hr />

                                    {/* Modal */}

                                </div>
                            </div>

                        )
                    }



                </div>
            </div >
            <NewImageFolder modalRefVar={modalRef} />
            <PolicyStatusModal ref={policyStatusModalRef} messageStatus={messageStatus} />
        </>
    );
}

export default withAuth(Page);