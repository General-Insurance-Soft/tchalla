import { useEffect } from "react";

export default function PaymentForm({ paymentAction }) {

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
                                <label for="firstName"> First name:</label>
                                {paymentAction === "add" ?
                                    <input className="form-control" type="text" value="#" aria-label="First Name" disabled ></input>
                                    :
                                    <>
                                        <input id="firstName" type="text" className="form-control" value="Tom" />
                                    </>

                                }

                            </div>
                            <div className="col-md-4">
                                <label for="phone"> Second name:</label>
                                {paymentAction === "add" ?
                                    <input className="form-control" type="text" value="#" aria-label="First Name" disabled ></input>
                                    :
                                    <>

                                        <input id="secondName" type="text" className="form-control" value="Lopy" />
                                    </>

                                }

                            </div>
                            <div className="col-md-4">
                                <label for="thirdName"> Third Name:</label>
                                {paymentAction === "add" ?
                                    <input className="form-control" type="text" value="#" aria-label="First Name" disabled ></input>
                                    :
                                    <>

                                        <input for="thirdName" type="text" className="form-control" value="Lee" />
                                    </>

                                }

                            </div>

                            <div className="col-md-4">
                                <label for="Passport"> Id/Passport:</label>
                                {paymentAction === "add" ?
                                    <input className="form-control" type="text" value="#" aria-label="First Name" disabled ></input>
                                    :
                                    <>

                                        <input id="Passport" type="text" className="form-control" value="28904783" />
                                    </>

                                }

                            </div>

                            <div className="col-md-4">
                                <label for="Passport">Ref No:</label>
                                {paymentAction === "add" ?
                                    <input id="refNo" type="text" className="form-control" />
                                    :
                                    <input id="refNo" type="text" className="form-control" placeholder="#AJFJD201H" />
                                }

                            </div>

                            <div className="col-md-4">
                                <label for="Passport">Payment Mode:</label>

                                <select id="inputState" class="form-select" key={paymentAction}>
                                    {

                                        paymentAction === "add" ?

                                            [
                                                <option key="0" value="0">...</option>,
                                                <option key="2" value="2">Bank</option>,
                                                <option key="1" value="1">Mpesa</option>
                                            ]
                                            :

                                            [
                                                <option key="2" value="2">Bank</option>,
                                                <option key="1" value="1">Mpesa</option>
                                            ]

                                    }

                                </select>

                            </div>
                            <div className="col-md-4">
                                <label for="Passport">Amount:</label>
                                {paymentAction === "add" ?
                                    <input id="amount" type="text" className="form-control" />
                                    :
                                    <input id="amount" type="text" className="form-control" placeholder="30,000" />
                                }

                            </div>
                            <div className="col-md-4">
                                <label for="Passport">Payment Date:</label>
                                {paymentAction === "add" ?
                                    <input type="date"  key={paymentAction} className="form-control" />
                                    :
                                    <input type="date"  key={paymentAction} className="form-control" value="2024-10-22" />
                                }

                            </div>
                            <div className="col-md-4">
                                <label for="Passport">SMS Sent:</label>

                                <select id="inputState" class="form-select" key={paymentAction}>

                                    {
                                        paymentAction === "add" ?

                                            [
                                                <option key="0" value="0">...</option>,
                                                <option key="2" value="2">No</option>,
                                                <option key="1" value="1">Yes</option>
                                            ]
                                            :

                                            [
                                                <option key="2" value="2">No</option>,
                                                <option key="1" value="1">Yes</option>
                                            ]
                                    }


                                </select>

                            </div>


                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>

    );
}