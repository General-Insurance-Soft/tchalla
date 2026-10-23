"use client"

import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import CustomerForm from "../crm/contact/customer_form";
import withAuth from "../../lib/service/with_auth";
import { handleFileRename } from '../../lib/utils/util';

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
        setShowEditForm,
        selectedFiles, setSelectedFiles,
        policyFiles, setPolicyFiles,
        previews, setPreviews, deleteDocumentFile
    }
) => {

    let [currentUploadedFile, setCurrentUploadedFile] = useState(null);
    let [currentUploadedFileName, setCurrentUploadedFileName] = useState(null);
    let [currentUploadedFileType, setCurrentUploadedFileType] = useState(null);

    const fileUploaderInputRef = useRef(null);

    useEffect(() => {
        return () => {
            previews.forEach(p => URL.revokeObjectURL(p.url));
        };
    }, [previews]);

    let addFileToPolicyFilesArray = async () => {
        if (!currentUploadedFile) return;

        let filesArray = Array.from(policyFiles);

        let fName =
            "name:" + currentUploadedFileName +
            "-type:" + currentUploadedFileType;

        let renamedFile = handleFileRename(currentUploadedFile, fName);

        filesArray.push(renamedFile);
        setPolicyFiles(filesArray);

        const fileUrl = URL.createObjectURL(currentUploadedFile);

        setPreviews(prev => [
            ...prev,
            {
                url: fileUrl,
                type: currentUploadedFile.type,
                name: currentUploadedFileName
            }
        ]);

        // Reset file input
        setCurrentUploadedFile(null);
        setCurrentUploadedFileName("");
        setCurrentUploadedFileType(1);
        // document.querySelector('input[type="file"]').value = null;

        if (fileUploaderInputRef.current) {
            fileUploaderInputRef.current.value = null;
        }


    };

    const removePreview = (e, index) => {
        e.preventDefault();
        console.log("To delete file with name:", previews[index].name);
        setPolicyFiles(prev => prev.filter((_, i) => i !== index));
        setPreviews(prev => prev.filter((_, i) => i !== index));
        console.log("removing file, size now:", previews.length);
    };

    const handleDownload = (e, url) => {
        e.preventDefault();

        window.open(url, "_blank", "noopener,noreferrer");
    };



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

                <div className="row mt-3">

                    <div className="col-sm-12">

                        <h6 className="tc-card-header">Scanned file copies</h6>
                        <hr />

                        <div className='row'>
                            <div className="col-sm-12 mb-3">
                                <div className="row">
                                    <div className="col-md-3">

                                        <label htmlFor="img">Select file/image:</label>
                                        <input
                                            type="file"
                                            name="img"
                                            accept="image/*,application/pdf"
                                            className="form-control"
                                            ref={fileUploaderInputRef}
                                            onChange={
                                                (e) => {
                                                    setCurrentUploadedFile(e.target.files[0]);
                                                }
                                            }
                                        />

                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="copyName">Document type:</label>
                                        <select id="document-type" className="form-select"
                                            value={currentUploadedFileType}
                                            onChange={(e) => (
                                                setCurrentUploadedFileType(
                                                    e.target.value
                                                )
                                            )

                                            }
                                        >

                                            {/* <option defaultValue>None...</option> */}

                                            {Array.isArray(documentTypes) && documentTypes.map((doc) => (
                                                <option key={doc.id} value={doc.id}>
                                                    {doc.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {/* <div className="col-md-3">
                                                            <label htmlFor="copyName">Select folder:</label>
                                                            <select onChange={(event) => creatNewImageFolder(event)} id="policy" className="form-select">
                                                                <option>Default</option>
                                                                <option role="separator" disabled="disabled">─────────────────────────</option>
                                                                <option value="new folder">Create New</option>
                                                            </select>
                                                            </div> */}
                                    <div className="col-md-3">
                                        <label htmlFor="documentName">Document name:</label>
                                        <input id="documentName" type="text"
                                            className="form-control"
                                            onChange={(e) => setCurrentUploadedFileName(e.target.value)}
                                            value={currentUploadedFileName}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 mb-4">
                                <div className="col-md-3">
                                    <button type="button" className="btn btn-info mt-2 mt-md-0"
                                        onClick={() => addFileToPolicyFilesArray()}
                                    >
                                        Add image
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            {/* Template */}
                            <div className="row">


                                {policyAction == "edit" &&
                                    selectedPolicy.policy_documents.map((file, index) => (
                                        <div className="col-sm-6" key={file.id || index}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        {file.document_name}
                                                    </h6>
                                                    {
                                                        // if file.blob_url == pdf = url.split('.').pop().toLowerCase();
                                                        file.extension.toLowerCase() === "pdf" ?
                                                            <Image
                                                                src="/img/file_thum.webp"
                                                                width={200}  // Aspect ratio width
                                                                height={300}  // Aspect ratio height
                                                                className="card-img-top"
                                                                alt="pdf preview"
                                                            /> :
                                                            <Image
                                                                src="/img/img_thumbnail.svg"
                                                                width={200}  // Aspect ratio width
                                                                height={300}  // Aspect ratio height
                                                                className="card-img-top"
                                                                alt="image preview"
                                                            />
                                                    }

                                                    <hr />
                                                    <div className="d-flex justify-content-center gap-2">
                                                        <button className="btn btn-primary me-2"
                                                            onClick={(e) => handleDownload(e, file.blob_url)}>
                                                            <i className="bi bi-download"></i>
                                                        </button>
                                                        <button
                                                            className="btn btn-secondary"
                                                            onClick={(e) => deleteDocumentFile(e, file.id)}
                                                        >
                                                            <i className="bi bi-trash3-fill"></i>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                                {previews && previews.map((file, index) => (
                                    <div className="col-sm-6" key={index}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h6 className="card-subtitle mb-2 text-muted">
                                                    {file.name}
                                                </h6>

                                                {/* Image preview */}
                                                {file.type.startsWith("image/") && (
                                                    <img
                                                        src={file.url}
                                                        alt="image preview"
                                                        style={{ width: "100%", height: "300px", marginTop: 10 }}
                                                    />
                                                )}

                                                {/* PDF preview */}
                                                {file.type === "application/pdf" && (
                                                    <iframe
                                                        src={`${file.url}#toolbar=0&navpanes=0&scrollbar=0`}
                                                        width="100%"
                                                        height="300px"
                                                        title="pdf preview"
                                                    />
                                                )}

                                                <hr />

                                                {/* Centered buttons */}
                                                <div className="d-flex justify-content-center gap-2">
                                                    <button
                                                        className="btn btn-secondary"
                                                        onClick={(e) => removePreview(e, index)}
                                                    >
                                                        <i className="bi bi-trash3-fill"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Template */}

                        </div>

                    </div>
                </div>

            </form>
        </>
    )
};

export default withAuth(Page);