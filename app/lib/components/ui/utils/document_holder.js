'use client'

import Image from 'next/image';

export default function DocumentHolder() {
    return (
        <div className="col-sm-12 mt-3">


            <h6 className="tc-card-header">All added scanned copies</h6>
            <hr />

            <div className='row'>
                {/* Template */}
                <div className="col-sm-6">

                    <div className="card">
                        <div className="card-body">

                            <h6 className="card-subtitle mb-2 text-muted">Passport</h6>
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

                {/* Template */}
                <div className="col-sm-6">

                    <div className="card">
                        <div className="card-body">

                            <h6 className="card-subtitle mb-2 text-muted">KRA PIN</h6>
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
    )
}