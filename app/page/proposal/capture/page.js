"use client"

import Image from 'next/image';
import CustomerForm from "../../crm/contact/customer_form";
import { useEffect, useState, useRef } from "react";
import NewImageFolder from "../../../lib/utils/new_image_folder";
import withAuth from "../../../lib/service/with_auth";
import { fetchInsuranceCopanies, fetchDocumentTypes, fetchPolicies, saveProposalAndContact } from "../../../lib/service/model";

const Page = () => {

    const modalRef = useRef(null);
    let [customerState, setCutomerState] = useState("existing");
    let [insuranceCompanies, setInsuranceCompanies] = useState([]);
    let [documentTypes, setDocumentTypes] = useState([]);
    let [policies, setPolicies] = useState([]);

    let [proposalNumber, setProposalNumber] = useState('');
    let [insuranceCompanyId, setInsuranceCompanyId] = useState('');
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
                "proposal_documents": proposalDocuments
            },
            "contact": {
                "first_name": firstName,
                "last_name": thirdName,
                "gender": gender,
                "phone": phoneNumber,
                "id_number": identificationCardId,
                "address": {
                    "administrative_area": administrativeArea,
                    "country_code": countryCode
                }
            }
        }
        saveProposalAndContact(data);
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

                    <div className="d-flex justify-content-start mb-3">
                        <div className="">

                        </div>

                        <div className="">
                            <input id="proposal_tag"
                                value={proposalNumber}
                                onChange={(e) => setProposalNumber(e.target.value)}
                                type="text" className="form-control"
                                placeholder="proposal reference" />
                        </div>
                    </div>


                    <form className="row g-3">
                        {
                            customerState === "new" ?
                                <>
                                    <CustomerForm
                                        action="add"
                                        isUserPage={false}
                                        firstName={firstName}
                                        setFirstName={setFirstName}
                                        secondName={secondName}
                                        setSecondName={setSecondName}
                                        thirdName={thirdName}
                                        setThirdName={setThirdName}
                                        phoneNumber={phoneNumber}
                                        setPhoneNumber={setPhoneNumber}
                                        email={email}
                                        setEmail={setEmail}
                                        gender={gender}
                                        setGender={setGender}
                                        address={address}
                                        setAddress={setAddress}
                                        countryCode={countryCode}
                                        setCountryCode={setCountryCode}
                                        administrativeArea={administrativeArea}
                                        setAdministrativeArea={setAdministrativeArea}
                                        customerGroup={customerGroup}
                                        setCustomerGroup={setCustomerGroup}
                                        kraPin={kraPin}
                                        setKraPin={setKraPin}
                                        identificationCardId={identificationCardId}
                                        setIdentificationCardId={setIdentificationCardId}
                                    />

                                    <hr />
                                </>
                                :
                                ""
                        }
                        <div className="col-sm-12">
                            <div className="row d-flex align-items-end">
                                <div className="col-md-3">
                                    <label for="insurance">Select insurance:</label>
                                    <select id="insurance" className="form-select"
                                        value={insuranceCompanyId}
                                        onChange={(e) => setInsuranceCompanyId(e.target.value)}
                                    >
                                        <option defaultValue>None...</option>
                                        {insuranceCompanies.map((company) => (
                                            <option key={company.id} value={company.id}>
                                                {company.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="policy">Select policy:</label>
                                    <select id="policy" className="form-select"
                                        value={policyId}
                                        onChange={(e) => setPolicyId(e.target.value)}
                                    >
                                        <option defaultValue>None...</option>
                                        {policies.map((company) => (
                                            <option key={company.id} value={company.id}>
                                                {company.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-md-3">
                                    <label for="start_date">Start date:</label>
                                    <input value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        id="start_date" type="date"
                                        className="form-control"
                                        placeholder="Start date" />
                                </div>

                                <div className="col-md-3">
                                    <label for="end_date">End date:</label>
                                    <input value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        id="end_date" type="date"
                                        className="form-control"
                                        placeholder="End date" />
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
                                    <select id="policy" className="form-select"
                                        onChange={() => (
                                            setProposalDocuments([
                                                {
                                                    "folder_name": "folder_one",
                                                    "document_name": "passport",
                                                    "blob_url": "http://vvv.vvv.vvv.vvvvvvvvvvvvvvvvvvvvv"
                                                }
                                            ])
                                        )

                                        }
                                    >
                                        <option defaultValue>None...</option>
                                        {documentTypes.map((doc) => (
                                            <option key={doc.id} value={doc.id}>
                                                {doc.name}
                                            </option>
                                        ))}
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

                                                <h6 className="card-subtitle mb-2 text-muted">Proposal</h6>
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

                                </div>

                            </div>
                        </div>


                        <div className="text-center mb-3">
                            <div className="d-flex justify-content-center">
                                <button onClick={(e) => saveProposal(e)} className="btn btn-primary me-2">Save</button>
                                <button className="btn btn-secondary">Cancel</button>
                            </div>
                        </div>
                        <hr />
                    </form>

                    {/* Modal */}


                </div >
            </div >
            <NewImageFolder modalRefVar={modalRef} />
        </>


    );
}


export default withAuth(Page);