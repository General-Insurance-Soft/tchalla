import React from 'react';
import ProposalLoader from './proposal-loader';

export default function DeleteProposal({
    deleteProposal, resetSelectedProposal, selectedContactProposals,
    setShowOptionalProposalSelectSpinner,
    fetchSubproposal,
    showOptionalProposalSelectSpinner, selectedProposal
}) {

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

                        {
                            selectedProposal &&
                            <ProposalLoader action={"delete"}
                                selectedContactProposals={selectedContactProposals}
                                setShowOptionalProposalSelectSpinner={setShowOptionalProposalSelectSpinner}
                                fetchSubproposal={fetchSubproposal}
                                showOptionalProposalSelectSpinner={showOptionalProposalSelectSpinner}
                                selectedProposal={selectedProposal}
                            />
                        }


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
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}