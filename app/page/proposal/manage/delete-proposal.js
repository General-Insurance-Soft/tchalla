
export default function DeleteProposal({ deleteProposal, resetSelectedProposal }) {

    return (

        <div className="modal fade" id="deleteProposalModal" data-bs-backdrop="static"
            data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteProposalModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" >
                            Delete proposal
                        </h1>

                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete selected proposal?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => resetSelectedProposal()} data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={
                                () => {
                                    deleteProposal();
                                    resetSelectedProposal();
                                }}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}