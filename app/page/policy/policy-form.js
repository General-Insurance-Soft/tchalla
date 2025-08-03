"use client"

import Image from 'next/image';
import CustomerForm from "../crm/contact/customer_form";
import withAuth from "../../lib/service/with_auth";

const Page = (
    {
        policyAction, selectedPolicy,
        certificateNumber, setCertificateNumber,
        startDate, endDate,
        policyDocuments, setPolicyDocuments,
        setStartDate, setEndDate,
        insuranceCompanies,
        documentTypes,
        policies,
        policyNumber, setPolicyNumber,
        policyTypeId, setPolicyTypeId,
        setShowEditForm
    }
) => {
    return (
        <>
            <form className="row g-3">

                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="policy_no">Policy No:</label>
                            <input
                                id="policy_no"
                                type="text"
                                value={policyNumber}
                                className="form-control"
                                onChange={(e) => setPolicyNumber(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="certificate_no">Certificate No:</label>
                            <input
                                id="certificate_no"
                                type="text"
                                className="form-control"
                                value={certificateNumber}
                                onChange={(e) => setCertificateNumber(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="copyName">Policy type:</label>
                            <select id="document-type" value={policyTypeId} className="form-select"
                                onChange={
                                    (e) => {
                                        setPolicyTypeId(e.target.value);
                                    }
                                }
                            >
                                {policyAction != "edit" ?
                                    <option defaultValue>None...</option> : ""
                                }
                                {Array.isArray(policies) && policies.map((policy) => (
                                    <option key={policy.id} value={policy.id}>
                                        {policy.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="start_date">Start date:</label>
                            <input value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                id="start_date" type="date"
                                className="form-control"
                                placeholder="Start date" />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="end_date">End date:</label>
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
                            <select id="document-type" className="form-select"
                                onChange={() => (
                                    setPolicyDocuments([
                                        {
                                            "folder_name": "folder_one",
                                            "document_name": "passport",
                                            "blob_url": "http://vvv.vvv.vvv.vvvvvvvvvvvvvvvvvvvvv"
                                        }
                                    ])
                                )

                                }
                            >
                                {policyAction != "edit" ?
                                    <option defaultValue>None...</option> : ""
                                }
                                {Array.isArray(documentTypes) && documentTypes.map((doc) => (
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

        </>
    )
};

export default withAuth(Page);