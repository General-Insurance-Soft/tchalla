'use client';

import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import NewImageFolder from "../../../lib/utils/new_image_folder";
import withAuth from "../../../lib/service/with_auth";

import { fetchSearchedProposals, savePolicyData } from "../../../lib/service/model";
// PolicyStatusModal
import PolicyStatusModal from '../policy-status-message';
import PolicylForm from "../policy-form";

const Page = () => {

    const modalRef = useRef(null);
    const policyStatusModalRef = useRef(null);

    const [searchText, setSearchText] = useState('');
    const [searchedContent, setSearchedContent] = useState([]);
    const [selectedSearchContent, setSelectedSearchContent] = useState('');
    //setReferenceNumber
    const [proposalReferenceNumber, setProposalReferenceNumber] = useState('policy reference number');
    const [proposalId, setProposalId] = useState();
    const [policyNumber, setPolicyNumber] = useState();
    const [certificateNumber, setCertificateNumber] = useState();
    const [messageStatus, setMessageStatus] = useState('');
    const [contactId, setContactId] = useState();
    const [insuranceCompanyId, setInsuranceCompanyId] = useState();
    const [policyTypeId, setPolicyTypeId] = useState();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showEditForm, setShowEditForm] = useState(true);
    const [documentTypes, setDocumentTypes] = useState([]);
    const [policies, setPolicies] = useState([]);
    const [insuranceCompanies, setInsuranceCompanies] = useState([]);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            const fetchSearchContent = async () => {
                let res = await fetchSearchedProposals(searchText);
                setSearchedContent(res);
            };
            fetchSearchContent();
        }, 500); // Wait 500ms after user stops typing

        return () => clearTimeout(delayDebounce);
    }, [searchText]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setSearchedContent([]); // clear results
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setSearchedContent]);

    const resetState = () => {
        setSearchText('');
        setSearchedContent([]);
        setSelectedSearchContent('');
        setProposalReferenceNumber('policy reference number');
        setProposalId('');
        setPolicyNumber('');
        setCertificateNumber('');
        setStartDate('');
        setEndDate('');
        setContactId('');
        setInsuranceCompanyId('');
        setPolicyTypeId('');

    };

    const savePolicy = async (event) => {

        event.preventDefault();

        let data = {
            "policy_number": policyNumber,
            "certificate_number": certificateNumber,
            "proposal_id": proposalId,
            "contact_id": contactId,
            "start_date": startDate,
            "end_date": endDate,
            "insurance_company_id": insuranceCompanyId,
            "policy_type_id": policyTypeId
        }

        let saveRes = await savePolicyData(data);

        if ('message' in saveRes) {
            setMessageStatus(saveRes.message);

            if (policyStatusModalRef.current) {
                const modal = new window.bootstrap.Modal(policyStatusModalRef.current);
                modal.show();
            }

            return;
        }

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
                <h1>Policy</h1>
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

                    <div className="mb-3">
                        <div className="row align-items-start gx-3 gy-2">
                            {/* <input id="search" type="text" className="form-control" placeholder="Search by Name, car, policy, certificate, ID/Passport" /> */}


                            {/* <div className="input-group"> */}
                            {/* <span className="input-group-text" id="search-icon">
                                    <i className="bi bi-search"></i>
                                </span>
                                <input id="search" type="text" className="form-control" placeholder="Search proposal by ref no, phone no, ID/Passport" aria-label="Search" aria-describedby="search-icon" /> */}

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
                                            placeholder="Search by Proposal Ref No, ID/Passport, Phone, Email"
                                            aria-label="Search"
                                            aria-describedby="search-icon"
                                            value={searchText}
                                            onChange={(e) => setSearchText(e.target.value)}
                                        />
                                    </div>

                                    {/* Suggestion Dropdown */}
                                    {searchedContent?.length > 0 && (
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
                                            {searchedContent.map((c) => (
                                                <li
                                                    key={c.id}
                                                    className="list-group-item"
                                                    style={{
                                                        cursor: "pointer",
                                                        transition: "background-color 0.2s",
                                                    }}
                                                    onClick={() => {

                                                        setProposalReferenceNumber(c.reference_number);
                                                        setProposalId(c.id);
                                                        setContactId(c.contact_id);
                                                        setInsuranceCompanyId(c.insurance_company_id);
                                                        setPolicyTypeId(c.policy_type_id);
                                                        setSelectedSearchContent(
                                                            [c.reference_number, c.contact_name, c.contact_id_number]
                                                                .filter(Boolean)
                                                                .join(' - ')
                                                        );
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f5f5f5"}
                                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}
                                                >
                                                    {/* {c.reference_number} {c.contact_name} - {c.phone} - {c.contact_id_number} */}
                                                    <span>
                                                        {c.reference_number}
                                                        {[
                                                            c.contact_name,
                                                            c.phone,
                                                            c.contact_id_number
                                                        ].filter(Boolean).length > 0 && ' - '}
                                                        {[c.contact_name, c.phone, c.contact_id_number]
                                                            .filter(Boolean)
                                                            .join(' - ')}
                                                    </span>

                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Selected Contact Preview */}
                                {
                                    selectedSearchContent && (
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
                                                {selectedSearchContent}
                                            </div>
                                        </div>
                                    )
                                }

                            </>


                            {/* </div> */}
                        </div>

                        <div className="col-12 d-flex mt-5">
                            <button
                                className="btn btn-primary me-2"
                                onClick={(e) => savePolicy(e)}
                            >Save</button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => resetState()}
                            >Reset</button>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-start mb-3">
                        <div className="">

                        </div>

                        <div className="">
                            <label id="policy_tag" className="form-control">{proposalReferenceNumber === 'proposal reference number' ? 'policy ref #' : `proposal ref number: ${proposalReferenceNumber}`}</label>
                        </div>
                    </div>


                    {/*  form goes here  ======================>*/}
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
                        insuranceCompanies={insuranceCompanies}
                        setInsuranceCompanies={setInsuranceCompanies}
                    />


                    <div className="row">
                        <div className="text-center mb-3">
                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-primary me-2"
                                    onClick={(e) => savePolicy(e)}
                                >Save</button>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => resetState()}
                                >Reset</button>
                            </div>
                        </div>
                    </div>

                    {/* Modal */}


                </div>
            </div>
            <NewImageFolder modalRefVar={modalRef} />
            <PolicyStatusModal ref={policyStatusModalRef} messageStatus={messageStatus} />
        </>
    );
}

export default withAuth(Page);