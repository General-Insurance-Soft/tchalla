import React, { useState, useEffect } from 'react';

import { saveContactGroup } from '../../../lib/service/model';

export default function ConctactGroup({ isContactsGroupTab, contactCaptureStatusModalRef, setMessageStatus  }) {

    const [isAddNewGroup, setIsAddNewGroup] = useState(false);
    const [groupName, setGroupName] = useState("");


    const toggleCustomerTable = () => {
        setIsAddNewGroup(!isAddNewGroup);
    };

    useEffect(() => { }, [isAddNewGroup, isContactsGroupTab]);

    const saveContactGroupData = async (event, action, id) => {

        event.preventDefault();

        let data = {
            "name": groupName,
        }

        let saveRes = null;

        if (action == "update") {
            // saveRes = await updateContact(data, id);

        } else {
            saveRes = await saveContactGroup(data);
        }

        setMessageStatus(saveRes.message);

        // Show the ProposalStatusModal
        if (contactCaptureStatusModalRef.current) {
            const modal = new window.bootstrap.Modal(contactCaptureStatusModalRef.current);
            modal.show();
        }

        // fetchAllContactData();
    };

    return (
        <>

            <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
                <div>
                    {
                        isAddNewGroup ?

                            <input
                                type="text" className="form-control" style={{ width: "350px" }} placeholder="Group Name"
                                value={groupName || ""}
                                onChange={(event) => setGroupName(event.target.value)}
                            />

                            :
                            ""
                    }
                </div>

                <div>
                    {
                        isAddNewGroup ?
                            [
                                <React.Fragment key="group-buttons">

                                    <button className="btn btn-primary me-2" onClick={(event) => saveContactGroupData(event, "save", null)}>
                                        <i className="bi bi-floppy"></i>
                                        Save
                                    </button>

                                    <button onClick={() => toggleCustomerTable()} className="btn btn-secondary me-2"><i className="bi bi-x"></i> Close </button>
                                </React.Fragment>
                            ]
                            :
                            [<button key="add-new-btn" onClick={() => toggleCustomerTable()} className="btn btn-primary me-2"><i className="bi bi-plus-lg"></i> Add new </button>]
                    }

                </div>
            </div>


            <div className="row">
                <h4 className="fw-bold">Group List</h4>
                <div>Total groups: 3</div>
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Total members</th>
                        <th scope="col">Created date</th>
                        <th scope="col">Created by</th>
                        <th scope="col">Last Editor</th>
                        <th scope="col">Last Edited</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#</td>
                        <td>Car insurance Group</td>
                        <td>30</td>
                        <td>2024-09-11</td>
                        <td>Lucy</td>
                        <td>Tom</td>
                        <td>2024-09-11</td>
                        <td>
                            <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                            <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>Life insurance</td>
                        <td>35</td>
                        <td>2024-09-11</td>
                        <td>Lucy</td>
                        <td>Kevin</td>
                        <td>2024-09-11</td>
                        <td>
                            <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                            <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>High value</td>
                        <td>20</td>
                        <td>2024-09-13</td>
                        <td>George</td>
                        <td>Tom</td>
                        <td>2024-09-11</td>
                        <td>
                            <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" ><i className="bi bi-pencil-square"></i></button>
                            <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                        </td>
                    </tr>

                </tbody>
            </table>

        </>

    )
}