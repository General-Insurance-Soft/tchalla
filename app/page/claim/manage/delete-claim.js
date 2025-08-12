import React from 'react';
import ClaimLoader from './claim-loader';

export default function DeleteClaim({

    selectedContactClaims,
    fetchSubClaim,
    showOptionalPolicySelectSpinner,
    selectedClaim,
    setShowOptionalClaimSelectSpinner,
    showOptionalClaimSelectSpinner,
     deleteClaim,
    resetSelectedClaim

}) {

    return (

        <div className="modal fade" id="deleteClaimModal" data-bs-backdrop="static"
            data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteClaimModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" >
                            Delete claim
                        </h1>

                    </div>
                    <div className="modal-body">

                        {
                            selectedClaim &&
                            <ClaimLoader action={"delete"}
                                selectedContactClaims={selectedContactClaims}
                                fetchSubClaim={fetchSubClaim}
                                showOptionalPolicySelectSpinner={showOptionalPolicySelectSpinner}
                                selectedClaim={selectedClaim}
                                setShowOptionalClaimSelectSpinner={setShowOptionalClaimSelectSpinner}
                                showOptionalClaimSelectSpinner={showOptionalClaimSelectSpinner}
                            />
                        }


                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => resetSelectedClaim()} data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={
                                () => {
                                    deleteClaim();
                                    resetSelectedClaim();
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