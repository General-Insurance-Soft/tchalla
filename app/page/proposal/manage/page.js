export default function Page() {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Manage Proposal Details</h5>
                <div>
                    <h5 className="card-title">Manage Customers</h5>
                    <div className="row mb-2">
                        <div className="col-sm-6">Total Customers: 600</div>
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
                                <th scope="col">Last Editor</th>
                                <th scope="col">Last Edited</th>
                                <th scope="col">Total number of proposals</th>
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
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>3</td>

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
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>3</td>
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
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>3</td>
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
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>3</td>
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
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>3</td>
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
                                <td>Lucy</td>
                                <td>2024-09-11</td>
                                <td>3</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}