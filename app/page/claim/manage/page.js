import DataPointModal from "../../../lib/utils/data_point_modal";
import Image from 'next/image';

export default function Page() {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Manage Claim Details</h5>



                <div>
                    <div className="row mb-2">
                        <div className="col-sm-6">Total Customers: 20</div>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Search customer" />
                        </div>
                    </div>

                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Country</th>
                                <th scope="col">County</th>
                                <th scope="col">Address</th>
                                <th scope="col">Lastest Policy Date</th>
                                <th scope="col">Total number of claims</th>
                                <th scope="col">Last Editor</th>
                                <th scope="col">Last Edited</th>
                                <th scope="col">Claim status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>#</td>
                                <td>Tom Lee</td>
                                <td>0700123789</td>
                                <td>tmlee@gmail.com</td>
                                <td>Kenya</td>
                                <td>Nakuru</td>
                                <td>First avenue shababa</td>
                                <td>2024-08-11</td>
                                <td>3</td>
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>New</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>Tom Lee</td>
                                <td>0700123789</td>
                                <td>tmlee@gmail.com</td>
                                <td>Kenya</td>
                                <td>Nakuru</td>
                                <td>First avenue shababa</td>
                                <td>2024-08-11</td>
                                <td>3</td>
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>In progress</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>Tom Lee</td>
                                <td>0700123789</td>
                                <td>tmlee@gmail.com</td>
                                <td>Kenya</td>
                                <td>Nakuru</td>
                                <td>First avenue shababa</td>
                                <td>2024-08-11</td>
                                <td>3</td>
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>Review</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>Tom Lee</td>
                                <td>0700123789</td>
                                <td>tmlee@gmail.com</td>
                                <td>Kenya</td>
                                <td>Nakuru</td>
                                <td>First avenue shababa</td>
                                <td>2024-08-11</td>
                                <td>3</td>
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>Cancelled</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>Tom Lee</td>
                                <td>0700123789</td>
                                <td>tmlee@gmail.com</td>
                                <td>Kenya</td>
                                <td>Nakuru</td>
                                <td>First avenue shababa</td>
                                <td>2024-08-11</td>
                                <td>3</td>
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>Obsolete</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>Tom Lee</td>
                                <td>0700123789</td>
                                <td>tmlee@gmail.com</td>
                                <td>Kenya</td>
                                <td>Nakuru</td>
                                <td>First avenue shababa</td>
                                <td>2024-08-11</td>
                                <td>3</td>
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>Paid</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>



                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Edit Tom Lee claim from date: 2024-08-11</h5>

                        <button type="button" style={{ marginBottom: "4px" }} className="btn btn-primary mb-3" data-bs-toggle="modal"
                            data-bs-target="#paneId">Add new field</button>

                        <form className="row g-3">
                            <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Tom Lee" />
                            </div>

                            <div className="col-md-4">
                                <select id="inputState" className="form-select">
                                    <option>Britam</option>
                                    <option>Old mutual</option>
                                    <option>Jubilee</option>
                                    <option>CIC</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <select id="inputState" className="form-select">
                                    <option>Fire/Bulgary</option>
                                    <option>Health</option>
                                    <option>Car</option>
                                    <option>Life insurance</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <select id="inputState" className="form-select">
                                    <option>Hill top garage</option>
                                    <option>Trimp garage</option>
                                    <option>Cargo auto garage</option>
                                    <option>One stop garage</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Nakuru west polic station" />
                            </div>

                            <div className="col-md-4">
                                <select id="inputState" className="form-select">
                                    <option>Cash in Lieu</option>
                                    <option>Company repair</option>

                                </select>
                            </div>

                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        Claim date: <input type="date" className="form-control" value="2024-09-11" />
                                    </div>
                                    <div className="col-md-4">
                                        <div>--</div>
                                        <select id="inputState" className="form-select">
                                            <option>Claim status...</option>
                                            <option>New</option>
                                            <option>In Progress</option>
                                            <option>Cancelled</option>
                                            <option>Paid</option>
                                        </select>
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
                                                    <div className="d-flex">
                                                        <button type="button" className="btn btn-primary me-2">Preview</button>
                                                        <button type="button" className="btn btn-secondary">Delete</button>
                                                    </div>
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
                                                    <div className="d-flex">
                                                        <button type="button" className="btn btn-primary me-2">Preview</button>
                                                        <button type="button" className="btn btn-secondary">Delete</button>
                                                    </div>
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
                                                    <div className="d-flex">
                                                        <button type="button" className="btn btn-primary me-2">Preview</button>
                                                        <button type="button" className="btn btn-secondary">Delete</button>
                                                    </div>
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
                                                    <div className="d-flex">
                                                        <button type="button" className="btn btn-primary me-2">Preview</button>
                                                        <button type="button" className="btn btn-secondary">Delete</button>
                                                    </div>
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
                                                    <div className="d-flex">
                                                        <button type="button" className="btn btn-primary me-2">Preview</button>
                                                        <button type="button" className="btn btn-secondary">Delete</button>
                                                    </div>
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
                                                    <div className="d-flex">
                                                        <button type="button" className="btn btn-primary me-2">Preview</button>
                                                        <button type="button" className="btn btn-secondary">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Template */}

                                    </div>



                                </div>
                            </div>


                            <div className="text-center mb-3">
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary me-2">Update</button>
                                    <button className="btn btn-secondary">Cancel</button>
                                </div>
                            </div>
                            <hr />
                        </form>

                    </div>
                </div>
                {/* Modal */}
                <DataPointModal />

            </div>
        </div>
    );
}