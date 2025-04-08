"use client"

import Image from 'next/image';
import CustomerForm from "../crm/contact/customer_form";
import withAuth from "../../lib/service/with_auth";

const Page = (
    {
        proposalAction,
        firstName, setFirstName,
        secondName, setSecondName,
        thirdName, setThirdName,
        phoneNumber, setPhoneNumber,
        email, setEmail,
        gender, setGender,
        address, setAddress,
        countryCode, setCountryCode,
        administrativeArea, setAdministrativeArea,
        customerGroup, setCustomerGroup,
        kraPin, setKraPin,
        identificationCardId, setIdentificationCardId,
        insuranceCompanyId, policyId,
        startDate, endDate,
        proposalDocuments, setProposalDocuments,
        setInsuranceCompanyId, setPolicyId,
        setStartDate, setEndDate,
        insuranceCompanies, setInsuranceCompanies,
        documentTypes, setDocumentTypes,
        policies, setPolicies,
        customerState, setCutomerState,
        saveProposal
    }
) => {
    return (
        <>
            <form className="row g-3">
                {
                    customerState === "new" ?
                        <>
                            <CustomerForm
                                action={"add"}
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
                            <label htmlFor="insurance">Select insurance:</label>
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
                            <label htmlFor="policy">Select policy:</label>
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
                        <button onClick={(e) => saveProposal(e)} className="btn btn-primary me-2"> {
                            proposalAction === "add" ? "Save" : "Update"
                        } </button>
                        <button className="btn btn-secondary">Cancel</button>
                    </div>
                </div>
                <hr />
            </form>
        </>
    )
};

export default withAuth(Page);