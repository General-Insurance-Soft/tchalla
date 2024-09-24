import Image from 'next/image';

export default function CustomerForm() {
    return (
        <>
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <button type="button" className="btn btn-primary mb-3" data-bs-toggle="modal"
                        data-bs-target="#paneId">Add new field</button>
                </div>

                <div>
                    <button class="btn btn-primary me-2">Save</button>
                    <button class="btn btn-secondary">Cancel</button>
                </div>
            </div>

            <form className="row g-3">
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Second Name" />
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Third Name" />
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
                <div className="col-md-4">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="col-md-4">
                    <select id="inputState" className="form-select">
                        <option defaultValue>Gender...</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Address" />
                </div>
                <div className="col-md-4">
                    <select id="inputState" className="form-select">
                        <option defaultValue>Country...</option>
                        <option>Kenya</option>
                        <option>Uganda</option>
                        <option>Zambia</option>
                        <option>Rwanda</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <select id="inputState" className="form-select">
                        <option defaultValue>County...</option>
                        <option>Nakuru</option>
                        <option>Kericho</option>
                        <option>Mombasa</option>
                        <option>Nairobi</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label for="img">Select passport/ID image:</label>
                    <input type="file" id="img" name="img" accept="image/*" className="form-control" />
                </div>

                <div className="col-md-4">
                    <label for="img2">Select KRA pin:</label>
                    <input type="file" id="img2" name="img" accept="image/*" className="form-control" />
                </div>



                <div className="col-sm-12">


                    <h6 className="tc-card-header">All added scanned copies</h6>
                    <hr />

                    <div className='row'>
                        {/* Template */}
                        <div className="col-sm-6">

                            <div className="card">
                                <div className="card-body">

                                    <h6 class="card-subtitle mb-2 text-muted">Passport</h6>
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
                                        <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                        <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                        <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Template */}

                        {/* Template */}
                        <div className="col-sm-6">

                            <div className="card">
                                <div className="card-body">

                                    <h6 class="card-subtitle mb-2 text-muted">KRA PIN</h6>
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
                                        <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                        <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                        <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Template */}
                    </div>
                </div>

                <div className="text-center mb-3">
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary me-2">Save</button>
                        <button className="btn btn-secondary">Cancel</button>
                    </div>
                </div>
                <hr />
            </form>
        </>
    );
}
