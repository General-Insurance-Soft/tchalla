export default function CustomDataPointTable() {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Custom Datapoints</h5>

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Last Editor</th>
                            <th scope="col">Last Edited</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Status</td>
                            <td>Choice</td>
                            <td>Tom</td>
                            <td>2016-05-25</td>
                            <td>2016-05-25</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Religion</td>
                            <td>List</td>
                            <td>Edward</td>
                            <td>2016-05-25</td>
                            <td>
                                <button type="button" style={{ marginRight: "10px" }} className="btn btn-info"><i className="bi bi-pencil-square"></i></button>
                                <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Home Address</td>
                            <td>String/Word</td>
                            <td>Nancy</td>
                            <td>2016-05-25</td>
                            <td>
                                <button type="button" style={{ marginRight: "10px" }} className="btn btn-info"><i className="bi bi-pencil-square"></i></button>
                                <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Dependants</td>
                            <td>Number</td>
                            <td>Edward</td>
                            <td>2016-05-25</td>
                            <td>
                                <button type="button" style={{ marginRight: "10px" }} className="btn btn-info"><i className="bi bi-pencil-square"></i></button>
                                <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>First Name</td>
                            <td>String/Word</td>
                            <td>Edward</td>
                            <td>2016-05-25</td>
                            <td>
                                <button type="button" style={{ marginRight: "10px" }} className="btn btn-info"><i className="bi bi-pencil-square"></i></button>
                                <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}