import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { fetchAdministrativeAreas, getContactGroupList } from "../../../lib/service/model";
import { handleFileRename } from "../../../lib/utils/util";

export default function CustomerForm({
    action, setShowEditForm,
    isUserPage,
    firstName, setFirstName,
    secondName, setSecondName,
    thirdName, setThirdName,
    phoneNumber, setPhoneNumber,
    email, setEmail,
    gender, setGender,
    address, setAddress,
    countryCode, setCountryCode,
    administrativeArea, setAdministrativeArea,
    customerGroup, setCustomerGroup,
    kraPin, setKraPin,
    identificationCardId, setIdentificationCardId,
    saveContactData, currentSelectedContact,
    setAltAction, setAltActionName,
    selectedFiles, setSelectedFiles,
    passportIdFileInputKey, kraIdFileInputKey
}) {

    let [administrativeAreas, setAdministrativeAreas] = useState([]);
    let [contactGroupOptions, setContactGroupOptions] = useState([]);

    useEffect(() => {
        const fetchAdministrativeAreasData = async () => {
            let res = await fetchAdministrativeAreas();
            if ('error' in res) {
                return;
            }
            setAdministrativeAreas(res);
        };
        fetchAdministrativeAreasData();

    }, []);

    useEffect(() => {
        if (action === 'add') {
            setFirstName('');
            setSecondName('');
            setThirdName('');
            setPhoneNumber('');
            setEmail('');
            setGender('');
            setAddress('');
            setCountryCode('');
            setAdministrativeArea('');
            setCustomerGroup([]);
            setKraPin('');
            setIdentificationCardId('');


        } else {
            // Fetch the data for the user and populate the state variables
        }
    }, [action]);

    useEffect(() => {
        fetchContactGroupData();
    }, []);

    const fetchContactGroupData = async () => {
        let res = await getContactGroupList(0, 100);
        if ('error' in res) {
            return;
        }

        if (res || Object.keys(res).length != 0) {
            let contactGroupOpt = [];
            res.data.forEach((contactGroup) => {
                contactGroupOpt.push({ value: contactGroup.id, label: contactGroup.name });
            });
            setContactGroupOptions(contactGroupOpt);
        };
    }

    const custerGroupChange = (value, eventt) => {
        console.log("Value is: ", value);
        console.log("Event is: ", eventt);
    }

    return (
        <>
            {
                isUserPage ?
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>

                        </div>

                        <div>
                            <button className="btn btn-primary me-2" onClick={

                                (e) => {
                                    if (action === 'edit') {
                                        console.log("Update======================");
                                        console.log(currentSelectedContact["id"]);
                                        saveContactData(e, "update", currentSelectedContact["id"])
                                        setAltAction(null);
                                        setAltActionName("update");
                                    } else {
                                        saveContactData(e, "save", null);
                                    }
                                }

                            }>{
                                    action === 'edit' ? 'Update' : 'Save'
                                }</button>
                            {
                                action === 'edit' ?
                                    <button className="btn btn-secondary" onClick={() => setShowEditForm(false)}>Close</button> : ''
                            }

                        </div>
                    </div> : ''
            }

            <div className="row g-3">
                <div className="col-md-4">
                    <input type="text"
                        value={firstName || ""}
                        onChange={(event) => setFirstName(event.target.value)}
                        className="form-control"
                        placeholder="First Name" />

                </div>
                <div className="col-md-4">
                    <input type="text" value={secondName}
                        onChange={(event) => setSecondName(event.target.value)}
                        className="form-control"
                        placeholder="Second Name" />
                </div>
                <div className="col-md-4">
                    <input type="text"
                        value={thirdName || ""}
                        onChange={(event) => setThirdName(event.target.value)}
                        className="form-control" placeholder="Third Name" />

                </div>
                <div className="col-md-4">
                    <input
                        value={identificationCardId || ""}
                        onChange={(event) => setIdentificationCardId(event.target.value)}
                        type="text" className="form-control" placeholder="ID/Passport No." />
                </div>
                <div className="col-md-4">
                    <input
                        value={phoneNumber || ""}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        type="text" className="form-control" placeholder="Phone Number" />
                </div>
                <div className="col-md-4">
                    <input type="email"
                        value={email || ""}
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-control" placeholder="Email" />

                </div>
                <div className="col-md-4">
                    <select id="inputState"
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                        className="form-select">
                        <option key={0} value={0} defaultValue>Gender...</option>
                        <option value={"MALE"} key={1}>Male</option>
                        <option value={"FEMALE"} key={2}>Female</option>
                        <option value={"OTHER"} key={3}>Other</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="text"
                        value={address || ""}
                        onChange={(event) => setAddress(event.target.value)}
                        className="form-control" placeholder="Address" />
                </div>
                <div className="col-md-4">
                    <select value={countryCode}
                        onChange={(event) => setCountryCode(event.target.value)}
                        id="inputState" className="form-select"
                    >
                        <option key={-1} defaultValue>Country...</option>
                        {
                            administrativeAreas && administrativeAreas.length > 0 && administrativeAreas.map((area, index) => {
                                if (area.level === 1) {
                                    return <option value={area.id} key={index}>{area.name}</option>;
                                }
                            }
                            )
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <select id="inputState"
                        value={administrativeArea}
                        onChange={(event) => setAdministrativeArea(event.target.value)}
                        className="form-select"
                    >
                        <option key={1} defaultValue>County...</option>
                        {
                            administrativeAreas && administrativeAreas.length > 0 && administrativeAreas.map((area, index) => {
                                if (area.level === 2) {
                                    return <option value={area.id} key={index}>{area.name}</option>;
                                }
                            }
                            )}
                    </select>
                </div>
                <div className="col-md-4">
                    <Select
                        id="customer-group"
                        isMulti
                        // defaultValue={[options[0], options[1]]}
                        value={customerGroup}
                        // onChange={(val, evt) => custerGroupChange(val, evt)}
                        onChange={(val, evt) => setCustomerGroup(val, evt)}
                        options={contactGroupOptions}
                        closeMenuOnScroll={true}
                        placeholder="Select customer group"
                    />
                </div>

                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="img">Select passport/ID image:</label>
                            <input
                                key={passportIdFileInputKey}
                                type="file"
                                name="img"
                                accept="image/*,application/pdf"
                                className="form-control"
                                onChange={
                                    (e) => {
                                        let originalFile = e.target.files[0];
                                        let newFile = handleFileRename(originalFile, "Passport-ID");
                                        let filesArray = Array.from(selectedFiles);
                                        filesArray.push(newFile);
                                        // filesArray = filesArray.map((file) => handleFileRename(file, "Passport/ID"));
                                        setSelectedFiles(filesArray);
                                    }
                                }
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="img2">Select KRA pin:</label>

                            <input
                                key={kraIdFileInputKey}
                                type="file"
                                name="img"
                                accept="image/*,application/pdf"
                                className="form-control"
                                onChange={
                                    (e) => {
                                        let originalFile = e.target.files[0];
                                        let newFile = handleFileRename(originalFile, "KRA-Pin");
                                        let filesArray = Array.from(selectedFiles);
                                        filesArray.push(newFile);
                                        // filesArray = filesArray.map((file) => handleFileRename(file, "Passport/ID"));
                                        setSelectedFiles(filesArray);
                                    }
                                }
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
