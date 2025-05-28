import { forwardRef } from "react";

const ContactStatusModal = forwardRef(({ messageStatus, altAction, altActionName, resetState, setShowEditForm }, ref) => {
    return (
        <div ref={ref} className="modal fade" id="ContactStatusModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="proposalStatusModalModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Status</h1>
                    </div>
                    <div className="modal-body">
                        <p>{messageStatus}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={
                            () => {
                                if (altActionName == "update") {
                                    setShowEditForm(false);
                                }
                                resetState();
                            }

                        } >Close</button>
                        {
                            altAction ?
                                <button type="button" className="btn btn-primary" >{altActionName}</button>
                                : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ContactStatusModal;