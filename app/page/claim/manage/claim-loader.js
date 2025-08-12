
export default function ClaimLoader({ action, selectedContactClaims, fetchSubClaim, showOptionalClaimSelectSpinner, selectedClaim, setShowOptionalClaimSelectSpinner }) {

    return (

        <div>
            <label htmlFor="insurance">Select policy to {action}:</label>
            <div>
                <div style={{ display: "inline-block" }}>
                    {/* selectedContactClaims */}

                    {
                        selectedContactClaims.length > 0 &&
                        <select id="claim" value={selectedClaim.id} className="form-select"
                            onChange={(event) => {
                                setShowOptionalClaimSelectSpinner(true);
                                fetchSubClaim(event.target.value);
                            }
                            }>
                            {
                                selectedContactClaims.map((claim, index) => {
                                    return (
                                        <option key={index} value={claim.id}>"Ref: " {claim.claim_number} " date: " {claim.claim_date}</option>
                                    );
                                })
                            }
                        </select>
                    }

                </div>

                {
                    showOptionalClaimSelectSpinner &&
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