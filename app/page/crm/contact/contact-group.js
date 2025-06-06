import React, { useState, useEffect } from 'react';

import { saveContactGroup, getContactGroupList, updateContactGroup, deleteContactGroupById } from '../../../lib/service/model';

export default function ConctactGroup({ isContactsGroupTab, contactCaptureStatusModalRef, setMessageStatus, setAltAction, setAltActionName, setCurrentSelectedElement }) {

    const [isAddNewGroup, setIsAddNewGroup] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [contactGroupData, setContactGroupData] = useState({});
    const [contactGrouplList, setContactGrouplList] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentSelectedContactGroup, setCurrentSelectedContactGroup] = useState({});

    const toggleCustomerTable = () => {
        setIsAddNewGroup(!isAddNewGroup);
    };

    const resetValues = () => {
        setGroupName("");
        setIsEditMode(false);
        setCurrentSelectedContactGroup({});
    }

    useEffect(() => {
        fetchContactGroupData(0, 10);
    }, []);


    useEffect(() => { }, [isAddNewGroup, isContactsGroupTab]);


    useEffect(() => {

        if (!contactGroupData || Object.keys(contactGroupData).length === 0) {
            console.log("contactGroupData is empty");
            return
        }


        let updatedByMap = {};

        try {
            contactGroupData.updatedByUsers.forEach((val) => {
                updatedByMap[val.id] = val;

            });
        } catch (error) {
            console.log("Error in customerData.updatedBy =========>>>" + error);
        }

        let contactGrouplLst = [];

        if (Array.isArray(contactGroupData.data)) {

            contactGroupData.data.forEach((contactGroup) => {

                try {
                    contactGroup["updateByName"] = updatedByMap[contactGroup.updatedBy].first_name + " " + updatedByMap[contactGroup.updatedBy].third_name;
                } catch (error) {
                    contactGroup["updateByName"] = "";
                }

                contactGrouplLst.push(contactGroup);

            });
        }

        setContactGrouplList(contactGrouplLst);


    }, [contactGroupData]);


    const saveContactGroupData = async (event, action, id) => {

        event.preventDefault();

        let data = {
            "name": groupName,
        }

        let saveRes = null;

        if (action == "update") {
            saveRes = await updateContactGroup(data, id);

        } else {
            saveRes = await saveContactGroup(data);
        }

        setMessageStatus(saveRes.message);

        // Show the ProposalStatusModal
        if (contactCaptureStatusModalRef.current) {
            const modal = new window.bootstrap.Modal(contactCaptureStatusModalRef.current);
            modal.show();
        }

        resetValues();
        fetchContactGroupData();
        // fetchAllContactData();
    };

    const deleteContactGroup = async (event, id) => {

        event.preventDefault();
        let res = await deleteContactGroupById(id);
        setMessageStatus(res.message);

        // Show the ProposalStatusModal
        if (contactCaptureStatusModalRef.current) {
            const modal = new window.bootstrap.Modal(contactCaptureStatusModalRef.current);
            modal.show();
        }
        fetchContactGroupData();
    }

    const fetchContactGroupData = async () => {
        let res = await getContactGroupList(0, 10);
        if ('error' in res) {
            return;
        }
        setContactGroupData(res);
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

                                    <button className="btn btn-primary me-2" onClick={
                                        (event) => saveContactGroupData(event, isEditMode ? "update" : "save", isEditMode ? currentSelectedContactGroup["id"] : null)
                                    }>
                                        <i className="bi bi-floppy"></i>
                                        {
                                            isEditMode ? " Update" : " Save"
                                        }

                                    </button>

                                    <button onClick={() => toggleCustomerTable()} className="btn btn-secondary me-2"><i className="bi bi-x"></i> Close </button>
                                </React.Fragment>
                            ]
                            :
                            [<button
                                key="add-new-btn" className="btn btn-primary me-2"
                                onClick={
                                    () => {
                                        toggleCustomerTable();
                                        resetValues();
                                    }
                                } >
                                <i className="bi bi-plus-lg"></i> Add new
                            </button>]
                    }

                </div>
            </div>


            <div className="row">
                <h4 className="fw-bold">Group List</h4>
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Total members</th>
                        <th scope="col">Created date</th>
                        <th scope="col">Last Editor</th>
                        <th scope="col">Last Edited</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactGrouplList.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{row["name"]}</td>
                                    <td>{row["contactCount"]}</td>
                                    <td>{row["createdAt"]}</td>
                                    <td>{row["updateByName"]}</td>
                                    <td>{row["updatedAt"]}</td>
                                    <td>
                                        <button type="button" style={{ marginRight: "10px" }} className="btn btn-info"
                                            onClick={
                                                () => {
                                                    setIsAddNewGroup(true);
                                                    setGroupName(row["name"]);
                                                    setCurrentSelectedContactGroup(row);
                                                    setIsEditMode(true);
                                                }

                                            }
                                        >
                                            <i className="bi bi-pencil-square"></i></button>
                                        <button type="button" className="btn btn-danger"

                                            onClick={
                                                () => {
                                                    setMessageStatus("Are you sure you want to delete this group");
                                                    if (contactCaptureStatusModalRef.current) {
                                                        setAltAction((e) => deleteContactGroup);
                                                        setAltActionName("delete");
                                                        setCurrentSelectedElement(row);
                                                        const modal = new window.bootstrap.Modal(contactCaptureStatusModalRef.current);
                                                        modal.show();

                                                    }
                                                }
                                            }

                                        ><i className="bi bi-trash3"></i></button>
                                    </td>

                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>

        </>

    )
}