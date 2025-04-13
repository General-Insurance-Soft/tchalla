"use client"

import Image from 'next/image';
import { useEffect, useState, useRef } from "react";
import NewImageFolder from "../../../lib/utils/new_image_folder";
import withAuth from "../../../lib/service/with_auth";
import ProposalForm from "../proposal-form";
import ProposalStatusModal from '../proposal-status-message.js';
import { fetchInsuranceCopanies, fetchDocumentTypes, fetchPolicies, saveProposalAndContact } from "../../../lib/service/model";

const Page = () => {

    const modalRef = useRef(null);
    const [messageStatus, setMessageStatus] = useState("");
    const proposalCaptureStatusModalRef = useRef(null);
    let [customerState, setCutomerState] = useState("existing");
    let [insuranceCompanies, setInsuranceCompanies] = useState([]);
    let [documentTypes, setDocumentTypes] = useState([]);
    let [policies, setPolicies] = useState([]);

    let [proposalNumber, setProposalNumber] = useState('');
    let [insuranceCompanyId, setInsuranceCompanyId] = useState(-1);
    let [policyId, setPolicyId] = useState('');
    let [startDate, setStartDate] = useState('');
    let [endDate, setEndDate] = useState('');
    let [proposalDocuments, setProposalDocuments] = useState([]);


    //customer state (lifted from CustomerForm)
    let [firstName, setFirstName] = useState('');
    let [secondName, setSecondName] = useState('');
    let [thirdName, setThirdName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [email, setEmail] = useState('');
    let [gender, setGender] = useState('');
    let [address, setAddress] = useState('');
    let [countryCode, setCountryCode] = useState('');
    let [administrativeArea, setAdministrativeArea] = useState('');
    let [customerGroup, setCustomerGroup] = useState(0);
    let [kraPin, setKraPin] = useState('');
    let [identificationCardId, setIdentificationCardId] = useState('');

    const saveProposal = async (event) => {
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
                "proposal_documents": proposalDocuments
            },
            "contact": {
                "first_name": firstName,
                "last_name": thirdName,
                "second_name": secondName,
                "gender": gender,
                "email": email,
                "phone": phoneNumber,
                "id_number": identificationCardId,
                "address": {
                    "administrative_area": administrativeArea,
                    "country_code": countryCode,
                    "address": address
                }
            }
        }
        let saveRes = await saveProposalAndContact(data);
        setMessageStatus(saveRes.message);

        // Show the ProposalStatusModal
        if (proposalCaptureStatusModalRef.current) {
            const modal = new window.bootstrap.Modal(proposalCaptureStatusModalRef.current);
            modal.show();
        }
    };

    useEffect(() => { }, [customerState]);

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

    let handleCustomerState = (value) => {
        setCutomerState(value);
    };

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

                    <div className="d-flex justify-content-start align-items-center mb-3">

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
                            <button onClick={(e) => saveProposal(e)} className="btn btn-primary me-2">Save</button>
                            <button className="btn btn-secondary">Reset</button>
                        </div>
                    </div>

                    <hr />

                    <ProposalForm
                        proposalAction={"add"}
                        firstName={firstName} setFirstName={setFirstName}
                        secondName={secondName} setSecondName={setSecondName}
                        thirdName={thirdName} setThirdName={setThirdName}
                        phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
                        email={email} setEmail={setEmail}
                        gender={gender} setGender={setGender}
                        address={address} setAddress={setAddress}
                        countryCode={countryCode} setCountryCode={setCountryCode}
                        administrativeArea={administrativeArea} setAdministrativeArea={setAdministrativeArea}
                        customerGroup={customerGroup} setCustomerGroup={setCustomerGroup}
                        kraPin={kraPin} setKraPin={setKraPin}
                        identificationCardId={identificationCardId}
                        setIdentificationCardId={setIdentificationCardId}
                        insuranceCompanyId={insuranceCompanyId} policyId={policyId}
                        startDate={startDate} endDate={endDate}
                        proposalDocuments={proposalDocuments} setProposalDocuments={setProposalDocuments}
                        setInsuranceCompanyId={setInsuranceCompanyId} setPolicyId={setPolicyId}
                        setStartDate={setStartDate} setEndDate={setEndDate}
                        insuranceCompanies={insuranceCompanies} setInsuranceCompanies={setInsuranceCompanies}
                        documentTypes={documentTypes} setDocumentTypes={setDocumentTypes}
                        policies={policies} setPolicies={setPolicies}
                        customerState={customerState} setCutomerState={setCutomerState}
                        saveProposal={saveProposal} proposalNumber={proposalNumber} setProposalNumber={setProposalNumber}
                    />

                    {/* Modal */}


                </div >
            </div >
            <NewImageFolder modalRefVar={modalRef} />
            <ProposalStatusModal ref={proposalCaptureStatusModalRef} messageStatus={messageStatus} />
        </>


    );
}


export default withAuth(Page);