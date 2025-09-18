"use client";

import { useRef, useState, useEffect } from 'react';

import DeletePayment from './delete-payment.js';
import PaymentDetails from './payment-details.js';
import PaymentForm from './payment-form.js';
import withAuth from "../../../lib/service/with_auth";
import { fetchPaymentData, savePaymentData, updatePaymentData } from "../../../lib/service/model";
import PaymentStatusModal from "../payment-status-message";

const Page = () => {

    const [paymentAction, setPaymentAction] = useState("add");
    const [res, setRes] = useState([]);
    const [messageStatus, setMessageStatus] = useState("");
    const paymentStatusModalRef = useRef(null);

    const [contactId, setContactId] = useState(null);
    const [referenceNumber, setReferenceNumber] = useState("");
    const [paymentMode, setPaymentMode] = useState("");
    const [amount, setAmount] = useState(0);
    const [paymentDate, setPaymentDate] = useState();
    const [smsSent, setSmsSent] = useState(false);
    const [contacts, setContacts] = useState({});
    const [contactName, setContactName] = useState("");
    const [paymentList, setPaymentList] = useState([]);
    const [paymentId, setPaymentId] = useState(null);

    let [firstName, setFirstName] = useState('');
    let [secondName, setSecondName] = useState('');
    let [thirdName, setThirdName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [idNumber, setIdNumber] = useState('');
    let [email, setEmail] = useState('');

    const fetchAllPaymentData = async () => {
        let res = await fetchPaymentData(0, 15);

        if ('message' in res) {
            setMessageStatus(res.message);

            if (paymentStatusModalRef.current) {
                const modal = new window.bootstrap.Modal(paymentStatusModalRef.current);
                modal.show();
            }
            return;
        }

        setRes(res);
    };

    useEffect(() => {
        fetchAllPaymentData();
    }, []);


    useEffect(() => {

        if (!res || Object.keys(res).length === 0) {
            console.log("res is empty");
            return
        }

        let adminAreas = {};
        try {
            res.administrative_areas.forEach((area) => {
                adminAreas[area.id] = area;
            });
        } catch (error) {
            console.log("Error in res.administrative_areas =========>>>" + error);
        }

        //setAdministrativeAreas(adminAreas);

        let contactMap = {};

        try {
            res.contact.forEach((contc) => {
                contactMap[contc.id] = contc;

            });
        } catch (error) {
            console.log("Error in res.contact =========>>>" + error);
        }

        let updatedByMap = {};

        try {
            res.updatedBy.forEach((val) => {
                updatedByMap[val.id] = val;

            });
        } catch (error) {
            console.log("Error in res.updatedBy =========>>>" + error);
        }


        setContacts(contactMap);

        let paymentLst = [];

        res.payments.forEach((payment) => {

            try {
                payment["updateByName"] = updatedByMap[payment.updated_by].first_name + " " + updatedByMap[payment.updated_by].third_name;
            } catch (error) {
                console.log("Error in refresh payment table =========>>>" + error);
                payment["updateByName"] = "";
            }

            try {
                payment["contactName"] = contactMap[payment.contact_id].first_name + " " + contactMap[payment.contact_id].last_name;
                setContactName(payment["contactName"]);
            } catch (error) {
                console.log("Error in refresh payment table =========>>>" + error);

                payment["contactName"] = "";
                setContactName("");
            }

            try {
                payment["address"] = contactMap[payment.contact_id].address.address;
            } catch (error) {
                console.log("Error in refresh payment table =========>>>" + error);
                payment["address"] = "";
            }

            try {
                payment["country"] = adminAreas[contactMap[payment.contact_id].address.country_code].name;
            } catch (error) {
                console.log("Error in refresh payment table =========>>>" + error);
                payment["country"] = "";
            }

            try {
                payment["county"] = adminAreas[contactMap[payment.contact_id].address.administrative_area].name;
            } catch (error) {
                console.log("Error in refresh payment table =========>>>" + error);
                payment["county"] = "";
            }

            try {
                payment["phone"] = contactMap[payment.contact_id].phone;
            } catch (error) {
                console.log("Error in refresh payment table =========>>>" + error);

                payment["phone"] = "";
            }

            try {
                payment["email"] = contactMap[payment.contact_id].email;
            } catch (error) {
                console.log("Error in refresh payment table =========>>>" + error);
                payment["email"] = "";
            }

            paymentLst.push(payment);

        });

        setPaymentList(paymentLst);

    }, [res]);

    const savePayment = async (event) => {

        event.preventDefault();

        let data = {
            reference_number: referenceNumber,
            payment_mode: paymentMode,
            amount: amount,
            payment_date: paymentDate,
            sms_sent: smsSent,
            contact_id: contactId
        }

        let saveRes = {};

        if (paymentAction === "add") {
            saveRes = await savePaymentData(data);
        } else {
            saveRes = await updatePaymentData(data, paymentId)
        } //&& contactId){

        if ('message' in saveRes) {
            setMessageStatus(saveRes.message);

            if (paymentStatusModalRef.current) {
                const modal = new window.bootstrap.Modal(paymentStatusModalRef.current);
                modal.show();
            }
            fetchAllPaymentData();
        }

    };

    return (
        <>

            <div className="pagetitle">
                <h1>Payments</h1>
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
                        {/* <li className="nav-item flex-fill" role="presentation">
                            <button className="nav-link w-100" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-schedule" type="button" role="tab" aria-controls="payment2" aria-selected="false">payment2</button>
                        </li> */}

                    </ul>

                    <div className="tab-content pt-2" id="borderedTabJustifiedContent">

                        <div className="tab-pane fade show active" id="bordered-justified-payment" role="tabpanel" aria-labelledby="payment-tab">
                            {/* payment list */}

                            <div className="card">
                                <div className="card-body">
                                    {/* <h5 className="card-title">Capture policy Details</h5> */}

                                    <div className="d-flex justify-content-start mt-3">

                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setPaymentAction("add")}>
                                            Add new payment
                                        </button>


                                        {/* <div className="">
                                            <input id="claim_tag" type="text" className="form-control" placeholder="payment reference" />
                                        </div> */}
                                    </div>

                                    <div>

                                        <div className="row mb-2  mt-2">

                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Search by name, phone, ID/Passport" />
                                            </div>

                                            <div className="col-md-6 d-flex">
                                                From: <input type="date" className="form-control me-2" placeholder="From: " />
                                                To: <input type="date" className="form-control" placeholder="To: " />
                                            </div>

                                        </div>

                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered" style={{ overflowX: 'auto', width: '100%' }}>
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

                                                    {
                                                        paymentList.map((payment, index) => (
                                                            <tr key={index}>
                                                                <td>{payment.reference_number}</td>
                                                                <td>{payment.payment_mode}</td>
                                                                <td>{payment.contactName}</td>
                                                                <td>{payment.phone}</td>
                                                                <td>{payment.email}</td>
                                                                <td>{payment.country}</td>
                                                                <td>{payment.county}</td>
                                                                <td>{payment.address}</td>
                                                                <td>{payment.amount.toLocaleString()}</td>
                                                                <td>{new Date(payment.payment_date).toISOString().split('T')[0]}</td>
                                                                <td>{payment.sms_sent}</td>
                                                                <td>{payment.updateByName}</td>
                                                                <td>{new Date(payment.updated_at).toISOString().split('T')[0]}</td>
                                                                <td>
                                                                    <button type="button" style={{ marginRight: "10px" }} data-bs-toggle="modal" data-bs-target="#paymentDetailsModal" className="btn btn-success" ><i className="bi bi-binoculars-fill"></i></button>
                                                                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ marginRight: "10px" }} className="btn btn-info" onClick={() => {
                                                                        setPaymentAction("edit");
                                                                        setContactId(payment.contact_id);
                                                                        setReferenceNumber(payment.reference_number);
                                                                        setPaymentMode(payment.payment_mode);
                                                                        setAmount(payment.amount);
                                                                        setPaymentDate(payment.payment_date);
                                                                        setSmsSent(payment.sms_sent);
                                                                        setFirstName(contacts[payment.contact_id]?.first_name || '');
                                                                        setSecondName(contacts[payment.contact_id]?.second_name || '');
                                                                        setThirdName(contacts[payment.contact_id]?.last_name || '');
                                                                        setPhoneNumber(contacts[payment.contact_id]?.phone || '');
                                                                        setIdNumber(contacts[payment.contact_id]?.id_number || '');
                                                                        setEmail(contacts[payment.contact_id]?.email || '');
                                                                        setPaymentId(payment.id);
                                                                    }}><i className="bi bi-pencil-square"></i></button>
                                                                    <button type="button" data-bs-toggle="modal" data-bs-target="#deletePaymentModal" className="btn btn-danger" onClick={() => setContactId(payment.id)}><i className="bi bi-trash3"></i></button>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
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

            <PaymentForm
                paymentAction={paymentAction}
                referenceNumber={referenceNumber}
                setReferenceNumber={setReferenceNumber}
                paymentMode={paymentMode}
                setPaymentMode={setPaymentMode}
                amount={amount}
                setAmount={setAmount}
                paymentDate={paymentDate}
                setPaymentDate={setPaymentDate}
                smsSent={smsSent}
                setSmsSent={setSmsSent}
                savePayment={savePayment}
                setContactId={setContactId}
                contactId={contactId}
                firstName={firstName}
                setFirstName={setFirstName}
                secondName={secondName}
                setSecondName={setSecondName}
                thirdName={thirdName}
                setThirdName={setThirdName}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                idNumber={idNumber}
                setIdNumber={setIdNumber}
                email={email}
                setEmail={setEmail}
            />
            <DeletePayment />
            <PaymentDetails />
            <PaymentStatusModal ref={paymentStatusModalRef} messageStatus={messageStatus} />
        </>

    );
}

export default withAuth(Page);