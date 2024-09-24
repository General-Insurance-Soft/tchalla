import DataPointModal from "../../../lib/utils/data_point_modal";
import Image from 'next/image';

export default function Page() {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Capture Claim Details</h5>

                <button type="button" style={{ marginBottom: "4px" }} className="btn btn-primary mb-3" data-bs-toggle="modal"
                    data-bs-target="#paneId">Add new field</button>

                <form className="row g-3">
                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Search customer" />
                    </div>

                    <div className="col-md-4">
                        <select id="inputState" className="form-select">
                            <option defaultValue>Select insurance...</option>
                            <option>Britam</option>
                            <option>Old mutual</option>
                            <option>Jubilee</option>
                            <option>CIC</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <select id="inputState" className="form-select">
                            <option defaultValue>Select policy type...</option>
                            <option>Fire/Bulgary</option>
                            <option>Health</option>
                            <option>Car</option>
                            <option>Life insurance</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <select id="inputState" className="form-select">
                            <option defaultValue>Select garage...</option>
                            <option>Hill top garage</option>
                            <option>Trimp garage</option>
                            <option>Cargo auto garage</option>
                            <option>One stop garage</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Police station" />
                    </div>

                    <div className="col-md-4">
                        <select id="inputState" className="form-select">
                            <option defaultValue>Payment options...</option>
                            <option>Cash in Lieu</option>
                            <option>Company repair</option>

                        </select>
                    </div>

                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                Claim date: <input type="date" className="form-control" placeholder="Claim date" />
                            </div>
                        </div>
                    </div>


                    <div className="col-md-2">
                        <label for="img">Select Scanned copies:</label>
                    </div>
                    <div className="col-md-4">
                        <input type="file" id="img" name="img" accept="image/*" className="form-control" />
                    </div>
                    <div className="col-md-5">
                        <input type="text" className="form-control" placeholder="Scanned copy name" />
                    </div>
                    <div className="col-md-1">
                        <button type="button" className="btn btn-primary">Add image</button>
                    </div>



                    <div className="row mt-3">

                        <div className="col-sm-12">

                            <div className="card">
                                <div className="card-body">
                                    <h6 className="tc-card-header">All added scanned copies</h6>
                                    <hr />

                                    <div className='row'>
                                        {/* Template */}
                                        <div className="col-sm-6">

                                            <div className="card">
                                                <div className="card-body">

                                                    <h6 class="card-subtitle mb-2 text-muted">Claim form</h6>
                                                    <Image
                                                        src="/img/receipt_template.jpg"
                                                        // layout="responsive"
                                                        width={200}  // Aspect ratio width
                                                        height={400}  // Aspect ratio height
                                                        className="card-img-top"
                                                        alt="receipt template"
                                                    />
                                                    <hr />
                                                    <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                                        <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                                        <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Template */}


                                        {/* Template */}
                                        <div className="col-sm-6">

                                            <div className="card">
                                                <div className="card-body">

                                                    <h6 class="card-subtitle mb-2 text-muted">National ID</h6>
                                                    <Image
                                                        src="/img/receipt_template.jpg"
                                                        // layout="responsive"
                                                        width={200}  // Aspect ratio width
                                                        height={400}  // Aspect ratio height
                                                        className="card-img-top"
                                                        alt="receipt template"
                                                    />
                                                    <hr />
                                                    <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                                        <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                                        <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Template */}


                                        {/* Template */}
                                        <div className="col-sm-6">

                                            <div className="card">
                                                <div className="card-body">

                                                    <h6 class="card-subtitle mb-2 text-muted">KRA Pin</h6>
                                                    <Image
                                                        src="/img/receipt_template.jpg"
                                                        // layout="responsive"
                                                        width={200}  // Aspect ratio width
                                                        height={400}  // Aspect ratio height
                                                        className="card-img-top"
                                                        alt="receipt template"
                                                    />
                                                    <hr />
                                                    <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                                        <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                                        <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Template */}


                                        {/* Template */}
                                        <div className="col-sm-6">

                                            <div className="card">
                                                <div className="card-body">

                                                    <h6 class="card-subtitle mb-2 text-muted">Accident image 1</h6>
                                                    <Image
                                                        src="/img/receipt_template.jpg"
                                                        // layout="responsive"
                                                        width={200}  // Aspect ratio width
                                                        height={400}  // Aspect ratio height
                                                        className="card-img-top"
                                                        alt="receipt template"
                                                    />
                                                    <hr />
                                                    <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                                        <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                                        <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Template */}

                                        {/* Template */}
                                        <div className="col-sm-6">

                                            <div className="card">
                                                <div className="card-body">

                                                    <h6 class="card-subtitle mb-2 text-muted">Accident image 2</h6>
                                                    <Image
                                                        src="/img/receipt_template.jpg"
                                                        // layout="responsive"
                                                        width={200}  // Aspect ratio width
                                                        height={400}  // Aspect ratio height
                                                        className="card-img-top"
                                                        alt="receipt template"
                                                    />
                                                    <hr />
                                                    <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                                        <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                                        <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Template */}

                                        {/* Template */}
                                        <div className="col-sm-6">

                                            <div className="card">
                                                <div className="card-body">

                                                    <h6 class="card-subtitle mb-2 text-muted">Accident image 3</h6>
                                                    <Image
                                                        src="/img/receipt_template.jpg"
                                                        // layout="responsive"
                                                        width={200}  // Aspect ratio width
                                                        height={400}  // Aspect ratio height
                                                        className="card-img-top"
                                                        alt="receipt template"
                                                    />
                                                    <hr />
                                                    <button type="button" className="btn btn-primary me-2"><i class="bi bi-eye-fill"></i></button>
                                                        <button type="button" className="btn btn-info me-2"><i class="bi bi-download"></i></button>
                                                        <button type="button" className="btn btn-secondary"><i class="bi bi-trash3-fill"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Template */}

                                    </div>

                                </div>
                            </div>
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

                {/* Modal */}
                <DataPointModal />

            </div>
        </div>
    );
}