'use client';

import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import NewImageFolder from "../../../lib/utils/new_image_folder";
import withAuth from "../../../lib/service/with_auth";

import { fetchSearchedProposals } from "../../../lib/service/model";

const Page = () => {

    const modalRef = useRef(null);

    const [searchText, setSearchText] = useState('');
    const [searchedContent, setSearchedContent] = useState([]);
    const [selectedSearchContent, setSelectedSearchContent] = useState('');
    //setReferenceNumber
    const [referenceNumber, setReferenceNumber] = useState('policy reference number');

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
                <h1>CRM</h1>
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
                                            placeholder="Search by Ref No, ID/Passport, Phone, Email"
                                            aria-label="Search"
                                            aria-describedby="search-icon"
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
                                                        console.log(c);

                                                        setReferenceNumber(c.reference_number);
                                                        // setThirdName(c.last_name);
                                                        // setPhoneNumber(c.phone);
                                                        // setSearchedContactId(c.id);
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

                        <div className="col-12 d-flex mt-3">
                            <button className="btn btn-primary me-2">Save</button>
                            <button className="btn btn-secondary">Reset</button>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-start mb-3">
                        <div className="">

                        </div>

                        <div className="">
                            <label id="policy_tag" className="form-control">{referenceNumber === 'policy reference number' ? 'policy ref #' : `policy ref number: ${referenceNumber}`}</label>
                        </div>
                    </div>

                    <form className="row g-3">

                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-md-3">
                                    <label htmlFor="name">Policy No:</label>
                                    <input id="name" type="text" className="form-control" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="phone">Certificate No:</label>
                                    <input id="phone" type="text" className="form-control" />
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
                                    <select id="policy" className="form-select">
                                        <option defaultValue>None...</option>
                                        <option>ID/Passort</option>
                                        <option>Proposal</option>
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

                    </form>

                    <hr />

                    <div className="row">

                        <div className="col-sm-12">

                            <h6 className="tc-card-header">All added scanned copies</h6>

                            <div className='row'>
                                {/* Template */}
                                <div className="col-sm-6">

                                    <div className="card">
                                        <div className="card-body">

                                            <h6 className="card-subtitle mt-2 text-muted">Policy</h6>
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


                                {/* Template */}
                                <div className="col-sm-6">

                                    <div className="card">
                                        <div className="card-body">

                                            <h6 className="card-subtitle mt-2 text-muted">Cetificate</h6>
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

                    <div className="row">
                        <div className="text-center mb-3">
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary me-2">Save</button>
                                <button className="btn btn-secondary">Cancel</button>
                            </div>
                        </div>
                    </div>

                    {/* Modal */}


                </div>
            </div>
            <NewImageFolder modalRefVar={modalRef} />
        </>
    );
}

export default withAuth(Page);