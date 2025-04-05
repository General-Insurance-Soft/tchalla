const ScheduleSmsTblContent =
    <>
        <thead>
            <tr>
                <th scope="col">Tag</th>
                <th scope="col">Schdule Name</th>
                <th style={{ width: "250px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} scope="col">SMS</th>
                <th scope="col">Start date</th>
                <th scope="col">End date</th>
                <th scope="col">Delivery Rate</th>
                <th scope="col">Open Rate</th>
                <th scope="col">Satus</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><a href="#">#2059</a></th>
                <td>Schdule name 1</td>
                <td>Dear [first_name], thank you for being a dear member</td>
                <td>2024-10-01 10:00</td>
                <td>2024-10-02 11:08</td>
                <td>50% (250/500)</td>
                <td><span className="badge bg-info text-dark"><i className="bi bi-info-circle me-1"></i> 60%</span></td>
                <td><span className="badge bg-dark">In Progress</span></td>
                <td>
                    <button className="btn btn-sm btn-primary me-1"><i className="bi bi-eye"></i></button>
                    <button className="btn btn-sm btn-warning"><i className="bi bi-x-lg"></i></button>
                </td>
            </tr>
            <tr>
                <th scope="row"><a href="#">#2089</a></th>
                <td>Schdule name 2</td>
                <td>Dear [first_name], thank you for being a dear member</td>
                <td>2024-10-01 10:00</td>
                <td>2024-10-02 11:08</td>
                <td>90% (100/110)</td>
                <td><span className="badge bg-info text-dark"><i className="bi bi-info-circle me-1"></i> 85%</span></td>
                <td><span className="badge bg-success">Completed</span></td>
                <td>
                    <button className="btn btn-sm btn-primary me-1"><i className="bi bi-eye"></i></button>
                </td>
            </tr>
            <tr>
                <th scope="row"><a href="#">#2099</a></th>
                <td>Schdule name 3</td>
                <td>Dear [first_name], this is to remind you our offices will remain closed for half a day tommorow</td>
                <td>2024-10-01 10:00</td>
                <td>2024-10-02 11:08</td>
                <td>95% (550/600)</td>
                <td><span className="badge bg-info text-dark"><i className="bi bi-info-circle me-1"></i> 70%</span></td>
                <td><span className="badge bg-warning">Cancelled</span></td>
                <td>
                    <button className="btn btn-sm btn-primary me-1"><i className="bi bi-eye"></i></button>
                </td>
            </tr>
            <tr>
                <th scope="row"><a href="#">#2069</a></th>
                <td>Schdule name 4</td>
                <td>Dear [first_name], please not change of our policy</td>
                <td>2024-10-01 10:00</td>
                <td>2024-10-02 11:08</td>
                <td>98% (250/310)</td>
                <td><span className="badge bg-info text-dark"><i className="bi bi-info-circle me-1"></i> 96%</span></td>
                <td><span className="badge bg-success">Completed</span></td>
                <td>
                    <button className="btn btn-sm btn-primary me-1"><i className="bi bi-eye"></i></button>
                </td>
            </tr>
            <tr>
                <th scope="row"><a href="#">#2029</a></th>
                <td>Schdule name 5</td>
                <td>Dear [first_name], we are please to say that we got awarded ...</td>
                <td>2024-10-01 10:00</td>
                <td>2024-10-02 11:08</td>
                <td>100% (300/300)</td>
                <td><span className="badge bg-info text-dark"><i className="bi bi-info-circle me-1"></i> 90%</span></td>
                <td><span className="badge bg-success">Completed</span></td>

                <td>
                    <button className="btn btn-sm btn-primary me-1"><i className="bi bi-eye"></i></button>
                </td>
            </tr>
        </tbody>
    </>;

export default ScheduleSmsTblContent;

