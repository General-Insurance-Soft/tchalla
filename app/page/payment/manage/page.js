export default function Page() {
    return (
        <>

            <div className="pagetitle">
                <h1>Pyaments</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">Payment</a></li>
                        <li className="breadcrumb-item active">Manage</li>
                    </ol>
                </nav>
            </div>

            <div className="card">
                <div className="card-body">

                    <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                        <li className="nav-item flex-fill" role="presentation">
                            <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-payment" type="button" role="tab" aria-controls="payment" aria-selected="true">Transactions</button>
                        </li>
                        <li className="nav-item flex-fill" role="presentation">
                            <button className="nav-link w-100" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-schedule" type="button" role="tab" aria-controls="payment2" aria-selected="false">payment2</button>
                        </li>

                    </ul>

                    <div className="tab-content pt-2" id="borderedTabJustifiedContent">

                        <div className="tab-pane fade show active" id="bordered-justified-payment" role="tabpanel" aria-labelledby="payment-tab">
                            {/* payment list */}

                            <div className="card">
                                <div className="card-body">
                                    {/* <h5 className="card-title">Capture policy Details</h5> */}

                                    <div>
                                        <div className="row mb-2  mt-5">
                                            <div className="col-md-6 d-flex">
                                                From: <input type="date" className="form-control me-2" placeholder="From: " />
                                                To: <input type="date" className="form-control" placeholder="To: " />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Search by name, phone, ID/Passport" />
                                            </div>
                                        </div>

                                        <table className="table table-striped table-bordere">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Ref No.</th>
                                                    <th scope="col">Mode</th>
                                                    <th scope="col">Paid by</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Country</th>
                                                    <th scope="col">County</th>
                                                    <th scope="col">Address</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">SMS Sent</th>
                                                    <th scope="col">Last Editor</th>
                                                    <th scope="col">Last Edited</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <td>#AMJR201HR</td>
                                                    <td>Mpesa</td>
                                                    <td>Tom Lee</td>
                                                    <td>0700123789</td>
                                                    <td>tmlee@gmail.com</td>
                                                    <td>Kenya</td>
                                                    <td>Nakuru</td>
                                                    <td>River bed</td>
                                                    <td>30,000</td>
                                                    <td>2024-08-11</td>
                                                    <td>Yes</td>
                                                    <td>Lucy</td>
                                                    <td>2024-08-11</td>
                                                    <td>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-success" ><i className="bi bi-binoculars-fill"></i></button>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                                        <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#AMRR79801HR</td>
                                                    <td>Bank</td>
                                                    <td>Caroling Kate</td>
                                                    <td>0700123789</td>
                                                    <td>jhnlee@gmail.com</td>
                                                    <td>Kenya</td>
                                                    <td>Nakuru</td>
                                                    <td>First avenue shababa</td>
                                                    <td>40,000</td>
                                                    <td>2024-08-11</td>
                                                    <td>No</td>
                                                    <td>Tony</td>
                                                    <td>2024-08-11</td>
                                                    <td>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-success" ><i className="bi bi-binoculars-fill"></i></button>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                                        <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#ADDD201HR</td>
                                                    <td>Mpesa</td>
                                                    <td>Martinf H</td>
                                                    <td>0700123789</td>
                                                    <td>tmlee@gmail.com</td>
                                                    <td>Kenya</td>
                                                    <td>Nakuru</td>
                                                    <td>First avenue shababa</td>
                                                    <td>30,000</td>
                                                    <td>2024-08-11</td>
                                                    <td>Yes</td>
                                                    <td>Lucy</td>
                                                    <td>2024-08-11</td>
                                                    <td>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-success" ><i className="bi bi-binoculars-fill"></i></button>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                                        <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#RGES201HR</td>
                                                    <td>Mpesa</td>
                                                    <td>Dan tO</td>
                                                    <td>0700123789</td>
                                                    <td>tmlee@gmail.com</td>
                                                    <td>Kenya</td>
                                                    <td>Nakuru</td>
                                                    <td>Nong</td>
                                                    <td>30,000</td>
                                                    <td>2024-08-11</td>
                                                    <td>Yes</td>
                                                    <td>Lucy</td>
                                                    <td>2024-08-11</td>
                                                    <td>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-success" ><i className="bi bi-binoculars-fill"></i></button>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                                        <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#RFEDS1HR</td>
                                                    <td>Mpesa</td>
                                                    <td>Paul Kil</td>
                                                    <td>0700123789</td>
                                                    <td>tmlee@gmail.com</td>
                                                    <td>Kenya</td>
                                                    <td>Nakuru</td>
                                                    <td>Lavington</td>
                                                    <td>30,000</td>
                                                    <td>2024-08-11</td>
                                                    <td>Yes</td>
                                                    <td>Lucy</td>
                                                    <td>2024-08-11</td>
                                                    <td>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-success" ><i className="bi bi-binoculars-fill"></i></button>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                                        <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#DDSDS01HR</td>
                                                    <td>Bank</td>
                                                    <td>Joe D Lee</td>
                                                    <td>0700123789</td>
                                                    <td>tmlee@gmail.com</td>
                                                    <td>Kenya</td>
                                                    <td>Nakuru</td>
                                                    <td>River side</td>
                                                    <td>30,000</td>
                                                    <td>2024-08-11</td>
                                                    <td>Yes</td>
                                                    <td>Lucy</td>
                                                    <td>2024-08-11</td>
                                                    <td>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-success" ><i className="bi bi-binoculars-fill"></i></button>
                                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                                                        <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="bordered-justified-payment2" role="tabpanel" aria-labelledby="payment-tab">
                            <div className="card">
                                <div className="card-body">
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>

    );
}