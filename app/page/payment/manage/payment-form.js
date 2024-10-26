export default function PaymentForm({ paymentAction }) {
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
                            <div className="col-md-4">
                                <label for="firstName">Enter first name:</label>
                                {paymentAction === "add" ?
                                    ""
                                    :
                                    <input id="firstName" type="text" className="form-control" value="Tom" />
                                }

                            </div>
                            <div className="col-md-4">
                                <label for="phone">Enter second name:</label>
                                {paymentAction === "add" ?
                                    ""
                                    :
                                    <input id="secondName" type="text" className="form-control" value="Lopy" />
                                }

                            </div>
                            <div className="col-md-4">
                                <label for="thirdName">Enter third Name:</label>
                                {paymentAction === "add" ?
                                    ""
                                    :
                                    <input for="thirdName" type="text" className="form-control" value="Lee" />
                                }

                            </div>
                            <div className="col-md-4">
                                <label for="Passport">Enter Id/Passport:</label>
                                {paymentAction === "add" ?
                                    ""
                                    :
                                    <input id="Passport" type="text" className="form-control" value="28904783" />
                                }

                            </div>
                          
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>

    );
}