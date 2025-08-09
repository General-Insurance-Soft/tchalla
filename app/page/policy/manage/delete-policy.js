import React from 'react';
import PolicyLoader from './policy-loader';

export default function DeletePolicy({
    deletePolicy, resetSelectedPolicy, selectedContactPolicies,
    setShowOptionalPolicySelectSpinner,
    fetchSubPolicy,
    showOptionalPolicySelectSpinner, selectedPolicy
}) {

    return (

        <div className="modal fade" id="deletePolicyModal" data-bs-backdrop="static"
            data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deletePolicyModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" >
                            Delete policy
                        </h1>

                    </div>
                    <div className="modal-body">

                        {
                            selectedPolicy &&
                            <PolicyLoader action={"delete"}
                                selectedContactPolicies={selectedContactPolicies}
                                setShowOptionalPolicySelectSpinner={setShowOptionalPolicySelectSpinner}
                                fetchSubPolicy={fetchSubPolicy}
                                showOptionalPolicySelectSpinner={showOptionalPolicySelectSpinner}
                                selectedPolicy={selectedPolicy}
                            />
                        }


                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => resetSelectedPolicy()} data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={
                                () => {
                                    deletePolicy();
                                    resetSelectedPolicy();
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