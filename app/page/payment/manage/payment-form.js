import { useEffect } from "react";

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
    savePayment
}) {

    useEffect(() => {
        console.log("changing options " + paymentAction);
        // Update options based on the paymentAction prop
    }, [paymentAction]);

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
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="row g-3">

                            <div className="col-md-12">

                                {paymentAction === "add" ?
                                    <input id="secondName" type="text" className="form-control" placeholder="Search user by name, ID/Passort, Phone, Email etc" />
                                    :
                                    ""
                                }

                            </div>

                            <div className="col-md-4">
                                <label htmlFor="firstName"> First name:</label>
                                {paymentAction === "add" ?
                                    <input className="form-control" type="text" value="#" aria-label="First Name" disabled ></input>
                                    :
                                    <>
                                        <input id="firstName" type="text" className="form-control" value="Tom" />
                                    </>

                                }

                            </div>
                            <div className="col-md-4">
                                <label htmlFor="phone"> Second name:</label>
                                {paymentAction === "add" ?
                                    <input className="form-control" type="text" value="#" aria-label="First Name" disabled ></input>
                                    :
                                    <>

                                        <input id="secondName" type="text" className="form-control" value="Lopy" />
                                    </>

                                }

                            </div>
                            <div className="col-md-4">
                                <label htmlFor="thirdName"> Third Name:</label>
                                {paymentAction === "add" ?
                                    <input className="form-control" type="text" value="#" aria-label="First Name" disabled ></input>
                                    :
                                    <>

                                        <input htmlFor="thirdName" type="text" className="form-control" value="Lee" />
                                    </>

                                }

                            </div>

                            <div className="col-md-4">
                                <label htmlFor="Passport"> Id/Passport:</label>
                                {paymentAction === "add" ?
                                    <input className="form-control" type="text" value="#" aria-label="First Name" disabled ></input>
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

                                <select id="inputState" className="form-select"  value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
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
                                <input type="date"  className="form-control" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />

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
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button
                            type="button" className="btn btn-primary"
                            onClick={(event) => savePayment(event)}
                        >Save</button>
                    </div>
                </div>
            </div>
        </div>

    );
}