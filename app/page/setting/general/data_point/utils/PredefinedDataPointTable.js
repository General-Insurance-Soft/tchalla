export default function PredefinedTable(tableData) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Predefined Datapoints</h5>

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Last Editor</th>
                            <th scope="col">Last Edited</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>First Name</td>
                            <td>String/Word</td>
                            <td>System</td>
                            <td>2016-05-25</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Second Name</td>
                            <td>String/Word</td>
                            <td>System</td>
                            <td>2016-05-25</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Date of Birth</td>
                            <td>Date</td>
                            <td>System</td>
                            <td>2016-05-25</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Location</td>
                            <td>List</td>
                            <td>System</td>
                            <td>2016-05-25</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Phone Number</td>
                            <td>Number</td>
                            <td>System</td>
                            <td>2016-05-25</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Gender</td>
                            <td>Choice</td>
                            <td>System</td>
                            <td>2016-05-25</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}