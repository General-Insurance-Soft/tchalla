import React, { useEffect, useState } from "react";

import { fetchAdministrativeAreas } from "../../../lib/service/model";

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
    identificationCardId, setIdentificationCardId
}) {

    let [administrativeAreas, setAdministrativeAreas] = useState([]);

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
            setCustomerGroup(0);
            setKraPin('');
            setIdentificationCardId('');

        } else {
            // Fetch the data for the user and populate the state variables
        }
    }, [action]);



    return (
        <>
            {
                isUserPage ?
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>

                        </div>

                        <div>
                            <button className="btn btn-primary me-2" onClick={() => setShowEditForm(false)}>{action === 'edit' ? 'Update' : 'Save'}</button>
                            <button className="btn btn-secondary" onClick={() => setShowEditForm(false)}>Cancel</button>
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
                    <input key={1}
                        value={identificationCardId || ""}
                        onChange={(event) => setIdentificationCardId(event.target.value)}
                        type="text" className="form-control" placeholder="ID/Passport No." />
                </div>
                <div className="col-md-4">
                    <input key={1}
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
                        <option value={"OTHER"} key={2}>Other</option>
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
                            administrativeAreas.map((area, index) => {
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
                        {administrativeAreas.map((area, index) => {
                            if (area.level === 2) {
                                return <option value={area.id} key={index}>{area.name}</option>;
                            }
                        }
                        )}
                    </select>
                </div>
                <div className="col-md-4">
                    <select id="customer-group"
                        value={customerGroup}
                        onChange={(event) => setCustomerGroup(event.target.value)}
                        className="form-select"
                    >
                        <option key={0} value={0} defaultValue>Select customer group:</option>
                        <option key={2} value={1}>Group 1</option>
                        <option key={3} value={2}>Group 2</option>
                    </select>
                </div>

                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="img">Select passport/ID image:</label>
                            <input type="file" id="img" name="img" accept="image/*" className="form-control" />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="img2">Select KRA pin:</label>
                            <input type="file" id="img2" name="img" accept="image/*" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
