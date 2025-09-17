"use client"

import { useEffect, useState, useRef } from "react";

import { fetchSearchedContacts } from "../../../lib/service/model";


export default function PaymentForm({
    paymentAction,
    referenceNumber,
    paymentMode,
    amount,
    paymentDate,
    smsSent,
    setReferenceNumber,
    setPaymentMode,
    setAmount,
    setPaymentDate,
    setSmsSent,
    savePayment,
    setContactId
}) {

    const [searchText, setSearchText] = useState('');
    const [searchedContacts, setSearchedContacts] = useState([]);
    const dropdownRef = useRef(null);

    let [firstName, setFirstName] = useState('');
    let [secondName, setSecondName] = useState('');
    let [thirdName, setThirdName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [idNumber, setIdNumber] = useState('');
    let [email, setEmail] = useState('');

    useEffect(() => {
        console.log("changing options " + paymentAction);
        // Update options based on the paymentAction prop
    }, [paymentAction]);


    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            const fetchContacts = async () => {
                let res = await fetchSearchedContacts(searchText);
                setSearchedContacts(res);
            };
            fetchContacts();
        }, 500); // Wait 500ms after user stops typing

        return () => clearTimeout(delayDebounce);
    }, [searchText]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setSearchedContacts([]); // clear results
                setSearchText(''); // clear search text 
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setSearchedContacts]);

    let resetForm = () => {
        setSearchText('');
        setSearchedContacts([]);
        setFirstName('');
        setSecondName('');
        setThirdName('');
        setPhoneNumber('');
        setIdNumber('');
        setEmail('');
        setReferenceNumber('');
        setPaymentMode('');
        setAmount('');
        setPaymentDate('');
        setSmsSent('');
        setContactId('');
    }

    return (

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            {paymentAction === "add" ?
                                "Add new payment"
                                :
                                "Edit payment"
                            }
                        </h1>
                        <button
                            type="button" className="btn-close"
                            data-bs-dismiss="modal" aria-label="Close"
                            onClick={() => resetForm()}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form className="row g-3">

                            <div className="col-md-12">

                                {paymentAction === "add" ?
                                    <>
                                        {/* Search + Selected Preview (side-by-side on md+, stacked on sm) */}
                                        <div className="col-12">
                                            <div className="d-flex flex-column flex-md-row align-items-stretch gap-2">

                                                {/* Search Input (keeps dropdown anchored) */}
                                                <div className="position-relative flex-grow-1">
                                                    <div className="input-group">
                                                        <span className="input-group-text" id="search-icon">
                                                            <i className="bi bi-search"></i>
                                                        </span>
                                                        <input
                                                            id="search"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Search by Name, ID/Passport, Phone, Email"
                                                            aria-label="Search"
                                                            aria-describedby="search-icon"
                                                            onChange={(e) => setSearchText(e.target.value)}
                                                            value={searchText}
                                                        />
                                                    </div>

                                                    {/* Suggestion Dropdown */}

                                                    {(Array.isArray(searchedContacts) && (searchedContacts.length > 0 || (searchText?.trim()?.length > 0))) && (
                                                        <ul
                                                            className="list-group mt-1 position-absolute w-100"
                                                            style={{
                                                                zIndex: 1000,
                                                                maxHeight: "200px",
                                                                overflowY: "auto",
                                                                backgroundColor: "#fff",
                                                                border: "1px solid #ccc",
                                                                borderRadius: "4px",
                                                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                                                            }}
                                                            ref={dropdownRef}
                                                        >
                                                            {searchedContacts.length > 0 ? (
                                                                searchedContacts.map((c) => (
                                                                    <li
                                                                        key={c.id}
                                                                        className="list-group-item"
                                                                        style={{ cursor: "pointer", transition: "background-color 0.2s" }}
                                                                        onClick={() => {
                                                                            setFirstName(c.first_name);
                                                                            setThirdName(c.last_name);
                                                                            setPhoneNumber(c.phone);
                                                                            setContactId(c.id);
                                                                            setSecondName(c.second_name);
                                                                            setIdNumber(c.id_number);
                                                                        }}
                                                                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
                                                                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
                                                                    >
                                                                        {c.first_name} {c.last_name} - {c.phone} - {c.id_number}
                                                                    </li>
                                                                ))
                                                            ) :

                                                                (searchText?.trim()?.length > 0) &&
                                                                <li className="list-group-item text-muted" aria-live="polite">
                                                                    No contact found
                                                                </li>
                                                            }
                                                        </ul>
                                                    )}

                                                </div>

                                                {/* Selected Contact Preview (sits to the right on md+) */}
                                                {firstName && thirdName && phoneNumber && (
                                                    <div className="d-flex align-items-center">
                                                        <span
                                                            className="px-2 py-1 border rounded bg-light text-dark text-truncate d-inline-block"
                                                            style={{ maxWidth: 320 }}
                                                            title={`${firstName} ${thirdName} - ${phoneNumber}`} // full text on hover
                                                        >
                                                            {firstName} {thirdName} - {phoneNumber}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>

                                    :
                                    ""
                                }

                            </div>

                            <div className="col-md-4">
                                <label htmlFor="firstName"> First name:</label>
                                {paymentAction === "add" ?
                                    <input className="form-control" type="text" value={firstName} aria-label="First Name" disabled ></input>
                                    :
                                    <>
                                        <input id="firstName" type="text" className="form-control" value="Tom" />
                                    </>

                                }

                            </div>
                            <div className="col-md-4">
                                <label htmlFor="phone"> Second name:</label>
                                {paymentAction === "add" ?
                                    <input className="form-control" type="text" value={secondName} aria-label="Second Name" disabled ></input>
                                    :
                                    <>

                                        <input id="secondName" type="text" className="form-control" value="Lopy" />
                                    </>

                                }

                            </div>
                            <div className="col-md-4">
                                <label htmlFor="thirdName"> Third Name:</label>
                                {paymentAction === "add" ?
                                    <input className="form-control" type="text" value={thirdName} aria-label="Third Name" disabled ></input>
                                    :
                                    <>

                                        <input htmlFor="thirdName" type="text" className="form-control" value="Lee" />
                                    </>

                                }

                            </div>

                            <div className="col-md-4">
                                <label htmlFor="Passport"> Id/Passport:</label>
                                {paymentAction === "add" ?
                                    <input className="form-control" type="text" value={idNumber} aria-label="ID/Passport Name" disabled ></input>
                                    :
                                    <>

                                        <input id="Passport" type="text" className="form-control" value="28904783" />
                                    </>

                                }

                            </div>

                            <div className="col-md-4">
                                <label htmlFor="Passport">Ref No:</label>

                                <input
                                    id="refNo" type="text"
                                    value={referenceNumber} className="form-control"
                                    placeholder={paymentAction === "add" ? "#AJFJD201H" : ""}
                                    onChange={(e) => setReferenceNumber(e.target.value)}
                                />

                            </div>

                            <div className="col-md-4">
                                <label htmlFor="Passport">Payment Mode:</label>

                                <select id="inputState" className="form-select" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
                                    {paymentAction === "add" ? <option key="0" value="">...</option> : ''}
                                    <option key="2" value="Bank">Bank</option>
                                    <option key="1" value="Mpesa">Mpesa</option>
                                </select>

                            </div>
                            <div className="col-md-4">
                                <label htmlFor="Passport">Amount:</label>
                                <input id="amount" type="text" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="Passport">Payment Date:</label>
                                <input type="date" className="form-control" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />

                            </div>
                            <div className="col-md-4">
                                <label htmlFor="Passport">SMS Sent:</label>
                                <select id="inputState" className="form-select" onChange={(e) => setSmsSent(e.target.value)}>
                                    {paymentAction === "add" ? <option key="0">...</option> : ''}
                                    <option key="2" value="No">No</option>,
                                    <option key="1" value="yes">Yes</option>
                                </select>
                            </div>


                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button" className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={() => resetForm()}
                        >Close</button>
                        <button
                            type="button" className="btn btn-primary"
                            onClick={
                                (event) => savePayment(event)}
                        >Save</button>
                    </div>
                </div>
            </div>
        </div>

    );
}