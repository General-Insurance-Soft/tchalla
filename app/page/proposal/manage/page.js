'use client'

import { useRef, useState, useEffect } from 'react';

import Image from 'next/image';
import NewImageFolder from "../../../lib/utils/new_image_folder";
import withAuth from "../../../lib/service/with_auth";
import DeleteProposal from './delete-proposal.js';
import ProposalStatusModal from '../proposal-status-message.js';
import { fetchProposalData, daleteProposal, fetchInsuranceCopanies, fetchDocumentTypes, fetchPolicies, getProposal, getProposalByContact, updateProposal } from "../../../lib/service/model";
import ProposalForm from "../proposal-form";
import ProposalLoader from "./proposal-loader";


const Page = () => {
    const modalRef = useRef(null);
    const proposalStatusModalRef = useRef(null);

    const [showOptionalProposalSelectSpinner, setShowOptionalProposalSelectSpinner] = useState(false);

    const [showEditForm, setShowEditForm] = useState(false);
    const [administrativeAreas, setAdministrativeAreas] = useState({});
    const [contacts, setContacts] = useState({});
    const [proposalList, setProposalList] = useState([]);
    const [res, setRes] = useState({});
    const [selectedProposalId, setSelectedProposalId] = useState(null);
    const [selectedProposal, setSelectedProposal] = useState(null);
    const [messageStatus, setMessageStatus] = useState("");
    let [insuranceCompanies, setInsuranceCompanies] = useState([]);
    let [documentTypes, setDocumentTypes] = useState([]);
    let [policies, setPolicies] = useState([]);
    let [customerState, setCutomerState] = useState("");
    let [proposalNumber, setProposalNumber] = useState('');
    let [insuranceCompanyId, setInsuranceCompanyId] = useState('');
    let [policyId, setPolicyId] = useState('');
    let [startDate, setStartDate] = useState('');
    let [endDate, setEndDate] = useState('');
    let [editFormContactDetails, setEditFormContactDetails] = useState("");
    let [selectedContactProposals, setSelectedContactProposals] = useState([]);
    let [previews, setPreviews] = useState([]);
    let [selectedFiles, setSelectedFiles] = useState([]);
    let [proposalFiles, setProposalFiles] = useState([]);

    const creatNewImageFolder = (event) => {

        if (typeof window !== "undefined" && bootstrap) {
            if (event.target.value === "new folder") {
                const modal = new window.bootstrap.Modal(modalRef.current);
                modal.show();
            }
        }
    }

    const updateProposalData = async (event) => {
        event.preventDefault();

        let data = {
            "policy_type_id": policyId,
            "start_date": startDate,
            "end_date": endDate,
            "insurance_company_id": insuranceCompanyId,
            "reference_number": proposalNumber,
            "proposal_documents": [{}]
        }

        let response = await updateProposal(selectedProposal.id, data);

        setMessageStatus(response.message);
        fetchAllProposalData();

        if (proposalStatusModalRef.current) {
            const modal = new window.bootstrap.Modal(proposalStatusModalRef.current);
            modal.show();
        }
        return;

    }

    const fetchSubproposal = async (proposalId) => {
        let proposal = await getProposal(proposalId);
        if ('message' in proposal) {
            setMessageStatus(proposal.message);

            if (proposalStatusModalRef.current) {
                const modal = new window.bootstrap.Modal(proposalStatusModalRef.current);
                modal.show();
            }
            setShowOptionalProposalSelectSpinner(false);
            return;
        }

        setSelectedProposal(proposal)
        setInsuranceCompanyId(proposal.insurance_company_id)
        setPolicyId(proposal.policy_type_id)
        setStartDate(proposal.start_date)
        setEndDate(proposal.end_date)
        setProposalNumber(proposal.reference_number)
        let contactName = contacts[proposal.contact_id].first_name + " " + contacts[proposal.contact_id].last_name;
        setEditFormContactDetails("Edit " + contactName + " proposal from: " + proposal["start_date"])
        setShowOptionalProposalSelectSpinner(false);
    }


    const deleteProposal = async () => {
        if (selectedProposal == null) return

        let res = await daleteProposal(selectedProposal.id);
        console.log("delete proposal res", res);
        setMessageStatus(res.message);
        fetchAllProposalData();
        // Show the ProposalStatusModal
        if (proposalStatusModalRef.current) {
            const modal = new window.bootstrap.Modal(proposalStatusModalRef.current);
            modal.show();
        }
    }

    let saveProposal = (event) => {
        event.preventDefault();
        // Save the proposal data to the server or perform any other action 
        console.log("Proposal data saved:", {
            proposalNumber,
            insuranceCompanyId,
            policyId,
            startDate,
            endDate,
        });

        let data = {
            "proposal": {
                "policy_type_id": policyId,
                "start_date": startDate,
                "end_date": endDate,
                "insurance_company_id": insuranceCompanyId,
                "reference_number": proposalNumber,
                "proposal_documents": [{}]
            }
        }
        saveProposalAndContact(data);
    };

    const resetSelectedProposal = () => {
        setSelectedProposalId(null);
    }


    const fetchAllProposalData = async () => {
        let res = await fetchProposalData(0, 15);

        if ('message' in res) {
            setMessageStatus(res.message);

            if (proposalStatusModalRef.current) {
                const modal = new window.bootstrap.Modal(proposalStatusModalRef.current);
                modal.show();
            }
            return;
        }

        setRes(res);
    };


    useEffect(() => {
        fetchAllProposalData();
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

        let proposalLst = [];

        res.proposals.forEach((proposal) => {

            try {
                proposal["updateByName"] = updatedByMap[proposal.updated_by].first_name + " " + updatedByMap[proposal.updated_by].third_name;
            } catch (error) {
                console.log("Error in refresh proposal table =========>>>" + error);
                proposal["updateByName"] = "";
            }

            try {
                proposal["contactName"] = contactMap[proposal.contact_id].first_name + " " + contactMap[proposal.contact_id].last_name;
            } catch (error) {
                console.log("Error in refresh proposal table =========>>>" + error);

                proposal["contactName"] = "";
            }

            try {
                proposal["address"] = contactMap[proposal.contact_id].address.address;
            } catch (error) {
                console.log("Error in refresh proposal table =========>>>" + error);
                proposal["address"] = "";
            }

            try {
                proposal["country"] = adminAreas[contactMap[proposal.contact_id].address.country_code].name;
            } catch (error) {
                console.log("Error in refresh proposal table =========>>>" + error);
                proposal["country"] = "";
            }

            try {
                proposal["county"] = adminAreas[contactMap[proposal.contact_id].address.administrative_area].name;
            } catch (error) {
                console.log("Error in refresh proposal table =========>>>" + error);
                proposal["county"] = "";
            }

            try {
                proposal["phone"] = contactMap[proposal.contact_id].phone;
            } catch (error) {
                console.log("Error in refresh proposal table =========>>>" + error);

                proposal["phone"] = "";
            }

            try {
                proposal["email"] = contactMap[proposal.contact_id].email;
            } catch (error) {
                console.log("Error in refresh proposal table =========>>>" + error);
                proposal["email"] = "";
            }

            proposalLst.push(proposal);

        });

        setProposalList(proposalLst);

    }, [res]);


    return (
        <>
            <div className="pagetitle">
                <h1>Proposal</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">Proposal</a></li>
                        <li className="breadcrumb-item active">Manage</li>
                    </ol>
                </nav>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Manage Proposal Details</h5>
                    <div className="table-responsive">
                        <div className="row mb-2">
                            <div className="col-sm-6">Total Customers: 600</div>
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
                                    <th scope="col">Latest proposal date</th>
                                    <th scope="col">Total number of proposals</th>
                                    <th scope="col">Last Editor</th>
                                    <th scope="col">Last Edited</th>

                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    proposalList.map((proposal, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{proposal["contactName"]}</td>
                                                <td>{proposal["phone"]}</td>
                                                <td>{proposal["email"]}</td>
                                                <td>{proposal["country"]}</td>
                                                <td>{proposal["county"]}</td>
                                                <td>{proposal["address"]}</td>
                                                <td>{proposal.start_date}</td>
                                                <td>{proposal.proposal_count}</td>
                                                <td>{proposal["updateByName"]}</td>
                                                <td>{proposal.updated_at}</td>
                                                <td>
                                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info"
                                                        onClick={
                                                            () => {
                                                                setShowEditForm(true, proposal)
                                                                setSelectedProposal(proposal)
                                                                setInsuranceCompanyId(proposal.insurance_company_id)
                                                                setPolicyId(proposal.policy_type_id)
                                                                setStartDate(proposal.start_date)
                                                                setEndDate(proposal.end_date)
                                                                setProposalNumber(proposal.reference_number)
                                                                setEditFormContactDetails("Edit " + proposal["contactName"] + " proposal from: " + proposal["start_date"])
                                                                getProposalByContact(proposal.contact_id).then((res) => {
                                                                    setSelectedContactProposals(res)
                                                                })
                                                                console.log("selectedProposal", selectedProposal)
                                                            }
                                                        }
                                                    ><i className="bi bi-pencil-square"></i></button>
                                                    <button type="button" data-bs-toggle="modal"
                                                        onClick={
                                                            () => {
                                                                setShowEditForm(false)
                                                                setSelectedProposal(proposal)
                                                                getProposalByContact(proposal.contact_id).then((res) => {
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

                                        <ProposalLoader action={"edit"}
                                            selectedContactProposals={selectedContactProposals}
                                            setShowOptionalProposalSelectSpinner={setShowOptionalProposalSelectSpinner}
                                            fetchSubproposal={fetchSubproposal}
                                            showOptionalProposalSelectSpinner={showOptionalProposalSelectSpinner}
                                            selectedProposal={selectedProposal}
                                        />

                                        <div>
                                            <button className="btn btn-primary me-2"
                                                onClick={
                                                    () => {
                                                        // setShowEditForm(false)
                                                        updateProposalData(event);
                                                    }
                                                }>
                                                Update
                                            </button>
                                            <button className="btn btn-secondary" onClick={() => setShowEditForm(false)}>Close</button>
                                        </div>
                                    </div>
                                    <ProposalForm
                                        proposalAction={"edit"} selectedProposal={selectedProposal}
                                        insuranceCompanyId={insuranceCompanyId} policyId={policyId}
                                        startDate={startDate} endDate={endDate}
                                        setInsuranceCompanyId={setInsuranceCompanyId} setPolicyId={setPolicyId}
                                        setStartDate={setStartDate} setEndDate={setEndDate}
                                        insuranceCompanies={insuranceCompanies} setInsuranceCompanies={setInsuranceCompanies}
                                        documentTypes={documentTypes} setDocumentTypes={setDocumentTypes}
                                        policies={policies} setPolicies={setPolicies}
                                        customerState={customerState} setCutomerState={setCutomerState}
                                        saveProposal={saveProposal} proposalNumber={proposalNumber} setProposalNumber={setProposalNumber} updateProposalData={updateProposalData}
                                        setShowEditForm={setShowEditForm}
                                        selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles}
                                        proposalFiles={selectedFiles} setProposalFiles={setSelectedFiles}
                                        previews={previews} setPreviews={setPreviews}
                                    />

                                    {/* Modal */}

                                </div>
                            </div>

                        )
                    }

                </div>
            </div >
            <NewImageFolder modalRefVar={modalRef} />
            <DeleteProposal
                deleteProposal={deleteProposal}
                resetSelectedProposal={resetSelectedProposal}
                selectedContactProposals={selectedContactProposals}
                setShowOptionalProposalSelectSpinner={setShowOptionalProposalSelectSpinner}
                fetchSubproposal={fetchSubproposal}
                showOptionalProposalSelectSpinner={showOptionalProposalSelectSpinner}
                selectedProposal={selectedProposal}
            />
            <ProposalStatusModal ref={proposalStatusModalRef} messageStatus={messageStatus} />
        </>

    );
}

export default withAuth(Page);