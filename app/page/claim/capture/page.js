'use client';

import { useEffect, useRef, useState } from "react";

import Image from 'next/image';
import NewImageFolder from "../../../lib/utils/new_image_folder";
import withAuth from "../../../lib/service/with_auth";
import { fetchSearchedPolicies, fetchPaymentMethods, saveClaimData } from "../../../lib/service/model";
import ClaimForm from "../claim-form";
// ClaimStatusModal 
import ClaimStatusModal from "../claim-status-message";
const Page = () => {

    const [searchText, setSearchText] = useState('');
    const [searchedContent, setSearchedContent] = useState([]);
    const [selectedSearchContent, setSelectedSearchContent] = useState('');

    const [policyNumber, setPolicyNumber] = useState('policy reference number');
    const [certificateNumber, setCertificateNumber] = useState();
    const [contactId, setContactId] = useState();

    const [paymentModeId, setPaymentModeId] = useState(-1);
    const [paymentModes, setPaymentModes] = useState([]);
    const [claimAction, setClaimAction] = useState("create"); // or "edit"

    const [claimId, setClaimId] = useState(null); // For editing an existing claim
    const [messageStatus, setMessageStatus] = useState('');
    const [claimDate, setClaimDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
    const [claimReference, setClaimReference] = useState('');
    const [claimCertificate, setClaimCertificate] = useState('');
    const claimStatusModalRef = useRef(null);
    const dropdownRef = useRef(null);
    const [modalRef, setModalRef] = useState(null);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            const fetchSearchContent = async () => {
                let res = await fetchSearchedPolicies(searchText);
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

    //fetchPaymentMethods
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

        fetchPaymentMethodsData();
    }, []);

    const handleSaveClaim = async () => {
        const claimData = {
            "policy_number": policyNumber,
            "contact_id": contactId,
            "payment_method": paymentModeId,
            "claim_number": claimReference,
            "claim_date": claimDate
        };

        let saveRes = await saveClaimData(claimData);

        if ('message' in saveRes) {
            setMessageStatus(saveRes.message);

            if (claimStatusModalRef.current) {
                const modal = new window.bootstrap.Modal(claimStatusModalRef.current);
                modal.show();
            }

            return;
        }
    };

    const resetState = () => {
        setSearchText('');
        setSearchedContent([]);
        setSelectedSearchContent('');
        setPolicyNumber('policy reference number');
        setCertificateNumber('');
        setContactId('');
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
                <h1>Claim</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">Claim</a></li>
                        <li className="breadcrumb-item active">Capture</li>
                    </ol>
                </nav>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Capture Claim Details</h5>

                    <div className="mb-3">
                        <div className="row align-items-start gx-3 gy-2">

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
                                            placeholder="Search by Policy cert/policy no, ID/Passport, Phone, Email"
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

                                                        setContactId(c.contact_id);
                                                        setPolicyNumber(c.policy_number);
                                                        setCertificateNumber(c.certificate_number);
                                                        setSelectedSearchContent(
                                                            [c.policy_number, c.certificate_number]
                                                                .filter(Boolean)
                                                                .join(' - ')
                                                        );
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f5f5f5"}
                                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}
                                                >
                                                    <span>
                                                        {c.policy_number} - {c.certificate_number}
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
                                onClick={(e) => handleSaveClaim(e)}
                            >Save</button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => resetState()}
                            >Reset</button>
                        </div>
                    </div>

                    <hr />

                    {/* <div className="d-flex justify-content-start mb-3">
                        <div className="">

                        </div>

                        <div className="">
                            <input id="claim_tag" type="text" className="form-control" placeholder="claim reference" />
                        </div>
                    </div> */}

                    <ClaimForm
                        claimReference={claimReference}
                        setClaimReference={setClaimReference}
                        paymentModeId={paymentModeId}
                        setPaymentModeId={setPaymentModeId}
                        claimDate={claimDate}
                        setClaimDate={setClaimDate}
                        paymentModes={paymentModes}
                        claimAction ={claimAction}
                        setClaimAction={setClaimAction}
                    />

                </div>
            </div>

            <NewImageFolder modalRefVar={modalRef} />
            <ClaimStatusModal ref={claimStatusModalRef} messageStatus={messageStatus} />
        </>
    );
}

export default withAuth(Page);