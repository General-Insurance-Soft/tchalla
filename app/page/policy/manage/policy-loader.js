
export default function PolicyLoader({action, selectedContactPolicies, fetchSubPolicy, showOptionalPolicySelectSpinner, selectedPolicy, setShowOptionalPolicySelectSpinner}) {

    return (

        <div>
            <label htmlFor="insurance">Select policy to {action}:</label>
            <div>
                <div style={{ display: "inline-block" }}>
                    {/* selectedContactPolicies */}

                    {
                        selectedContactPolicies.length > 0 &&
                        <select id="insurance" value={selectedPolicy.id} className="form-select"
                            onChange={(event) => {
                                setShowOptionalPolicySelectSpinner(true);
                                fetchSubPolicy(event.target.value);
                            }
                            }>
                            {
                                selectedContactPolicies.map((policy, index) => {
                                    return (
                                        <option key={index} value={policy.id}>"Ref: " {policy.policy_number} " date: " {policy.start_date}</option>
                                    );
                                })
                            }
                        </select>
                    }

                </div>

                {
                    showOptionalPolicySelectSpinner &&
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