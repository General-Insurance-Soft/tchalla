'use client'

import React, { useEffect, useState } from "react";
import CustomerForm from "./customer_form";
import withAuth from "../../../lib/service/with_auth";
import DocumentHolder from "../../../lib/components/ui/utils/document_holder";
//getContactList
import { getContactList } from "../../../lib/service/model";

const Page = () => {


    const [showGroupCustomerList, setShowGroupCustomerList] = useState(false);
    const [actionBtnLabel, setActionBtnLabel] = useState("Add new");
    const [isContactsGroupTab, setIsContactsGroupTab] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [customerData, setCustomerData] = useState({});
    const [contactlList, setContactlList] = useState([]);

    let [firstName, setFirstName] = useState('');
    let [secondName, setSecondName] = useState('');
    let [thirdName, setThirdName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [email, setEmail] = useState('');
    let [gender, setGender] = useState('');
    let [address, setAddress] = useState('');
    let [countryCode, setCountryCode] = useState('');
    let [administrativeArea, setAdministrativeArea] = useState('');
    let [customerGroup, setCustomerGroup] = useState(0);
    let [kraPin, setKraPin] = useState('');
    let [identificationCardId, setIdentificationCardId] = useState('');


    useEffect(() => { }, [showGroupCustomerList, isContactsGroupTab]);

    useEffect(() => {
        fetchAllContactData();
    }, []);

    useEffect(() => {

        if (!customerData || Object.keys(customerData).length === 0) {
            console.log("customerData is empty");
            return
        }

        let adminAreas = {};
        try {
            customerData.administrative_areas.forEach((area) => {
                adminAreas[area.id] = area;
            });
        } catch (error) {
            console.log("Error in customerData.administrative_areas =========>>>" + error);
        }

        //setAdministrativeAreas(adminAreas);


        let updatedByMap = {};

        try {
            customerData.updatedBy.forEach((val) => {
                updatedByMap[val.id] = val;

            });
        } catch (error) {
            console.log("Error in customerData.updatedBy =========>>>" + error);
        }

        let contactlLst = [];

        customerData.contacts.forEach((contact) => {

            try {
                contact["updateByName"] = updatedByMap[contact.updated_by].first_name + " " + updatedByMap[contact.updated_by].third_name;
            } catch (error) {
                console.log("Error in refresh contact table =========>>>" + error);
                contact["updateByName"] = "";
            }

            try {
                contact["country"] = adminAreas[contact.address.country_code].name;
            } catch (error) {
                console.log("Error in refresh contact table =========>>>" + error);
                contact["country"] = "";
            }

            try {
                contact["county"] = adminAreas[contact.address.administrative_area].name;
            } catch (error) {
                console.log("Error in refresh contact table =========>>>" + error);
                contact["county"] = "";
            }

            contactlLst.push(contact);

        });

        setContactlList(contactlLst);

    }, [customerData]);

    const fetchAllContactData = async () => {
        let res = await getContactList(0, 10);
        if ('error' in res) {
            return;
        }
        setCustomerData(res);
    };

    const toggleCustomerTable = () => {
        setShowGroupCustomerList(!showGroupCustomerList);
    };

    let customerTable = [


    ];

    return (
        <>
            <div className="pagetitle">
                <h1>CRM</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">CRM</a></li>
                        <li className="breadcrumb-item active">Contact Management</li>
                    </ol>
                </nav>
            </div>

            <div className="card">
                <div className="card-body">

                    <ul className="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab"
                                onClick={() => setIsContactsGroupTab(false)}
                                data-bs-toggle="tab" data-bs-target="#bordered-home" type="button" role="tab" aria-controls="home" aria-selected="true">New Customer</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab"
                                onClick={() => setIsContactsGroupTab(false)}
                                data-bs-toggle="tab" data-bs-target="#bordered-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Manage Contacts</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="customer_group-tab" data-bs-toggle="tab" data-bs-target="#bordered-customer_group"
                                type="button" role="tab" aria-controls="customer_group" aria-selected="false"
                                onClick={() => setIsContactsGroupTab(true)}
                            >Contacts Groups</button>
                        </li>

                    </ul>
                    <div className="tab-content pt-2" id="borderedTabContent">
                        <div className="tab-pane fade show active" id="bordered-home" role="tabpanel" aria-labelledby="home-tab">
                            <h5 className="card-title">Capture Customer Details</h5>

                            <CustomerForm
                                action="add" isUserPage="true"
                                firstName={firstName}
                                setFirstName={setFirstName}
                                secondName={secondName}
                                setSecondName={setSecondName}
                                thirdName={thirdName}
                                setThirdName={setThirdName}
                                phoneNumber={phoneNumber}
                                setPhoneNumber={setPhoneNumber}
                                email={email}
                                setEmail={setEmail}
                                gender={gender}
                                setGender={setGender}
                                address={address}
                                setAddress={setAddress}
                                countryCode={countryCode}
                                setCountryCode={setCountryCode}
                                administrativeArea={administrativeArea}
                                setAdministrativeArea={setAdministrativeArea}
                                customerGroup={customerGroup}
                                setCustomerGroup={setCustomerGroup}
                                kraPin={kraPin}
                                setKraPin={setKraPin}
                                identificationCardId={identificationCardId}
                                setIdentificationCardId={setIdentificationCardId}
                            />
                            <DocumentHolder />
                            <div className="text-center mb-3">
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary me-2" onClick={() => setShowEditForm(false)}>Save</button>
                                    <button className="btn btn-secondary" onClick={() => setShowEditForm(false)}>Cancel</button>
                                </div>
                            </div>
                        </div>

                        {/* manage customers */}

                        <div className="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h5 className="card-title">Manage Customers</h5>

                            <>
                                <div className="row">

                                    {
                                        isContactsGroupTab ?
                                            <div className="col-sm-6 text-info">Total Customers selected: 20</div>

                                            :
                                            <div className="col-sm-6">Total Customers: 600</div>
                                    }
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
                                            <th scope="col">
                                                {
                                                    isContactsGroupTab ?

                                                        <td>
                                                            <input id="selectAll" type="checkbox" /> Select all
                                                        </td>
                                                        :
                                                        "Action"
                                                }

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            contactlList.map((row, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{row["first_name"]} {row["last_name"]}</td>
                                                        <td>{row["phone"]}</td>
                                                        <td>{row["email"]}</td>
                                                        <td>{row["country"]}</td>
                                                        <td>{row["county"]}</td>
                                                        <td>{row["address"].address}</td>
                                                        <td>{row["updateByName"]}</td>
                                                        <td>{row["updatedAt"]}</td>
                                                        {
                                                            isContactsGroupTab ?

                                                                <td>
                                                                    <input type="checkbox" />
                                                                </td>
                                                                :
                                                                <td>
                                                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => setShowEditForm(true)}><i className="bi bi-pencil-square"></i></button>
                                                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                                                </td>
                                                        }
                                                    </tr>
                                                );
                                            })
                                        }

                                    </tbody>
                                </table>
                            </>

                            {
                                showEditForm ?
                                    <>
                                        <hr />
                                        <h5 className="card-title">Edit Customer</h5>
                                        <CustomerForm action="edit" setShowEditForm={setShowEditForm} isUserPage="true" />
                                        <DocumentHolder />
                                        <div className="text-center mb-3">
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-primary me-2" onClick={() => setShowEditForm(false)}>Update</button>
                                                <button className="btn btn-secondary" onClick={() => setShowEditForm(false)}>Cancel</button>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    ""
                            }

                        </div>
                        {/* End manage customers */}

                        {/* Customer group */}
                        <div className="tab-pane fade" id="bordered-customer_group" role="tabpanel" aria-labelledby="customer_group-tab">


                            <div className="d-flex justify-content-between align-items-center mt-2">
                                <div>
                                    {
                                        showGroupCustomerList ?
                                            <>
                                                <h5 className="card-title fw-bold">New Group</h5>

                                            </>

                                            :
                                            ""
                                    }
                                </div>

                                <div>
                                    {
                                        showGroupCustomerList ?
                                            [
                                                <React.Fragment key="group-buttons">
                                                    <button className="btn btn-primary me-2"><i className="bi bi-floppy"></i> Save </button>
                                                    <button onClick={() => toggleCustomerTable()} className="btn btn-secondary me-2"><i className="bi bi-x"></i> Close </button>
                                                </React.Fragment>
                                            ]
                                            :
                                            [<button key="add-new-btn" onClick={() => toggleCustomerTable()} className="btn btn-primary me-2"><i className="bi bi-plus-lg"></i> Add new </button>]
                                    }

                                </div>
                            </div>

                            {
                                showGroupCustomerList ?
                                    <>

                                        <div className="row mb-3">
                                            <div className="col-md-4"><input type="text" className="form-control" placeholder="Group Name" /></div>
                                        </div>
                                        <div className="d-flex  mt-2 mb-2 gap-3">
                                            <span>Filter contacts: </span>
                                            <div>
                                                <select id="inputState" className="form-select">
                                                    <option defaultValue>Policy type...</option>
                                                    <option>Fire/Bulgary</option>
                                                    <option>Health</option>
                                                    <option>Car</option>
                                                    <option>Life insurance</option>
                                                </select>
                                            </div>
                                            |
                                            <div className="d-flex gap-1">
                                                <label htmlFor="age" className="col-form-label">Age: </label>
                                                <select id="age" className="form-select">
                                                    <option>equals</option>
                                                    <option>greater than</option>
                                                    <option>less than</option>
                                                </select>
                                                <input type="number" className="form-control" min="-1" style={{ width: '80px' }}></input>
                                            </div>
                                            |
                                            <div className="d-flex gap-1">
                                                <label htmlFor="name" className="col-form-label">Name: </label>
                                                <select id="name" className="form-select">
                                                    <option>starts with</option>
                                                    <option>contains</option>
                                                    <option>ends with</option>
                                                </select>
                                                <input type="text" className="form-control" min="-1"></input>
                                            </div>
                                            |
                                            <div>
                                                <select id="inputState" className="form-select">
                                                    <option defaultValue>Country...</option>
                                                    <option>Kenya</option>
                                                    <option>Uganda</option>
                                                    <option>Tanzania</option>
                                                    <option>Rwanda</option>
                                                </select>
                                            </div>

                                            <div>
                                                <select id="inputState" className="form-select">
                                                    <option defaultValue>County...</option>
                                                    <option>Nairobi</option>
                                                    <option>Kisumu</option>
                                                    <option>Nakuru</option>
                                                    <option>Nyandarua</option>
                                                </select>
                                            </div>
                                        </div>
                                        {customerTable}
                                        <hr />
                                    </>
                                    :
                                    ""
                            }

                            {

                                showGroupCustomerList ?
                                    ""
                                    :
                                    <>
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

                            }


                        </div>
                        {/* end customer group */}

                    </div>


                </div>
            </div>



            {/* Modal */}


        </>
    );

}

export default withAuth(Page);