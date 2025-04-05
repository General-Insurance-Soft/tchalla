import Image from 'next/image';

export default function PaymentSetting() {
    return (
        <>
            <div style={{ marginTop: "10px" }} className="row">
                {/* Notification settings */}

                <div className="col-xl-6">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="tc-card-header">Notifications</h6>
                            <hr />
                            <form>
                                <div className="row mb-3">
                                    <labelhtmlFor="#" className="col-sm-9 col-form-label">Send SMS to client when payments are received?</label>
                                    <div className="col-sm-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="sendPaymentSms" />
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* end Notification settings */}
            </div>

            {/* Receipt template settings */}
            <div className="row">

                <div className="col-sm-12">

                    <div className="card">
                        <div className="card-body">
                            <h6 className="tc-card-header">Choose Receipt template to use</h6>
                            <hr />

                            <div className='row'>
                                {/* Template */}
                                <div className="col-sm-6">

                                    <div className="card">
                                        <div className="card-body">

                                            <h6 className="card-subtitle mb-2 text-muted">Template #</h6>
                                            <Image
                                                src="/img/receipt_template.jpg"
                                                // layout="responsive"
                                                width={200}  // Aspect ratio width
                                                height={400}  // Aspect ratio height
                                                className="card-img-top"
                                                alt="receipt template"
                                            />
                                            <hr />
                                            <p className="card-text"><a className="btn btn-primary">Preview</a></p>
                                        </div>
                                    </div>
                                </div>
                                {/* Template */}

                                {/* Template */}
                                <div className="col-sm-6">

                                    <div className="card">
                                        <div className="card-body">

                                            <h6 className="card-subtitle mb-2 text-muted">Template #</h6>
                                            <Image
                                                src="/img/receipt_template.jpg"
                                                // layout="responsive"
                                                width={200}  // Aspect ratio width
                                                height={400}  // Aspect ratio height
                                                className="card-img-top"
                                                alt="receipt template"
                                            />
                                            <hr />
                                            <p className="card-text"><a className="btn btn-primary">Preview</a></p>
                                        </div>
                                    </div>
                                </div>
                                {/* Template */}


                                {/* Template */}
                                <div className="col-sm-6">

                                    <div className="card">
                                        <div className="card-body">

                                            <h6 className="card-subtitle mb-2 text-muted">Template #</h6>
                                            <Image
                                                src="/img/receipt_template.jpg"
                                                // layout="responsive"
                                                width={200}  // Aspect ratio width
                                                height={400}  // Aspect ratio height
                                                className="card-img-top"
                                                alt="receipt template"
                                            />
                                            <hr />
                                            <p className="card-text"><a className="btn btn-primary">Preview</a></p>
                                        </div>
                                    </div>
                                </div>
                                {/* Template */}


                                {/* Template */}
                                <div className="col-sm-6">

                                    <div className="card">
                                        <div className="card-body">

                                            <h6 className="card-subtitle mb-2 text-muted">Template #</h6>
                                            <Image
                                                src="/img/receipt_template.jpg"
                                                // layout="responsive"
                                                width={200}  // Aspect ratio width
                                                height={400}  // Aspect ratio height
                                                className="card-img-top"
                                                alt="receipt template"
                                            />
                                            <hr />
                                            <p className="card-text"><a className="btn btn-primary">Preview</a></p>
                                        </div>
                                    </div>
                                </div>
                                {/* Template */}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* End receipt template settings */}

        </>
    );
}
