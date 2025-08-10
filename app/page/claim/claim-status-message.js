import { forwardRef } from "react";

const ClaimStatusModal = forwardRef(({ messageStatus }, ref) => {
    return (
        <div ref={ref} className="modal fade" id="claimStatusModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="claimStatusModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Status</h1>
                    </div>
                    <div className="modal-body">
                        <p>{messageStatus}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ClaimStatusModal;