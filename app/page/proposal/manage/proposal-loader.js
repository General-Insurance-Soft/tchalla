
export default function ProposalLoader({action, selectedContactProposals, fetchSubproposal, showOptionalProposalSelectSpinner, selectedProposal, setShowOptionalProposalSelectSpinner}) {

    return (

        <div>
            <label htmlFor="insurance">Select proposal to {action}:</label>
            <div>
                <div style={{ display: "inline-block" }}>
                    {/* selectedContactProposals */}

                    {
                        selectedContactProposals.length > 0 &&
                        <select id="insurance" value={selectedProposal.id} className="form-select"
                            onChange={(event) => {
                                setShowOptionalProposalSelectSpinner(true);
                                fetchSubproposal(event.target.value);
                            }
                            }>
                            {
                                selectedContactProposals.map((proposal, index) => {
                                    return (
                                        <option key={index} value={proposal.id}>"Ref: " {proposal.reference_number} " date: " {proposal.start_date}</option>
                                    );
                                })
                            }
                        </select>
                    }

                </div>

                {
                    showOptionalProposalSelectSpinner &&
                    <div
                        className="spinner-border text-primary"
                        style={{
                            display: "inline-block",
                            verticalAlign: "middle",
                            marginLeft: "8px",
                            width: "25px",
                            height: "25px",
                            borderWidth: "0.25rem",
                            borderRadius: "50%"
                        }}
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }

            </div>
        </div>

    );
}