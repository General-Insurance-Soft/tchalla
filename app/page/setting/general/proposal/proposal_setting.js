export default function ProposalSetting() {

    return (
        <div style={{ marginTop: "10px" }} className="row">
            {/* Storage settings */}

            <div className="col-xl-6">
                <div className="card">
                    <div className="card-body">
                        <h6 className="tc-card-header">Storage</h6>
                        <hr />
                        <form>
                            <div className="row mb-3">
                                <labelhtmlFor="#" className="col-sm-9 col-form-label">Number of days to store attached proposal files:</label>
                                <div className="col-sm-3">
                                    <input style={{ marginBottom: "5px" }} type="text" className="form-control" id="fileStoegaeLength" />
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="checkEmail" />
                                        <label className="form-check-label"htmlFor="gridRadios3">
                                            Indefinite
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* end storage settings */}
        </div>
    );
}
