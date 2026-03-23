"use client"

import Image from 'next/image';
import { useEffect, useState, useRef } from "react";
import NewImageFolder from "../../../lib/utils/new_image_folder";
import withAuth from "../../../lib/service/with_auth";
import ProposalForm from "../proposal-form";
import ProposalStatusModal from '../proposal-status-message.js';
import { fetchInsuranceCopanies, fetchDocumentTypes, fetchPolicies, saveProposalAndContact, fetchSearchedContacts, saveProposalData } from "../../../lib/service/model";

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
    let [selectedFiles, setSelectedFiles] = useState([]);
    // setPassportIdFileInputKey = {setPassportIdFileInputKey} 
    //                             passportIdFileInputKey = {passportIdFileInputKey}
    let [passportIdFileInputKey, setPassportIdFileInputKey] = useState(0);
    let [kraIdFileInputKey, setKraIdFileInputKey] = useState(0);

    const [searchText, setSearchText] = useState('');
    const [searchedContacts, setSearchedContacts] = useState([]);
    const [searchedContactId, setSearchedContactId] = useState([]);

    const dropdownRef = useRef(null);

    const saveProposal = async (event) => {
        event.preventDefault();
        // Save the proposal data to the server or perform any other action 
        console.log("Customer state " + customerState);

        if (customerState == "existing") {
            let data = {
                "policy_type_id": policyId,
                "start_date": startDate,
                "end_date": endDate,
                "insurance_company_id": insuranceCompanyId,
                "reference_number": proposalNumber,
                "proposal_documents": proposalDocuments,
                "contact_id": searchedContactId
            }
            let saveRes = await saveProposalData(data);
            //return proposalId:1 if successful
            if (saveRes.proposalId) {
                setMessageStatus("Proposal saved successfully");
                resetState();
            } else {
                setMessageStatus(saveRes.message);
            }

        } else {
            let customerGroupData = [];


            if (customerGroup.length != 0) {
                customerGroup.forEach((group) => {
                    //  { value: 9, label: "sdsdsdsd" }
                    customerGroupData.push({ "id": group.value, "name": group.label });
                });
            }

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
                    },
                    "contact_group": customerGroupData
                }
            }

            let formData = new FormData();

            formData.append("data", new Blob([JSON.stringify(data)], {
                type: "application/json"
            }));

            if (selectedFiles.length === 0) {
                formData.append("files", new Blob([])); // append empty file if none selected
            } else {
                for (let file of selectedFiles) {
                    formData.append("files", file); // key must match backend param
                }
            }

            let saveRes = await saveProposalAndContact(formData);
            //  if saveRes.message does not contain "Could not post data", reset state
            setMessageStatus(saveRes.message);

            if (!saveRes.message.includes("Could not post data")) {
                resetState();
            }

            // Show the ProposalStatusModal

        }
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


    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            const fetchContacts = async () => {
                let res = await fetchSearchedContacts(searchText);
                setSearchedContacts(res);
            };
            fetchContacts();
        }, 500); // Wait 500ms after user stops typing

        return () => clearTimeout(delayDebounce);
    }, [searchText]);



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setSearchedContacts([]); // clear results
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setSearchedContacts]);

    let handleCustomerState = (value) => {
        setCutomerState(value);
    };

    const resetState = () => {
        setFirstName('');
        setSecondName('');
        setThirdName('');
        setPhoneNumber('');
        setEmail('');
        setGender('');
        setAddress('');
        setCountryCode('');
        setAdministrativeArea('');
        setCustomerGroup([]);
        setKraPin('');
        setIdentificationCardId('');
        setInsuranceCompanyId(-1);
        setPolicyId('');
        setStartDate('');
        setEndDate('');
        setProposalDocuments([]);
        setProposalNumber('');
        setSelectedFiles([]);
        setPassportIdFileInputKey(prev => prev + 1);
        setKraIdFileInputKey(prev => prev + 1);
    }



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

                    <div className="mb-1">
                        <div className="row align-items-start gx-3 gy-2">

                            {/* State Select — always shown */}
                            <div className="col-12 col-md-2">
                                <select
                                    onChange={(e) => handleCustomerState(e.target.value)}
                                    id="inputState"
                                    className="form-select"
                                >
                                    <option value="existing">Existing Customer</option>
                                    <option value="new">New Customer</option>
                                </select>
                            </div>

                            {/* Conditional section for "existing" customer */}
                            {customerState !== "new" && (
                                <>
                                    {/* Search Input */}
                                    <div className="col-12 col-md-5 position-relative">
                                        <div className="input-group">
                                            <span className="input-group-text" id="search-icon">
                                                <i className="bi bi-search"></i>
                                            </span>
                                            <input
                                                id="search"
                                                type="text"
                                                className="form-control"
                                                placeholder="Search by Name, ID/Passport, Phone, Email"
                                                aria-label="Search"
                                                aria-describedby="search-icon"
                                                onChange={(e) => setSearchText(e.target.value)}
                                            />
                                        </div>

                                        {/* Suggestion Dropdown */}
                                        {searchedContacts?.length > 0 && (
                                            <ul
                                                className="list-group mt-1 position-absolute w-100"
                                                style={{
                                                    zIndex: 1000,
                                                    maxHeight: "200px",
                                                    overflowY: "auto",
                                                    backgroundColor: "#fff",
                                                    border: "1px solid #ccc",
                                                    borderRadius: "4px",
                                                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                                                }}
                                                ref={dropdownRef}
                                            >
                                                {searchedContacts.map((c) => (
                                                    <li
                                                        key={c.id}
                                                        className="list-group-item"
                                                        style={{
                                                            cursor: "pointer",
                                                            transition: "background-color 0.2s",
                                                        }}
                                                        onClick={() => {
                                                            setFirstName(c.first_name);
                                                            setThirdName(c.last_name);
                                                            setPhoneNumber(c.phone);
                                                            setSearchedContactId(c.id);
                                                        }}
                                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f5f5f5"}
                                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}
                                                    >
                                                        {c.first_name} {c.last_name} - {c.phone} - {c.id_number}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    {/* Selected Contact Preview */}
                                    {
                                        firstName && thirdName && phoneNumber && (
                                            <div className="col-12 col-md-5">
                                                <div
                                                    className="p-2 border rounded text-dark"
                                                    style={{
                                                        fontWeight: "500",
                                                        overflowX: "auto",
                                                        whiteSpace: "nowrap",
                                                        textColor: "#000",
                                                    }}
                                                >
                                                    {firstName} {thirdName} - {phoneNumber}
                                                </div>
                                            </div>
                                        )
                                    }

                                </>
                            )}

                            {/* Action Buttons */}
                            <div className="col-12 d-flex mt-3">
                                <button onClick={saveProposal} className="btn btn-primary me-2">
                                    Save
                                </button>
                                <button className="btn btn-secondary">Reset</button>
                            </div>
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
                        selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles}
                        passportIdFileInputKey={passportIdFileInputKey}
                        kraIdFileInputKey={kraIdFileInputKey}
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