import Image from 'next/image';

export default function CustomerForm({ action }) {
    return (
        <>
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <button type="button" className="btn btn-primary mb-3" data-bs-toggle="modal"
                        data-bs-target="#paneId">Add new field</button>
                </div>

                <div>
                    <button class="btn btn-primary me-2">{action === 'edit' ? 'Update' : 'Save'}</button>
                    <button class="btn btn-secondary">Cancel</button>
                </div>
            </div>

            <form className="row g-3">
                <div className="col-md-4">

                    {action === "add" ?
                        <input type="text" className="form-control" placeholder="First Name" />
                        :
                        <input type="text" className="form-control" placeholder="Tom" />
                    }

                </div>
                <div className="col-md-4">

                    {action === "add" ?
                        <input type="text" className="form-control" placeholder="Second Name" />
                        :
                        <input type="text" className="form-control" placeholder="Lopy" />
                    }

                </div>
                <div className="col-md-4">

                    {action === "add" ?
                        <input type="text" className="form-control" placeholder="Third Name" />
                        :
                        <input type="text" className="form-control" placeholder="Lee" />
                    }

                </div>
                <div className="col-md-4">
                    {action === "add" ?
                        <input type="text" className="form-control" placeholder="Phone Number" />
                        :
                        <input type="text" className="form-control" placeholder="07200200200" />
                    }
                </div>
                <div className="col-md-4">

                    {action === "add" ?
                        <input type="email" className="form-control" placeholder="Email" />
                        :
                        <input type="email" className="form-control" placeholder="email@gmail.com" />
                    }
                </div>
                <div className="col-md-4">
                    <select id="inputState" className="form-select">
                        {action === "add" ? [<option defaultValue>Gender...</option>, <option>Male</option>] : <option>Male</option>}
                        <option>Female</option>
                    </select>
                </div>
                <div className="col-md-4">

                    {action === "add" ?
                        <input type="text" className="form-control" placeholder="Address" />
                        :
                        <input type="text" className="form-control" placeholder="First avenue shababa" />
                    }

                </div>
                <div className="col-md-4">
                    <select id="inputState" className="form-select">
                        {action === "add" ? [<option defaultValue>Country...</option>, <option>Kenya</option>] : <option>Kenya</option>}
                        <option>Uganda</option>
                        <option>Zambia</option>
                        <option>Rwanda</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <select id="inputState" className="form-select">

                        {action === "add" ? [<option defaultValue>County...</option>, <option>Nakuru</option>] : <option>Nakuru</option>}

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
                        <button className="btn btn-primary me-2">{action === 'edit' ? 'Update' : 'Save'}</button>
                        <button className="btn btn-secondary">Cancel</button>
                    </div>
                </div>
                <hr />
            </form>
        </>
    );
}
